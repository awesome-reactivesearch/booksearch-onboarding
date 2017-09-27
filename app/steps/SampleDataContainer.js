import React, { Component } from "react";
import data from "../service/sampleData";

export default class SampleDataContainer extends Component {
	renderData() {
		return data.map((row, index) => (
			<tr key={index}>
				<td>{row.id}</td>
				<td>{row.title}</td>
				<td>{row.completed}</td>
				<td>{row.createdAt}</td>
			</tr>
		))
	}

	render() {
		return (
			<section className="single-step">
				<h2>Preparing Sample Dataset</h2>
				<p>
					Every good app starts with data. We have prepared a sample Airbnb dataset to be indexed in our app. Hit the <strong>Next</strong> button at the bottom of the screen.
				</p>
				<div className="table-container">
					<table className="highlight responsive-table">
						<thead>
							<tr>
								<th>id</th>
								<th>title</th>
								<th>completed</th>
								<th>createdAt</th>
							</tr>
						</thead>
						<tbody>
							{this.renderData()}
						</tbody>
					</table>
				</div>

				<button className="btn btn-primary pos-static submit-btn" onClick={() => this.props.nextStep()}>
					Next
				</button>
			</section>
		);
	}
}
