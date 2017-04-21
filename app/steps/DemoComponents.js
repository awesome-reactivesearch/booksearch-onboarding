import React, { Component } from "react";
import renderHTML from "react-render-html";

const ReactivebaseMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ReactiveBase
    app<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>housing</span><span style='color:#800000; '>"</span>
    credentials<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>0aL1X5Vts:1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5</span><span style='color:#800000; '>"</span>
    type<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>listing</span><span style='color:#800000; '>"</span>
    theme<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>rbc-red</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>></span>
</pre>
`;

const NumberBoxMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>NumberBox
    componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>GuestSensor</span><span style='color:#800000; '>"</span>
    appbaseField<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>accommodates</span><span style='color:#800000; '>"</span>
    title<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>Guests</span><span style='color:#800000; '>"</span>
    defaultSelected<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#008c00; '>2</span><span style='color:#800080; '>}</span>
    data<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;start:</span> <span style='color:#008c00; '>1</span><span style='color:#808030; '>,</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;end:</span> <span style='color:#008c00; '>16</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>
`;

const RangeSliderMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>RangeSlider
    componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>PriceSensor</span><span style='color:#800000; '>"</span>
    appbaseField<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>price</span><span style='color:#800000; '>"</span>
    title<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>Price Range</span><span style='color:#800000; '>"</span>
    defaultSelected<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;start:</span> <span style='color:#008c00; '>10</span><span style='color:#808030; '>,</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;end:</span> <span style='color:#008c00; '>50</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
    stepValue<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#008c00; '>10</span><span style='color:#800080; '>}</span>
    range<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;start:</span> <span style='color:#008c00; '>10</span><span style='color:#808030; '>,</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;end:</span> <span style='color:#008c00; '>250</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
    rangeLabels<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;start:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>$10</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;end:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>$250</span><span style='color:#800000; '>"</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
    react<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;and:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>DateRangeSensor</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>GuestSensor</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>
`;

const DateRangeMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>DateRange
    componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>DateRangeSensor</span><span style='color:#800000; '>"</span>
    appbaseField<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>date_from</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>date_to</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>}</span>
    title<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>When</span><span style='color:#800000; '>"</span>
    numberOfMonths<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#008c00; '>1</span><span style='color:#800080; '>}</span>
    customQuery<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>dateQuery<span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>
`;

const ResultCardMarkup = `
<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ResultCard
    componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>SearchResult</span><span style='color:#800000; '>"</span>
    appbaseField<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>name</span><span style='color:#800000; '>"</span>
    from<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#008c00; '>0</span><span style='color:#800080; '>}</span>
    size<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#008c00; '>12</span><span style='color:#800080; '>}</span>
    onData<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800000; font-weight:bold; '>this</span><span style='color:#808030; '>.</span>onData<span style='color:#800080; '>}</span>
    pagination<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span>true<span style='color:#800080; '>}</span>
    react<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
<span style='color:#e34adc; '>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;and:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>DateRangeSensor</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>GuestSensor</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>PriceSensor</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
    <span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
<span style='color:#808030; '>/</span><span style='color:#808030; '>></span>
</pre>
`;

export default class DemoComponents extends Component {
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
								{renderHTML(DateRangeMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/1NQyO0H.png" />
							<p><strong>DateRange</strong> sensor component creates a calendar view based UI widget, enabling us to select a range of dates for filtering. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/DateRange.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(RangeSliderMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/WE8Fvpt.png" />
							<p><strong>RangeSlider</strong> component creates a numeric range slider UI widget, which can be used for granular filtering of numeric data. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/RangeSlider.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(NumberBoxMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/nGe0rYe.png" />
							<p><strong>NumberBox</strong> sensor component creates a NumberBox UI widget. It is used for filtering results based on a numeric query. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/NumberBox.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ResultCardMarkup)}
							</div>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/ZdofPeT.png" />
							<p><strong>ResultCard</strong> allows us to render the search matches in a card format and comes with built-in support for pagination, infinite scrolling as well as sorting options.</p>
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
