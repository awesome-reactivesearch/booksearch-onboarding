import React, { Component } from "react";
import { render } from "react-dom";
import { Steps } from "./steps/index";

class Main extends Component {
	render() {
		return (
			<div className="appContainer">
				<div className="app-container">
					<Steps />
				</div>
			</div>
		);
	}
}

render(<Main />, document.getElementById("onboarding-container"));
