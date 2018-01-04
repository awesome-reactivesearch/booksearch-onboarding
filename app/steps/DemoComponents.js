import React, { Component } from "react";
import renderHTML from "react-render-html";

const ReactivebaseMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ReactiveBase
app<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>good-books-ds</span><span style='color:#800000; '>"</span>
credentials<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d</span><span style='color:#800000; '>"</span>
<span style='color:#808030; '>></span>
</pre>`;

const DataSearchMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>DataSearch
componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>mainSearch</span><span style='color:#800000; '>"</span>
dataField<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>original_title</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>authors</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span><span style='color:#800080; '>}</span>
queryFormat<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>and</span><span style='color:#800000; '>"</span>
<span style='color:#800000; '>/</span><span style='color:#0000e6; '>></span>
</pre>`;

const SingleRangeMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>SingleRange
componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>ratingsFilter</span><span style='color:#800000; '>"</span>
dataField<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>average_rating_rounded</span><span style='color:#800000; '>"</span>
title<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>Book Ratings</span><span style='color:#800000; '>"</span>
data<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#808030; '>[</span>
	<span style='color:#800080; '>{</span> start<span style='color:#800080; '>:</span> <span style='color:#008c00; '>4</span><span style='color:#808030; '>,</span> end<span style='color:#800080; '>:</span> <span style='color:#008c00; '>5</span><span style='color:#808030; '>,</span> label<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>4 stars &amp; up</span><span style='color:#800000; '>"</span> <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span>
	<span style='color:#800080; '>{</span> start<span style='color:#800080; '>:</span> <span style='color:#008c00; '>3</span><span style='color:#808030; '>,</span> end<span style='color:#800080; '>:</span> <span style='color:#008c00; '>5</span><span style='color:#808030; '>,</span> label<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>3 stars &amp; up</span><span style='color:#800000; '>"</span> <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span>
	<span style='color:#800080; '>{</span> start<span style='color:#800080; '>:</span> <span style='color:#008c00; '>2</span><span style='color:#808030; '>,</span> end<span style='color:#800080; '>:</span> <span style='color:#008c00; '>5</span><span style='color:#808030; '>,</span> label<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>2 stars &amp; up</span><span style='color:#800000; '>"</span> <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span>
	<span style='color:#800080; '>{</span> start<span style='color:#800080; '>:</span> <span style='color:#008c00; '>1</span><span style='color:#808030; '>,</span> end<span style='color:#800080; '>:</span> <span style='color:#008c00; '>5</span><span style='color:#808030; '>,</span> label<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>1 star &amp; up</span><span style='color:#800000; '>"</span> <span style='color:#800080; '>}</span>
<span style='color:#808030; '>]</span><span style='color:#800080; '>}</span>
<span style='color:#800000; '>/</span><span style='color:#0000e6; '>></span>
</pre>`;

const ResultCardMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#808030; '>&lt;</span>ResultCard
componentId<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>results</span><span style='color:#800000; '>"</span>
dataField<span style='color:#808030; '>=</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>original_title</span><span style='color:#800000; '>"</span>
react<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#800080; '>{</span>
		and<span style='color:#800080; '>:</span> <span style='color:#808030; '>[</span><span style='color:#800000; '>"</span><span style='color:#0000e6; '>mainSearch</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>ratingsFilter</span><span style='color:#800000; '>"</span><span style='color:#808030; '>]</span>
<span style='color:#800080; '>}</span><span style='color:#800080; '>}</span>
onData<span style='color:#808030; '>=</span><span style='color:#800080; '>{</span><span style='color:#808030; '>(</span>res<span style='color:#808030; '>)</span> <span style='color:#808030; '>=</span><span style='color:#808030; '>></span> <span style='color:#808030; '>(</span><span style='color:#800080; '>{</span>
		<span style='color:#800000; '>"</span><span style='color:#0000e6; '>image</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> res<span style='color:#808030; '>.</span>image<span style='color:#808030; '>,</span>
		<span style='color:#800000; '>"</span><span style='color:#0000e6; '>title</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> res<span style='color:#808030; '>.</span>title<span style='color:#808030; '>,</span>
		<span style='color:#800000; '>"</span><span style='color:#0000e6; '>description</span><span style='color:#800000; '>"</span><span style='color:#800080; '>:</span> res<span style='color:#808030; '>.</span>average_rating <span style='color:#808030; '>+</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '> star </span><span style='color:#800000; '>"</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span><span style='color:#800080; '>}</span>
<span style='color:#800000; '>/</span><span style='color:#0000e6; '>></span>
</pre>`;

export default class DemoComponents extends Component {
  render() {
    return (
      <section className="single-step">
        <h2>Building the Book Search App</h2>

        <h5>Integrating Reactive Components</h5>

        <p>We will use <a href="https://opensource.appbase.io/reactivesearch/" target="_blank">ReactiveSearch</a> library for building reactive UI</p>

        <div className="docs-wrapper">
          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(ReactivebaseMarkup)}
              </div>
            </div>
            <div className="right-col">
              <p><strong>ReactiveBase</strong> is the base wrapper component for all ReactiveSearch components that binds the back-end datastore with the UI components, allowing them to be reactively updated every time there is a change in the datastore or in the UI view components.</p>
              <p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html" target="_blank">here</a>.</p>
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(DataSearchMarkup)}
              </div>
            </div>
						<div className="right-col">
							<img src="https://cdn-images-1.medium.com/max/660/1*8QuEdof1010tlow27TvrSw.png" />
              <p><strong>DataSearch</strong> creates a search box UI component that is connected to one or more database fields. </p>
              <p>You can read more about it in the docs <a href="https://opensource.appbase.io/reactive-manual/search-components/datasearch.html" target="_blank">here</a>.</p>
            </div>
          </div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(SingleRangeMarkup)}
              </div>
            </div>
						<div className="right-col">
							<img className="right-col-img" src="https://cdn-images-1.medium.com/max/880/1*P1AlfsGsQbYYYcq-aZYJRg.png" />
              <p><strong>SingleRange</strong> creates a numeric range selector UI component that is connected to a database field. <a href="https://opensource.appbase.io/reactive-manual/range-components/singlerange.html" target="_blank">here</a>.</p>
            </div>
					</div>

          <div className="row">
            <div className="left-col">
              <div className="code-div">
                {renderHTML(ResultCardMarkup)}
              </div>
            </div>
						<div className="right-col">
							<img src="https://cdn-images-1.medium.com/max/880/1*Y-KrLQElvpDHGs_toYvxdw.png" />
              <p><strong>ResultCard</strong> creates a result card UI component to display results in a card layout, suited for data that have an associated image. <a href="https://opensource.appbase.io/reactive-manual/result-components/resultcard.html" target="_blank">here</a>.</p>
            </div>
          </div>


        </div>

        <div className="docs-wrapper">
          <p>The full code is available on <a href="https://codepen.io/dhruvdutt/pen/MEjvpo" target="_blank">CodePen</a> and <a href="https://github.com/appbaseio-apps/booksearch.git" target="_blank">GitHub</a>, in case you miss anything or want to dive deep.</p>
        </div>

        <button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.nextStep()}>
          Next
        </button>
      </section>
    );
  }
}
