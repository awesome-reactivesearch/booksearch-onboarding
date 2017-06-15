export const sampleCodeSnippet = `const {
	ReactiveBase,
	DateRange,
	NumberBox,
	RangeSlider,
	ResultCard } = ReactiveSearch;

class Main extends React.Component {
	onData(res) {
		return {
			image: res.image,
			title: res.name,
			desc: (
				<div>
					<div className="price">{res.price}</div>
					<span className="host" style={{"backgroundImage": "url(" + res.host_image + ")"}}></span>
					<p>{res.room_type} · {res.accommodates} guests</p>
				</div>
			),
			url: res.listing_url
		};
	}

	render() {
		return (
			<div className="row" style={{"margin": "0"}}>
				<ReactiveBase
					app={{app}}
					credentials={{credentials}}
					type="listing"
					theme="rbc-red"
				>
					<nav>
						<a href="/examples/airbeds" className="brand">Airbeds</a>
					</nav>

					<div className="sensor-wrapper clearfix">
						<DateRange
							appbaseField="date_from"
							componentId="DateRangeSensor"
							title="When"
							numberOfMonths={1}
							queryFormat="basic_date"
							extra={{
								initialVisibleMonth: () => moment("2017-04-01")
							}}
						/>

						<RangeSlider
							componentId="PriceSensor"
							appbaseField="price"
							title="Price Range"
							defaultSelected={{
								start: 10,
								end: 50
							}}
							stepValue={10}
							range={{
								start: 10,
								end: 250
							}}
							rangeLabels={{
								start: "$10",
								end: "$250"
							}}
							react={{
									and: ["DateRangeSensor", "GuestSensor"]
								}}
						/>

						<NumberBox
							componentId="GuestSensor"
							appbaseField="accommodates"
							title="Guests"
							defaultSelected={2}
							data={{
								start: 1,
								end: 16
							}}
						/>
					</div>

					<div className="row result-wrapper clearfix">
						<div className="col s12">
							<div className="row">
								<ResultCard
									componentId="SearchResult"
									appbaseField="name"
									from={0}
									size={12}
									onData={this.onData}
									pagination={true}
									react={{
										and: ["DateRangeSensor", "GuestSensor", "PriceSensor"]
									}}
								/>
							</div>
						</div>
					</div>
				</ReactiveBase>
			</div>
		);
	}
}

ReactDOM.render(
	<Main />,
	document.getElementById('root')
);`;
