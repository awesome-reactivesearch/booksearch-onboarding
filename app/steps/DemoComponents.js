import React, { Component } from "react";
import { dataOperation } from "../service/DataOperation";
import { data } from "../service/indexData";
import renderHTML from "react-render-html";

const ReactivebaseMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>ReactiveBase</span>
<span style='color:#274796; '>	</span><span style='color:#5f5035; '>app</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"hn"</span><span style='color:#274796; '></span>
<span style='color:#274796; '>	credentials</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"YOzeIAmyn:f1955c6b-03e7-4eb8-90ca-bfcc28a0ba0c"</span><span style='color:#274796; '></span>
<span style='color:#274796; '>	</span><span style='color:#074726; '>type</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"post"</span><span style='color:#274796; '></span>
<span style='color:#274796; '>	theme</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"rbc-orange"</span><span style='color:#274796; '></span>
<span style='color:#a65700; '>></span>
<span style='color:#a65700; '>&lt;/</span><span style='color:#5f5035; '>ReactiveBase</span><span style='color:#a65700; '>></span>
</pre>
`;

const SingleDropdownListMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>SingleDropdownList</span>
<span style='color:#274796; '>&#xa0;</span><span style='color:#274796; '>   componentId</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"TypeSensor"</span><span style='color:#274796; '></span>
<span style='color:#274796; '>&#xa0;&#xa0;&#xa0;&#xa0;appbaseField</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"p_type"</span><span style='color:#274796; '></span>
<span style='color:#274796; '>&#xa0;&#xa0;&#xa0;&#xa0;</span><span style='color:#074726; '>size</span><span style='color:#808030; '>=</span><span style='color:#274796; '>{</span><span style='color:#008c00; '>100</span><span style='color:#274796; '>}</span>
<span style='color:#274796; '>&#xa0;&#xa0;&#xa0;&#xa0;selectAllLabel</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"All"</span><span style='color:#274796; '></span>
<span style='color:#274796; '>&#xa0;&#xa0;&#xa0;&#xa0;defaultSelected</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"All"</span><span style='color:#274796; '></span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const DataSearchMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>DataSearch</span>
<span style='color:#274796; '>	</span><span style='color:#5f5035; '>componentId</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"InputSensor"</span><span style='color:#274796; '></span>
<span style='color:#274796; '>	appbaseField</span><span style='color:#808030; '>=</span><span style='color:#274796; '>{[</span><span style='color:#0000e6; '>"title"</span><span style='color:#274796; '>, </span><span style='color:#0000e6; '>"text"</span><span style='color:#274796; '>, </span><span style='color:#0000e6; '>"by"</span><span style='color:#274796; '>]}</span>
<span style='color:#274796; '>	</span><span style='color:#074726; '>placeholder</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"Search posts by title, text or author..."</span><span style='color:#274796; '></span>
<span style='color:#274796; '>	</span><span style='color:#074726; '>autocomplete</span><span style='color:#808030; '>=</span><span style='color:#274796; '>{false}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

const ResultListMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#a65700; '>&lt;</span><span style='color:#5f5035; '>ResultList</span>
<span style='color:#274796; '>	</span><span style='color:#5f5035; '>appbaseField</span><span style='color:#808030; '>=</span><span style='color:#0000e6; '>"title"</span><span style='color:#274796; '></span>
<span style='color:#274796; '>	from</span><span style='color:#808030; '>=</span><span style='color:#274796; '>{</span><span style='color:#008c00; '>0</span><span style='color:#274796; '>}</span>
<span style='color:#274796; '>	</span><span style='color:#074726; '>size</span><span style='color:#808030; '>=</span><span style='color:#274796; '>{</span><span style='color:#008c00; '>20</span><span style='color:#274796; '>}</span>
<span style='color:#274796; '>	pagination</span><span style='color:#808030; '>=</span><span style='color:#274796; '>{true}</span>
<span style='color:#274796; '>	onData</span><span style='color:#808030; '>=</span><span style='color:#274796; '>{this</span><span style='color:#008c00; '>.</span><span style='color:#274796; '>onData}</span>
<span style='color:#274796; '>	react</span><span style='color:#808030; '>=</span><span style='color:#274796; '>{{</span>
<span style='color:#274796; '>		and: [</span><span style='color:#0000e6; '>"InputSensor"</span><span style='color:#274796; '>, </span><span style='color:#0000e6; '>"TypeSensor"</span><span style='color:#274796; '>]</span>
<span style='color:#274796; '>	}}</span>
<span style='color:#a65700; '>/></span>
</pre>
`;

export default class DemoComponents extends Component {
	submit() {
		this.props.toggleLoader("Assembling data and components for your app. Hold tight!");
		dataOperation.indexData(data)
		.on('data', (res) => {
			this.props.nextStep();
		})
		.on('error', (err) => {
			console.error("bulk failed: ", err);
		});
	}

	submitBtn() {
		let btn;
		if (this.props.completedStep >= 2) {
			btn = (
				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.setStep(3)}>
					Next
				</button>
			);
		} else {
			btn = (
				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.submit()}>
					Next
				</button>
			);
		}
		return btn;
	}

	render() {
		return (
			<section className="single-step">
				<h2>Let us assemble all the components</h2>

				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ReactivebaseMarkup)}
							</div>
						</div>
						<div className="right-col">
							<p>ReactiveBase is the first component in any ReactiveSearch (or Maps) app, it connects the UI layer with the appbase.io data backend.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(SingleDropdownListMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/kquzzEU.png" />
							<p><strong>SingleDropdownList</strong> is a dropdown UI component. We will use this to create a search filter by stories, comments, etc. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/SingleDropdownList.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(DataSearchMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img className="big" src="https://i.imgur.com/AxAJkte.png" />
							<p><strong>DataSearch</strong> is a searchbox UI component that can search on one or more fields, and comes with optional auto-complete suggestions and result highlighting support. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/DataSearch.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ResultListMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img className="big" src="https://i.imgur.com/YA2JbnN.png" />
							<p><strong>ResultList</strong> allows us to render the search matches in a list format and comes with built-in support for pagination, infinite scrolling as well as sorting options. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/ReactiveList.html" target="_blank">here</a>.</p>
						</div>
					</div>
				</div>
				{this.submitBtn()}
			</section>
		);
	}
}
