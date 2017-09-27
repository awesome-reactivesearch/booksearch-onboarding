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
  className<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>new-todo-container</span><span style='color:#800000; '>"</span>
  placeholder<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>What needs to be done?</span><span style='color:#800000; '>"</span>
  onKeyDown<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleNewTodoKeyDown<span style='color:#808030; '>.</span><span style='color:#400000; '>bind</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span>
  onValueChange<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>handleChange<span style='color:#808030; '>.</span><span style='color:#400000; '>bind</span><span style='color:#808030; '>(</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span>
  defaultSelected<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>state<span style='color:#808030; '>.</span>newTodo<span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

const ToggleButtonMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ToggleButton
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
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;or:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>FiltersSensor</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
  <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
  scrollOnTarget<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>window<span style='color:#800080; '>}</span>
  showResultStats<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  pagination<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>false<span style='color:#800080; '>}</span>
  onAllData<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>onAllData<span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>`;

export default class DemoComponents extends Component {
	render() {
		return (
			<section className="single-step">
				<h2>Building the SimpleBeds UI</h2>

				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ReactivebaseMarkup)}
							</div>
						</div>
						<div className="right-col">
							<p><strong>ReactiveBase</strong> is the base wrapper component for all ReactiveSearch components that binds the back-end datastore with the UI components, allowing them to be reactively updated every time there is a change in the datastore or in the UI view components.</p>
							<p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/getting-started/ReactiveBase.html" target="_blank">here</a>.</p>
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
							<p><strong>TextField</strong> creates a simple text input field component that is optionally data connected. We’ll be using TextField here for adding new todo. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/TextField.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ToggleButtonMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/91V7HPR.png" />
							<p><strong>ToggleButton</strong> creates a toggle button UI component that is used for filtering results based on a fixed set of toggle-able options. We’ll be using ToggleButton here to filter “all”, “active”, “completed” todos. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/ToggleButton.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ReactiveListMarkup)} <br/>
							</div>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/ZUXaR28.png" />
							<p><strong>ReactiveList</strong> is an actuator component to display results in a list layout, suited for data that needs a compact display. We’ll use ReactiveList to show the list of todos. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/ReactiveList.html" target="_blank">here</a>.</p>
						</div>
					</div>

				</div>
				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.nextStep()}>
					Next
				</button>
			</section>
		);
	}
}
