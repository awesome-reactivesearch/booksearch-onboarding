import React, { Component } from "react";
import renderHTML from "react-render-html";

const TodoMarkup = `<pre style='color:#000000;background:#ffffff;'><span style='color:#800080; '>{</span>
    id<span style='color:#800080; '>:</span> <span style='color:#008c00; '>5696</span><span style='color:#808030; '>,</span>
    isbn<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>718149866</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    title<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>The Brightest Star in the Sky</span><span style='color:#800000; '>"</span>
    authors<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>Marian Keyes</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    average_rating<span style='color:#800080; '>:</span> <span style='color:#008000; '>3.65</span><span style='color:#808030; '>,</span>
    average_rating_rounded<span style='color:#800080; '>:</span> <span style='color:#008c00; '>4</span><span style='color:#808030; '>,</span>
    books_count<span style='color:#800080; '>:</span> <span style='color:#008c00; '>49</span><span style='color:#808030; '>,</span>
    language_code<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>en-GB</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    image<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>img_url</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    image_medium<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>img_url_medium</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    original_publication_year<span style='color:#800080; '>:</span> <span style='color:#008c00; '>2009</span><span style='color:#808030; '>,</span>
    original_title<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>The Brightest Star in the Sky</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    original_series<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    ratings_count<span style='color:#800080; '>:</span> <span style='color:#008c00; '>17413</span><span style='color:#808030; '>,</span>
<span style='color:#800080; '>}</span>
</pre>`;

export default class SampleDataContainer extends Component {

	render() {
		return (
			<section className="single-step">
				<h2>Book Search storage structure</h2>
				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(TodoMarkup)} <br/>
							</div>
						</div>
						<div className="right-col">
							<p>Each book item would contain a unique <strong>id, isbn</strong> along with other book properties. <br/> <br/> We would be mostly focusing on <strong>original_title</strong>, <strong>authors</strong> image and <strong>average_rating_rounded</strong> to show in results.</p>
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
