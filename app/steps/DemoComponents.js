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
	appbaseField<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>date_from</span><span style='color:#800000; '>"</span>
	componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>DateRangeSensor</span><span style='color:#800000; '>"</span>
	title<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>When</span><span style='color:#800000; '>"</span>
	numberOfMonths<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#008c00; '>1</span><span style='color:#800080; '>}</span>
	queryFormat<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>basic_date</span><span style='color:#800000; '>"</span>
	extra<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
		initialVisibleMonth<span style='color:#800080; '>:</span> <span style='color:#808030; '>(</span><span style='color:#808030; '>)</span> <span style='color:#808030; '>=</span><span style='color:#808030; '>></span> moment<span style='color:#808030; '>(</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>2017-04-01</span><span style='color:#800000; '>"</span><span style='color:#808030; '>)</span>
	<span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
<span style='color:#800000; '>/</span><span style='color:#0000e6; '>></span>
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
				<h2>Building the SimpleBeds UI</h2>

				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(ReactivebaseMarkup)}
							</div>
						</div>
						<div className="right-col">
							<p><strong>ReactiveBase</strong> is the first component in a ReactiveSearch app, it connects the UI layer with the appbase.io DB service, where we indexed the Airbnb dataset.</p>
							<p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/getting-started/ReactiveBase.html" target="_blank">here</a>.</p>
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
							<p><strong>NumberBox</strong> creates a NumberBox UI component. It prunes available listings based on the number of current selected guests. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/NumberBox.html" target="_blank">here</a>.</p>
						</div>
					</div>

					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(DateRangeMarkup)} <br/>
							</div>
						</div>
						<div className="right-col">
							<img src="https://i.imgur.com/1NQyO0H.png" />
							<p><strong>DateRange</strong> creates a calendar view based UI component. It filters the available listings based on a user selected date range. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/DateRange.html" target="_blank">here</a>.</p>
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
							<p><strong>RangeSlider</strong> creates a numeric range based UI component. We will use it to create a price filter. Additionally, we will use the <code>react</code> prop to only display price ranges of the available listings. You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/v1.0.0/components/RangeSlider.html" target="_blank">here</a>.</p>
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
							<p><strong>ResultCard</strong> renders the available listings based on the applied filters in a card format and comes with a built-in support for pagination. Notice the use of <code>react</code> prop for specifying how to filter the data.</p>
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
