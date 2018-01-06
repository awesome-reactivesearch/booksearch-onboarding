import React, { Component } from "react";
import renderHTML from "react-render-html";

const BookMarkup = `<pre style='color:#000000;background:#ffffff; border: 1px solid #ccc;'><span style='color:#800080; '>{</span>
    id<span style='color:#800080; '>:</span> <span style='color:#008c00; '>5696</span><span style='color:#808030; '>,</span>
    title<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>The Brightest Star in the Sky</span><span style='color:#800000; '>"</span>
    authors<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>Marian Keyes</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    average_rating<span style='color:#800080; '>:</span> <span style='color:#008000; '>3.65</span><span style='color:#808030; '>,</span>
    image<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>img_url</span><span style='color:#800000; '>"</span><span style='color:#808030; '>,</span>
    original_publication_year<span style='color:#800080; '>:</span> <span style='color:#008c00; '>2009</span><span style='color:#808030; '>,</span>
    original_title<span style='color:#800080; '>:</span> <span style='color:#800000; '>"</span><span style='color:#0000e6; '>The Brightest Star in the Sky</span><span style='color:#800000; '>"</span>
<span style='color:#800080; '>}</span>
</pre>`;

const DEJAVU_LINK =
	"https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAKrAQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsyzhBoa6J5YHVVPvvStg3duFL_9lBQxNAUEiS2LxrmQIi48IYsLycilGizdEqIf-Z3FUOIdIqHULMVrBqKtL5qUJx1gsOpt0WbuAhQS8qMoK8IdlqoG0tr-8UHi3sau8zMqY64fzpXCehrrPI4SNk8VTbiMsIZhduWAX4hCATwCBWfvrJqfAoiqKGt9zyTfsxLU7CbxGxE6__je7GeiC7UaPdD8YDeYC7eRxv-8JF1j3ysqY_Lkqc6hZAtUm9dN1Mg7O2uJ1MJxZyZWCmnz3ovLxz81T3C6KJZXI0OFjB5ll22UJm-zpscbqDsqx3Nz-reGuWWylUYoXRr0HBjalL-Feu_rGgiP_k7bcAA&editable=false";

export default class SampleDataContainer extends Component {
	render() {
		return (
			<section className="single-step">
				<h2>Book Search Dataset</h2>
				<div className="docs-wrapper">
					<div className="row">
						<div className="left-col">
							<div className="code-div">
								{renderHTML(BookMarkup)} <br />
							</div>
						</div>
						<div className="right-col step-one">
							<p className="data-desc">
								Each book item will contain a unique <strong>id</strong> along
								with other book properties. <br /> <br /> In this app, we will
								be using <strong>original_title</strong>,{" "}
								<strong>authors, image, original_publication_year </strong> and{" "}
								<strong>average_rating_rounded</strong> fields.
								<br />
								<br />
								<span>
									<span>Alternatively, you can access the</span>
									<a href={DEJAVU_LINK} target="_blank" className="dataset-link">
										full dataset over here.
									</a>
								</span>
							</p>
							{/* Hit the <strong>Next</strong> button at the bottom of the screen. */}
						</div>
					</div>
				</div>

				<button
					className="btn btn-primary pos-static submit-btn"
					onClick={() => this.props.nextStep()}
				>
					Next
				</button>
			</section>
		);
	}
}
