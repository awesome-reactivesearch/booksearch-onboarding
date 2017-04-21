import React, { Component } from "react";
import data from "../service/sampleData";

export default class SampleDataContainer extends Component {
	renderData() {
		return data.map((row, index) => (
			<tr key={index}>
				<td>{row.accommodates}</td>
				<td>{row.bathrooms}</td>
				<td>{row.bed_type}</td>
				<td>{row.bedrooms}</td>
				<td>{row.beds}</td>
				<td>{row.date_from}</td>
				<td>{row.date_to}</td>
				<td>{row.has_availability}</td>
				<td>{row.host_image}</td>
				<td>{row.host_name}</td>
				<td>{row.image}</td>
				<td>{row.listing_url}</td>
				<td>{"["}{row.location.lat}, {row.location.lon}{"]"}</td>
				<td>{row.name}</td>
				<td>{row.price}</td>
				<td>{row.property_type}</td>
				<td>{row.room_type}</td>
			</tr>
		))
	}

	render() {
		return (
			<section className="single-step">
				<h2>Sample Dataset for Airbnb</h2>
				<p>
					We have prepared a small sample of Airbnb dataset to be inserted into the app. Hit the <strong>Next</strong> button to learn about the data-components.
				</p>
				<div className="table-container">
					<table className="highlight responsive-table">
						<thead>
							<tr>
								<th>accommodates</th>
								<th>bathrooms</th>
								<th>bed_type</th>
								<th>bedrooms</th>
								<th>beds</th>
								<th>date_from</th>
								<th>date_to</th>
								<th>has_availability</th>
								<th>host_image</th>
								<th>host_name</th>
								<th>image</th>
								<th>listing_url</th>
								<th>location</th>
								<th>name</th>
								<th>price</th>
								<th>property_type</th>
								<th>room_type</th>
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
