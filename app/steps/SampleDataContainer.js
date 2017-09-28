import React, { Component } from "react";
import renderHTML from "react-render-html";
import data from "../service/sampleData";

const TodoMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#800080; '>{</span>
  id<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>73f462af37f1</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  title<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>Build TodoMVC app</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
  completed<span style='color:#800080; '>:</span> <span style='color:#0f4d75; '>false</span><span style='color:#808030; '>,</span>
  createdAt<span style='color:#800080; '>:</span> <span style='color:#008c00; '>1506527915473</span>
<span style='color:#800080; '>}</span>
</pre>`;

export default class SampleDataContainer extends Component {

	render() {
		return (
			<section className="single-step">
				<h2>Todos storage structure</h2>
				<p>
					We would simply store todos in an array. The structure of each object would be:
				</p>
				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(TodoMarkup)} <br/>
							</div>
						</div>
						<div className="right-col">
							<p>Each todo item would contain an <strong>id</strong> that is uniquely auto-generated, a <strong>title</strong>, <strong>completed</strong> status and a <strong>createdAt</strong> timestamp.</p>
							{/* Hit the <strong>Next</strong> button at the bottom of the screen. */}
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
