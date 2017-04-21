import { default as React, Component } from "react";
import { AppCreation } from "./AppCreation";
import SampleDataContainer from "./SampleDataContainer";
import DemoComponents from "./DemoComponents";
import { LiveFiddle } from "./LiveFiddle";

export class ServeStep extends Component {
	constructor(props) {
		super(props);
	}

	renderComponent() {
		switch(this.props.step) {
			case 0:
				return (<SampleDataContainer {...this.props}></SampleDataContainer>);
			break;
			case 1:
				return (<DemoComponents {...this.props}></DemoComponents>);
			break;
			case 2:
				return (<AppCreation {...this.props}></AppCreation>);
			break;
			case 3:
				return (<LiveFiddle {...this.props}></LiveFiddle>);
			break;
		}
	}

	render() {
		return (
			<div className="steps-wrapper">
				{this.renderComponent()}
			</div>
		);
	}
}

ServeStep.propTypes = {
};
// Default props value
ServeStep.defaultProps = {
};
