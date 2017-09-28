export const sampleCodeSnippet = `const {
  Component
} = React
let app = app || {}

const {
  ReactiveBase,
  TextField,
  ToggleButton,
  ResultList,
  ReactiveList
} = ReactiveSearch

const ES_TYPE = 'todo_reactjs'
const APP_NAME = 'todomvc'
const CREDENTIALS = 'kQSlRKaSv:a081eec0-b85f-4953-a3d0-c18f94b26de4'

// Based on https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/utils.js
class Utils {
  static uuid () {
    var i, random
    var uuid = ''

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-'
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
          .toString(16)
    }
    return uuid
  }

  static pluralize (count, word) {
    return count === 1 ? word : word + 's'
  }

  static store (namespace, data) {
    if (data) {
      return localStorage.setItem(namespace, JSON.stringify(data))
    }

    let datastored = localStorage.getItem(namespace)
    return (datastored && JSON.parse(datastored)) || []
  }
}

// Based on: https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/todoModel.js

class TodoModel {
  constructor (key) {
    this.key = key
    this.todos = []
    this.onChanges = []
    this.appbaseRef = new Appbase({
      url: 'https://scalr.api.appbase.io',
      app: APP_NAME,
      credentials: CREDENTIALS
    })

    this.appbaseRef.search({
      type: ES_TYPE,
      size: 1000,
      body: {
        query: {
          match_all: {}
        }
      }
    }).on('data', ({hits: {hits = []} = {}} = {}) => {
      this.todos = hits.map(({_source = {}} = {}) => _source)
      this.inform()
      console.log("searchStream(), new match: ", hits)
    }).on('error', (error) => {
      console.log("caught a searchStream() error: ", error)
    })

    this.appbaseRef.searchStream({
      type: ES_TYPE,
      body: {
        query: {
          match_all: {}
        }
      }
    }).on('data', (stream) => {
      let {
        _deleted,
        _source
      } = stream

      if (_deleted) {
        this.todos = this.todos.filter(function (candidate) {
          return candidate.id !== _source.id
        })
      } else if (_source) {
        const todo = this.todos.find(({id}) => id == _source.id)
        todo ? Object.assign(todo, _source) : this.todos.unshift(_source)
      }

      // this.todos = hits.map(({_source = {}} = {}) => _source)
      this.inform()
      console.log("searchStream(), new match: ", stream)
    }).on('error', (error) => {
      console.log("caught a searchStream() error: ", error)
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
    const id = Utils.uuid()
    const jsonObject = {
      id,
      title,
      completed: false
    }

    this.todos = [jsonObject].concat(this.todos)
    this.inform()

    // broadcast all changes
    this.appbaseRef.index({
      type: ES_TYPE,
      id: id,
      body: jsonObject
    }).on('data', function(response) {
      console.log(response)
    }).on('error', function(error) {
      console.log(error)
    })
  }

  toggleAll (checked) {
    // Note: it's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map() and filter() everywhere instead of mutating the array or
    // todo items themselves.
    this.todos = this.todos.map((todo) => ({
      ...todo,
      completed: checked
    }))
    this.inform()

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

    this.todos = this.todos.map((todo) => {
      return todo !== todoToToggle ? todo : {
        ...todo,
        completed: !todo.completed
      }
    })
    this.inform()

    // broadcast all changes
    this.appbaseRef.index({
      type: ES_TYPE,
      id: todoToToggle.id,
      body: {
        ...todoToToggle,
        completed: !todoToToggle.completed
      }
    }).on('data', function(response) {
      console.log(response)
    }).on('error', function(error) {
      console.log(error)
    })
  };

  destroy (todo) {
    this.todos = this.todos.filter((candidate) => {
      return candidate !== todo
    })
    this.inform()

    // broadcast all changes
    this.appbaseRef.delete({
      type: ES_TYPE,
      id: todo.id
    }).on('data', function(response) {
      console.log(response)
    }).on('error', function(error) {
      console.log(error)
    })
  }

  save (todoToSave, text) {
    this.todos = this.todos.map((todo) => {
      return todo !== todoToSave ? todo : {
        ...todo,
        title: text
      }
    })
    this.inform()

    // broadcast all changes
    this.appbaseRef.index({
      type: ES_TYPE,
      id: todoToSave.id,
      body: {
        ...todoToSave,
        title: text
      }
    }).on('data', function(response) {
      console.log(response)
    }).on('error', function(error) {
      console.log(error)
    })
  }

  clearCompleted () {
    let completed = this.todos.filter((todo) => todo.completed)

    this.todos = this.todos.filter((todo) => !todo.completed)
    this.inform()

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
const ESCAPE_KEY = 27
const ENTER_KEY = 13
class TodoItem extends Component {

  constructor (props) {
    super(props);
    this.state = {
      editText: '',
      editing: false
    }
  }

  handleSubmit (event) {
    console.log('handleSubmit', event);
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

  onBlur () {
    console.log('onBlur');
    this.setState({
      editText: '',
      editing: false
    })
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

  render () {
    return (
      <li className={classNames({
        completed: this.props.todo.completed,
        editing: this.state.editing
      })}>
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
          componentId="EditSensor"
          dataField="name"
          className="edit-todo-container"
          defaultSelected={this.state.editText}
          onBlur={this.handleSubmit.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          onValueChange={this.handleChange.bind(this)}
        />
      </li>
    )
  }
}

// Based on: https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/footer.jsx
class TodoFooter extends Component {
  render () {
    let activeTodoWord = Utils.pluralize(this.props.count, 'item')
    let clearButton = null

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}>
          Clear completed
        </button>
      )
    }

    let nowShowing = this.props.nowShowing
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.count}</strong> {activeTodoWord} left
        </span>
        <ul className="filters">
        <ToggleButton
            componentId="FiltersSensor"
            dataField="completed"
            defaultSelected={[nowShowing]}
            multiSelect={false}
            customQuery={
              function(data) {
                let val;
                if (Array.isArray(data)) {
                  val = data[0].value;
                }
                const completed = (val === 'completed') ? 'true' : (val === 'active') ? 'false' : 'all';

                if (completed === 'all') {
                  return {
              			query: {
              				match_all: {}
              			}
              		}
                }

                return {
                  query: {
                    bool: {
                      must: [
                        {
                          match: {
                            completed: completed
                          }
                        }
                      ]
                    }
                  }
                }
              }
            }
            data={
              [
                {"label": "all",        "value": "all"},
                {"label": "active",     "value": "active"},
                {"label": "completed",  "value": "completed"}
              ]
            }
          />
        </ul>
        {clearButton}
      </footer>
    )
  }
}

// Based on: https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/app.jsx
const ALL_TODOS = 'all'
const ACTIVE_TODOS = 'active'
const COMPLETED_TODOS = 'completed'
class TodoApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      nowShowing: ALL_TODOS,
      editing: null,
      newTodo: ''
    }
    this.onAllData = this.onAllData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
  }

  componentDidMount () {
    let setState = this.setState;
    let router = Router({
      '/': setState.bind(this, {nowShowing: ALL_TODOS}),
      '/active': setState.bind(this, {nowShowing: ACTIVE_TODOS}),
      '/completed': setState.bind(this, {nowShowing: COMPLETED_TODOS})
    });
    router.init('/')
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
      this.setState({newTodo: ''})
    }
  }

  toggleAll (event) {
    let checked = event.target.checked;
    this.props.model.toggleAll(checked)
  }

  toggle (todoToToggle) {
    this.props.model.toggle(todoToToggle)
  }

  destroy (todo) {
    this.props.model.destroy(todo)
  }

  save (todoToSave, text) {
    this.props.model.save(todoToSave, text);
  }

  clearCompleted () {
    this.props.model.clearCompleted()
  }

  customQuery(value) {
    return {
      query: {
        match_all: {}
      }
    };
  }

  onAllData(data) {
    console.log('onAllData', data);

    let { mode, newData, currentData } = data;
    let todosData = [];

    // streaming data
    if (mode === 'streaming') {
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

    // sorting todos based on creation time
    todosData = todosData.sort(function(a, b) {
      return a._source.createdAt > b._source.createdAt;
    });

    return todosData.map(({ _source: todo }) => {
      return (
        <TodoItem
          key={todo.id}
          todo={{...todo}}
          onToggle={this.toggle.bind(this, todo)}
          onDestroy={this.destroy.bind(this, todo)}
          onSave={this.save.bind(this, todo)}
        />
      );
    }, this);
  }

  render () {
    let footer,
    main,
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
        onClearCompleted={this.clearCompleted.bind(this)}
      />
    }

    return (
      <ReactiveBase
        app="todomvc"
        credentials="kDoV3s5Xk:4994cac6-00a3-4179-b159-b0adbfdde34b"
        type="todo_reactjs"
        >
          <header className="header">
            <h1>todos</h1>
            <TextField
              componentId="NewTodoSensor"
              dataField="title"
              className="new-todo-container"
              placeholder="What needs to be done?"
              onKeyDown={this.handleNewTodoKeyDown.bind(this)}
              onValueChange={this.handleChange.bind(this)}
              defaultSelected={this.state.newTodo}
            />
          </header>

          <section className="main">
            <input
              className="toggle-all"
              type="checkbox"
              onChange={this.toggleAll.bind(this)}
              checked={activeTodoCount === 0}
            />
            <ul className="todo-list">
              <ReactiveList
                stream={true}
                react={{
                  or: ["FiltersSensor"]
                }}
                scrollOnTarget={window}
                showResultStats={false}
                pagination={false}
                onAllData={this.onAllData}
              />
            </ul>
          </section>
          {footer}
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
