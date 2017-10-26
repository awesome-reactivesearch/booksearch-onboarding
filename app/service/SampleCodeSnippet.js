export const sampleCodeSnippet = `

// Based on: http://todomvc.com/examples/react/#/
const { Component } = React
let app = app || {}
let routerInstance

const {
  ReactiveBase,
  TextField,
  ReactiveList,
  ReactiveElement,
  DataController
} = ReactiveSearch

const ES_TYPE = "todo_reactjs"
const APP_NAME = "todomvc"
const CREDENTIALS = "kQSlRKaSv:a081eec0-b85f-4953-a3d0-c18f94b26de4"

const ALL_TODOS = "all"
const ACTIVE_TODOS = "active"
const COMPLETED_TODOS = "completed"

const ESCAPE_KEY = 27
const ENTER_KEY = 13

// Based on https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/utils.js
class Utils {
  static uuid () {
    let i, random, id = "";

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        id += "-"
      }
      id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16)
    }
    return id
  }

  static pluralize (count, word) {
    return count === 1 ? word : word + "s"
  }

  static store (namespace, data) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data))
    }

    let datastored = localStorage.getItem(namespace);
    return (datastored && JSON.parse(datastored)) || []
  }

  static mergeTodos ({ mode, newData, currentData }) {

    let todosData = [];

    // streaming data
    if (mode === "streaming") {
      // todo is deleted
      if (newData && newData._deleted) {
        todosData = currentData.filter(data => data._id !== newData._id)
      } else {
        let _updated = false;
        todosData = currentData.map(data => {
          // todo is updated
          if (data._id === newData._id) {
            _updated = true;
            return newData;
          } else {
            return data;
          }
        })
        // todo is added
        if (!_updated) {
          todosData = currentData;
          todosData.push(newData);
        }
      }
    } else {
      // non-streaming data
      if (Array.isArray(newData) && newData.length > 0) {
        todosData = newData;
      } else if (Array.isArray(currentData) && currentData.length > 0) {
        todosData = currentData;
      }
    }

    return todosData;
  }
}

// Based on: https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/todoModel.js

class TodoModel {
  constructor (key) {
    this.key = key;
    this.todos = [];
    this.onChanges = [];
    this.appbaseRef = new Appbase({
      url: "https://scalr.api.appbase.io",
      app: "todomvc",
      credentials: "kQSlRKaSv:a081eec0-b85f-4953-a3d0-c18f94b26de4"
    });

    this.appbaseRef.search({
      type: ES_TYPE,
      size: 1000,
      body: {
        query: {
          match_all: {}
        }
      }
    }).on("data", ({hits: {hits = []} = {}} = {}) => {
      this.todos = hits.map(({_source = {}} = {}) => _source);
      this.inform();
      console.log("search, match: ", hits)
    }).on("error", (error) => {
      console.log("caught a search error: ", error)
    });

    this.appbaseRef.searchStream({
      type: ES_TYPE,
      body: {
        query: {
          match_all: {}
        }
      }
    }).on("data", (stream) => {
      let {
        _deleted,
        _source
      } = stream;

      if (_deleted) {
        this.todos = this.todos.filter(function (candidate) {
          return candidate.id !== _source.id
        })
      } else if (_source) {
        const todo = this.todos.find(({id}) => id == _source.id);
        todo ? Object.assign(todo, _source) : this.todos.unshift(_source)
      }

      // this.todos = hits.map(({_source = {}} = {}) => _source)
      this.inform();
      console.log("searchStream, new match: ", stream)
    }).on("error", (error) => {
      console.log("caught a searchStream, error: ", error)
    })
  }

  subscribe (onChange) {
    this.onChanges.push(onChange)
  }

  inform () {
    // Utils.store(this.key, this.todos)
    // this.todos = [...this.todos]
    this.onChanges.forEach((cb) => { cb() })
  }

  addTodo (title) {
    const id = Utils.uuid();
    const jsonObject = {
      id,
      title,
      completed: false,
      createdAt: Date.now()
    };

    // optimistic logic
    this.todos = [jsonObject].concat(this.todos);
    this.inform();

    // broadcast all changes
    this.appbaseRef.index({
      type: ES_TYPE,
      id: id,
      body: jsonObject
    }).on("data", function(response) {
      console.log(response)
    }).on("error", function(error) {
      console.log(error)
    })
  }

  toggleAll (checked) {
    // Note: it"s usually better to use immutable data structures since they"re
    // easier to reason about and React works very well with them. That"s why
    // we use map() and filter() everywhere instead of mutating the array or
    // todo items themselves.
    this.todos = this.todos.map((todo) => ({
      ...todo,
      completed: checked
    }));
    this.inform();

    // broadcast all changes
    this.todos.forEach((todo) => {
      this.appbaseRef.index({
        type: ES_TYPE,
        id: todo.id,
        body: todo
      })
    })
  }

  toggle (todoToToggle) {

    // optimistic logic
    this.todos = this.todos.map((todo) => {
      return todo !== todoToToggle ? todo : {
        ...todo,
        completed: !todo.completed
      }
    });
    this.inform();

    // broadcast all changes
    this.appbaseRef.index({
      type: ES_TYPE,
      id: todoToToggle.id,
      body: {
        ...todoToToggle,
        completed: !todoToToggle.completed
      }
    }).on("data", function(response) {
      console.log(response)
    }).on("error", function(error) {
      console.log(error)
    })
  };

  destroy (todo) {
    // optimistic logic
    this.todos = this.todos.filter((candidate) => {
      return candidate !== todo
    });
    this.inform();

    // broadcast all changes
    this.appbaseRef.delete({
      type: ES_TYPE,
      id: todo.id
    }).on("data", function(response) {
      console.log(response)
    }).on("error", function(error) {
      console.log(error)
    })
  }

  save (todoToSave, text) {
    // optimistic logic
    this.todos = this.todos.map((todo) => {
      return todo !== todoToSave ? todo : {
        ...todo,
        title: text
      }
    });
    this.inform();

    // broadcast all changes
    this.appbaseRef.index({
      type: ES_TYPE,
      id: todoToSave.id,
      body: {
        ...todoToSave,
        title: text
      }
    }).on("data", function(response) {
      console.log(response)
    }).on("error", function(error) {
      console.log(error)
    })
  }

  clearCompleted () {
    let completed = this.todos.filter((todo) => todo.completed);

    // optimistic logic
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.inform();

    // broadcast all changes
    completed.forEach((todo) => {
      this.appbaseRef.delete({
        type: ES_TYPE,
        id: todo.id
      })
    })
  }
}

// Based on: https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/todoItem.jsx
class TodoItem extends Component {

  constructor (props) {
    super(props);
    this.state = {
      editText: "",
      editing: false,
      autoFocus: false
    }
  }

  handleBlur (event) {
    this.setState({
      editText: this.props.todo.title,
      editing: false
    });
  }

  handleSubmit (event) {
    let val = this.state.editText.trim();
    if (val) {
      this.props.onSave(val);
      this.setState({
        editText: val,
        editing: false
      })
    } else {
      this.props.onDestroy()
    }
  }

  handleEdit () {
    this.setState({
      editText: this.props.todo.title,
      editing: true
    })
  }

  handleKeyDown (event) {
    if (event.which === ESCAPE_KEY) {
      this.setState({
        editText: this.props.todo.title,
        editing: false
      })
    } else if (event.which === ENTER_KEY) {
      this.handleSubmit(event)
    }
  }

  handleChange (value) {
    if (this.state.editing) {
      this.setState({ editText: value })
    }
  }

  getInitialState () {
    return {editText: this.props.todo.title}
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.editing && this.state.editing) {
      this.setState({ autoFocus: true });

      // workaround because after setState re-rendering is not happening
      let node = ReactDOM.findDOMNode(this.refs.editField);
      node = node.childNodes[0].children[0];
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length)
    }
  }

  render () {
    return (
      <li className={classNames({
        completed: this.props.todo.completed,
        editing: this.state.editing
      })}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={this.props.onToggle}
          />
          <label onDoubleClick={this.handleEdit.bind(this)}>
            {this.props.todo.title}
          </label>
          <button className="destroy" onClick={this.props.onDestroy} />
        </div>
        <TextField
          ref="editField"
          autoFocus={this.state.autoFocus}
          componentId="EditSensor"
          dataField="name"
          className="edit-todo-container"
          defaultSelected={this.state.editText}
          onBlur={this.handleBlur.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          onValueChange={this.handleChange.bind(this)}
        />
      </li>
    )
  }
}

class TodoButton extends Component {
  handleClick () {
    this.props.onClick(this.props.value);
  }

  render() {
    let cx = classNames(
      "btn rbc-btn", {
        "rbc-btn-active": this.props.active,
        "rbc-btn-inactive": !this.props.active,
      }
    );
    return (
      <button
        className={cx}
        onClick={this.handleClick.bind(this)}>
        {this.props.label}
      </button>
    )
  }
}

// Based on: https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/footer.jsx
class TodoFooter extends Component {

  onAllData (data) {
    // merging all streaming and historic data
    var todosData = Utils.mergeTodos(data);

    let activeTodoCount = todosData.reduce((accum, todo) => {
      return todo._source.completed ? accum : accum + 1
    }, 0)

    let activeTodoWord = Utils.pluralize(activeTodoCount, "item");

    return(
      <span className="todo-count">
        <strong>{activeTodoCount}</strong> {activeTodoWord} left
      </span>
    )
  }

  render () {
    let clearButton = null;
    let { completedCount, onClearCompleted, nowShowing } = this.props;

    if (completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={onClearCompleted}>
          Clear completed
        </button>
      )
    }

    return (
      <footer className="footer">
        <DataController
          componentId="ActiveCountSensor"
          visible={false}
          showFilter={false}
          customQuery={
            function(value) {
              return {
                match_all: {}
              }
            }
          }
        />
        <ReactiveElement
          componentId="ActiveCount"
          stream={true}
          showResultStats={false}
          onAllData={this.onAllData.bind(this)}
          react={{
            or: ["ActiveCountSensor"]
          }}
        />
        <ul className="filters">
          <div className="rbc-buttongroup">
            <TodoButton
              label="All"
              value="all"
              active={this.props.nowShowing === ALL_TODOS}
              onClick={this.props.handleToggle}
            />
            <TodoButton
              label="Active"
              value="active"
              active={this.props.nowShowing === ACTIVE_TODOS}
              onClick={this.props.handleToggle}
            />
            <TodoButton
              label="Completed"
              value="completed"
              active={this.props.nowShowing === COMPLETED_TODOS}
              onClick={this.props.handleToggle}
            />
          </div>
        </ul>
        {clearButton}
      </footer>
    )
  }
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowShowing: ALL_TODOS,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  handleToggle (e) {
    this.setState({
      nowShowing: e
    });
  }

  toggle (todoToToggle) {
    this.props.model.toggle(todoToToggle);
  }

  destroy (todo) {
    this.props.model.destroy(todo);
  }

  save (todoToSave, text) {
    this.props.model.save(todoToSave, text);
  }

  clearCompleted () {
    this.props.model.clearCompleted();
  }

  render() {
    let footer,
    todos = this.props.model.todos;

    let activeTodoCount = todos.reduce((accum, todo) => {
      return todo.completed ? accum : accum + 1
    }, 0);

    let completedCount = todos.length - activeTodoCount;

    if (activeTodoCount || completedCount) {
      footer =
      <TodoFooter
        count={activeTodoCount}
        completedCount={completedCount}
        nowShowing={this.state.nowShowing}
        onClearCompleted={this.clearCompleted}
        handleToggle={this.handleToggle}
      />
    }

    if (this.state.nowShowing !== ALL_TODOS) {
      todos = todos.filter((todo) => todo.completed === (this.state.nowShowing === COMPLETED_TODOS));
    }
    return (
      <div>
        {
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={{...todo}}
                onToggle={this.toggle.bind(this, todo)}
                onDestroy={this.destroy.bind(this, todo)}
                onSave={this.save.bind(this, todo)}
              />
            );
          })
        }
        {footer}
      </div>
    );
  }
}

// Based on: https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/app.jsx
class TodoApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      nowShowing: ALL_TODOS,
      editing: null,
      newTodo: ""
    }
    this.onAllData = this.onAllData.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
  }

  componentDidMount () {
    let { setState } = this;
    routerInstance = Router({
      "/": setState.bind(this, {nowShowing: ALL_TODOS}),
      "/all": setState.bind(this, {nowShowing: ALL_TODOS}),
      "/active": setState.bind(this, {nowShowing: ACTIVE_TODOS}),
      "/completed": setState.bind(this, {nowShowing: COMPLETED_TODOS})
    });
    routerInstance.init("/")
  }

  handleChange (newTodo) {
    this.setState({ newTodo })
  }

  handleNewTodoKeyDown (event) {
    if (event.keyCode !== ENTER_KEY) {
      return
    }
    event.preventDefault();
    const val = this.state.newTodo.trim();
    if (val) {
      this.props.model.addTodo(val);
      this.setState({newTodo: ""})
    }
  }

  toggleAll (event) {
    let checked = event.target.checked;
    this.props.model.toggleAll(checked)
  }

  customQuery(value) {
    return {
      query: {
        match_all: {}
      }
    };
  }

  onAllData(data) {

    // merging all streaming and historic data
    let todosData = Utils.mergeTodos(data);

    // sorting todos based on creation time
    todosData = todosData.sort(function(a, b) {
      return a._source.createdAt - b._source.createdAt;
    });

    return (
      <TodoList
        todos={todosData}
        model={this.props.model}
      />
    )
  }

  render () {
    let todos = this.props.model.todos, toggleAllSection;

    let { nowShowing, newTodo } = this.state;

    let activeTodoCount = todos.reduce((accum, todo) => {
      return todo.completed ? accum : accum + 1
    }, 0);

    if (todos.length) {
      toggleAllSection = (
        <input
          className="toggle-all"
          type="checkbox"
          onChange={this.toggleAll}
          checked={activeTodoCount === 0}
        />
      );
    }

    return (
      <ReactiveBase
        app="todomvc"
        credentials="kDoV3s5Xk:4994cac6-00a3-4179-b159-b0adbfdde34b"
        type="todo_reactjs">
        <DataController
          componentId="AllTodosSensor"
          visible={false}
          showFilter={false}
          customQuery={
            function(value) {
              return {
                match_all: {}
              }
            }
          }
        />
        <header className="header">
          <h1>todos</h1>
          <TextField
            componentId="NewTodoSensor"
            dataField="title"
            className="new-todo-container"
            placeholder="What needs to be done?"
            onKeyDown={this.handleNewTodoKeyDown}
            onValueChange={this.handleChange}
            defaultSelected={newTodo}
            autoFocus={true}
          />
        </header>

        <section className="main">
          {toggleAllSection}
          <ul className="todo-list">
            <ReactiveList
              stream={true}
              react={{
                or: ["AllTodosSensor"]
              }}
              scrollOnTarget={window}
              showResultStats={false}
              pagination={false}
              onAllData={this.onAllData}
            />
          </ul>
        </section>
      </ReactiveBase>
    )
  }
}

let model = new TodoModel('react-todos')
let render = () => {
  ReactDOM.render(
    <TodoApp model={model}/>,
    document.getElementsByClassName('todoapp')[0]
  )
}

model.subscribe(render)
render()
`;
