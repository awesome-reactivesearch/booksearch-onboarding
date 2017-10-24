import React, { Component } from "react";
import renderHTML from "react-render-html";

const ReactivebaseMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ReactiveBase
  app<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>todomvc</span><span style='color:#800000; '>"</span>
  credentials<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>kDoV3s5Xk:4994cac6-00a3-4179-b159-b0adbfdde34b</span><span style='color:#800000; '>"</span>
  type<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>todo_reactjs</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>></span>
</pre>`;

const TextFieldMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>TextField
  componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>NewTodoSensor</span><span style='color:#800000; '>"</span>
  dataField<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>title</span><span style='color:#800000; '>"</span>
  className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>new-todo-container</span><span style='color:#800000; '>"</span>
  placeholder<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>What needs to be done?</span><span style='color:#800000; '>"</span>
  onKeyDown<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleNewTodoKeyDown<span style='color:#800080; '>}</span>
  onValueChange<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleChange<span style='color:#800080; '>}</span>
  defaultSelected<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>newTodo<span style='color:#800080; '>}</span>
  autoFocus<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>true<span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const DataControllerMarkup1 = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>DataController
  componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>AllTodosSensor</span><span style='color:#800000; '>"</span>
  visible<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  showFilter<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  customQuery<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>
    function<span style='color:#808030; '>(</span>value<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;match_all:</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span>
      <span style='color:#800080; '>}</span>
    <span style='color:#800080; '>}</span>
  <span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const ReactiveList = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ToggleButton
  componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>FiltersSensor</span><span style='color:#800000; '>"</span>
  dataField<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>completed</span><span style='color:#800000; '>"</span>
  defaultSelected<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#808030; '>[</span>nowShowing<span style='color:#808030; '>]</span><span style='color:#800080; '>}</span>
  multiSelect<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  data<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#808030; '>[</span>
    <span style='color:#ffffff; background:#dd0000; font-weight:bold; font-style:italic; '>{</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>label</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>all</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>value</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>all</span><span style='color:#800000; '>"</span><span style='color:#ffffff; background:#dd0000; font-weight:bold; font-style:italic; '>}</span><span style='color:#808030; '>,</span>
    <span style='color:#ffffff; background:#dd0000; font-weight:bold; font-style:italic; '>{</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>label</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>active</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>value</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>active</span><span style='color:#800000; '>"</span><span style='color:#ffffff; background:#dd0000; font-weight:bold; font-style:italic; '>}</span><span style='color:#808030; '>,</span>
    <span style='color:#ffffff; background:#dd0000; font-weight:bold; font-style:italic; '>{</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>label</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>completed</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>value</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>completed</span><span style='color:#800000; '>"</span><span style='color:#ffffff; background:#dd0000; font-weight:bold; font-style:italic; '>}</span><span style='color:#808030; '>]</span><span style='color:#800080; '>}</span>
  customQuery<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const ReactiveListMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ReactiveList
  stream<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>true<span style='color:#800080; '>}</span>
  react<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;or:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>AllTodosSensor</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
  <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
  scrollOnTarget<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>window<span style='color:#800080; '>}</span>
  showResultStats<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  pagination<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  onAllData<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>onAllData<span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const TodoFooterMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>TodoFooter
  count<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>activeTodoCount<span style='color:#800080; '>}</span>
  completedCount<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>completedCount<span style='color:#800080; '>}</span>
  nowShowing<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>state<span style='color:#808030; '>.</span>nowShowing<span style='color:#800080; '>}</span>
  onClearCompleted<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>clearCompleted<span style='color:#800080; '>}</span>
  handleToggle<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleToggle<span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const TodoButtonMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>TodoButton
  label<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>All</span><span style='color:#800000; '>"</span>
  value<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>all</span><span style='color:#800000; '>"</span>
  active<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>props<span style='color:#808030; '>.</span>nowShowing <span style='color:#808030; '>=</span><span style='color:#808030; '>=</span><span style='color:#808030; '>=</span> ALL_TODOS<span style='color:#800080; '>}</span>
  onClick<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>props<span style='color:#808030; '>.</span>handleToggle<span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const DataControllerMarkup2 = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>DataController
  componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>ActiveCountSensor</span><span style='color:#800000; '>"</span>
  visible<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  showFilter<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  customQuery<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>
    function<span style='color:#808030; '>(</span>value<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
      <span style='color:#800000; font-weight:bold; '>return</span> <span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;match_all:</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span>
      <span style='color:#800080; '>}</span>
    <span style='color:#800080; '>}</span>
  <span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const ReactiveElementMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ReactiveElement
  componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>ActiveCount</span><span style='color:#800000; '>"</span>
  stream<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>true<span style='color:#800080; '>}</span>
  showResultStats<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  onAllData<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>onAllData<span style='color:#808030; '>.</span><span style='color:#400000; '>bind</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span>
  react<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;or:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>ActiveCountSensor</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
  <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const IndexMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>appbaseRef<span style='color:#808030; '>.</span><span style='color:#797997; '>index</span><span style='color:#808030; '>(</span><span style='color:#800080; '>{</span>
  type<span style='color:#800080; '>:</span> ES_TYPE<span style='color:#808030; '>,</span>
  id<span style='color:#800080; '>:</span> id<span style='color:#808030; '>,</span>
  body<span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#808030; '>.</span><span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>on<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>data</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>`;

const DeleteMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>appbaseRef<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>delete</span><span style='color:#808030; '>(</span><span style='color:#800080; '>{</span>
  type<span style='color:#800080; '>:</span> ES_TYPE<span style='color:#808030; '>,</span>
  id<span style='color:#800080; '>:</span> todo<span style='color:#808030; '>.</span>id
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>on<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>data</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>`;

const SearchMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>appbaseRef<span style='color:#808030; '>.</span>search<span style='color:#808030; '>(</span><span style='color:#800080; '>{</span>
  type<span style='color:#800080; '>:</span> ES_TYPE<span style='color:#808030; '>,</span>
  body<span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span>
    query<span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span>
      match_all<span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span>
    <span style='color:#800080; '>}</span>
  <span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>on<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>data</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>`;

const SearchStreamMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>appbaseRef<span style='color:#808030; '>.</span>searchStream<span style='color:#808030; '>(</span><span style='color:#800080; '>{</span>
  type<span style='color:#800080; '>:</span> ES_TYPE<span style='color:#808030; '>,</span>
  body<span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span>
    query<span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span>
      match_all<span style='color:#800080; '>:</span> <span style='color:#800080; '>{</span><span style='color:#800080; '>}</span>
    <span style='color:#800080; '>}</span>
  <span style='color:#800080; '>}</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#808030; '>.</span>on<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>data</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
  console<span style='color:#808030; '>.</span><span style='color:#800000; font-weight:bold; '>log</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>;</span>
</pre>`;

export default class DemoComponents extends Component {
  render() {
    return (
      <section className="single-step">
        <h2>Building the TodoMVC App</h2>

        <h5>Integrating Reactive Components</h5>

        <p>We will use <a href="https://opensource.appbase.io/reactivesearch/" target="_blank">ReactiveSearch</a> library for building reactive UI</p>

        <p style={{fontSize: "15px"}}>Before we start integrating components, let's get an overview of which reactive components we will be using.</p>
        <img src="https://i.imgur.com/gZDsR7G.png" />

        <div className="docs-wrapper">
          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(ReactivebaseMarkup)}
              </div>
            </div>
            <div className="right-col">
              <p><strong>ReactiveBase</strong> is the base wrapper component for all ReactiveSearch components that binds the back-end datastore with the UI components, allowing them to be reactively updated every time there is a change in the datastore or in the UI view components.</p>
              <p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1/getting-started/ReactiveBase.html" target="_blank">here</a>.</p>
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(TextFieldMarkup)}
              </div>
            </div>
            <div className="right-col">
              <img src="https://i.imgur.com/DmDB9zF.png" />
              <p><strong>TextField</strong> creates a simple text input field component that is optionally data connected. We’ll be using TextField here for adding new todo. </p>
              <p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1/components/TextField.html" target="_blank">here</a>.</p>
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(DataControllerMarkup1)} <br/>
              </div>
              <div className="code-div">
                {renderHTML(ReactiveListMarkup)}
              </div>
            </div>
            <div className="right-col">
              <img src="https://i.imgur.com/S1K63r4.png" />
              <p><strong>DataController</strong> creates a UI optional component connected with a custom database query. We won’t directly show this component but rather use it as a pseudo component sensor to show the todos list. </p>
              <p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1/components/DataController.html" target="_blank">here</a>.</p>
              <p><strong>ReactiveList</strong> is an actuator component to display results in a list layout, suited for data that needs a compact display. We’ll use ReactiveList to show the list of todos. </p>
              <p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1/components/ReactiveList.html" target="_blank">here</a>.</p>
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(TodoFooterMarkup)} <br/>
              </div>
              <div className="code-div">
                {renderHTML(TodoButtonMarkup)} <br/>
              </div>
            </div>
            <div className="right-col">
              <img src="https://i.imgur.com/Tf2phCm.png" />
              <p><strong>TodoFooter, TodoButton</strong></p>
              <p>We’ll need some custom components for showing footer controls. These aren’t any reactive components. These are components that control how TodoList gets rendered based on All/Active/Completed selection. </p>
              <p>TodoFooter consists of TodoButton component which simply contains a button element and handles toggle on click.</p>
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(DataControllerMarkup2)} <br/>
              </div>
              <div className="code-div">
                {renderHTML(ReactiveElementMarkup)} <br/>
              </div>
            </div>
            <div className="right-col">
              <img src="https://i.imgur.com/Pk4Uzk8.png" />
              <p>We had previously used the pseudo component <strong>DataController</strong> for showing TodoList. We’ll need it here again to show the “x items left” count.</p>
              <p><strong>ReactiveElement</strong> is a user defined data-driven UI component. It allows the user to define a custom UI for displaying the results, and can reactively update its UI on data changes in other components. We’ll use it here to show UI for number of items left. </p>
              <p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1/components/ReactiveElement.html" target="_blank">here</a>.</p>
            </div>
          </div>
        </div>

        <h5>Integrating Appbase-js</h5>
        <p>We will use <a href="https://github.com/appbaseio/appbase-js" target="_blank">appbase-js</a> - a data streaming library for managing outgoing write requests</p>
        <div className="docs-wrapper">
          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(IndexMarkup)}
              </div>
            </div>
            <div className="right-col">
              <p><strong>index</strong> method writes a JSON data object at a given type and id location, or replaces if an object already exists.</p>
              <p>This method is used while adding, toggling, editing a todo. If the id is existing in our dataset, then it will replace the body and if it is not existing, then it will create a new object.</p>
              <p>You can read more about it in the docs <a href="http://docs.appbase.io/scalr/javascript/api-reference.html#javascript-api-reference-writing-data-index" target="_blank">here</a>.</p>
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(DeleteMarkup)}
              </div>
            </div>
            <div className="right-col">
              <p><strong>search</strong> method removes a JSON data object based on the id.</p>
              <p>We will use this to remove/delete a todo and clearing completed todos.</p>
              <p>You can read more about it in the docs <a href="http://docs.appbase.io/scalr/javascript/api-reference.html#javascript-api-reference-writing-data-delete" target="_blank">here</a>.</p>
            </div>
          </div>

          <p>Next, we will need some methods to maintain the state of todos inside TodoModel</p>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(SearchMarkup)}
              </div>
            </div>
            <div className="right-col">
              <p><strong>search</strong> method is used for matching documents in a type. It’s a convenience method for ElasticSearch’s /_search endpoint.</p>
              <p>We will use it to initially load the todos in the TodoModel state.</p>
              <p>You can read more about it in the docs <a href="http://docs.appbase.io/scalr/javascript/api-reference.html#javascript-api-reference-getting-data-search" target="_blank">here</a>.</p>
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(SearchStreamMarkup)}
              </div>
            </div>
            <div className="right-col">
              <p><strong>searchStream</strong> method is used for continuously streaming results of search query on a given type.</p>
              <p>We will use it to stream the todos data in the TodoModel state.</p>
              <p>You can read more about it in the docs <a href="http://docs.appbase.io/scalr/javascript/api-reference.html#javascript-api-reference-streaming-data-searchstream" target="_blank">here</a>.</p>
            </div>
          </div>

          <p>The full code is available on <a href="https://codepen.io/dhruvdutt/pen/MEjvpo" target="_blank">CodePen</a> and <a href="https://github.com/appbaseio-apps/todomvc.git" target="_blank">GitHub</a>, in case you miss anything or want to dive deep.</p>

        </div>

        <button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.nextStep()}>
          Next
        </button>
      </section>
    );
  }
}
