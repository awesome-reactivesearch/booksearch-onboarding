import { default as React, Component } from "react";
import { ServeStep } from "./ServeStep";
import { dataOperation } from "../service/DataOperation";
import { LogoutScreen } from "../header/LogoutScreen";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Clipboard from "Clipboard";

export class Steps extends Component {
	constructor(props) {
		super(props);
		const currentStep = JSON.parse(localStorage.getItem('newUserLoggedIn')) ? 2 : 0;
		this.state = {
			currentStep,
			completedStep: currentStep - 1,
			slideup: false,
			slideVisible: false,
			showLoader: false,
			loadingMessage: ""
		};
		this.nextStep = this.nextStep.bind(this);
		this.toggleSlideup = this.toggleSlideup.bind(this);
	}

	componentDidUpdate() {
		if (this.state.currentStep === 3 || this.state.completedStep === 3) {
			if (!this.state.slideVisible) {
				setTimeout(() => {
					this.setState({
						slideup: true,
						slideVisible: true
					});
				}, 10000);
			}
		}
	}

	toggleLoader(message="Loading... Please Wait!") {
		this.setState({
			showLoader: !this.state.showLoader,
			loadingMessage: message
		});
	}

	setStep(step) {
		if (this.state.showLoader) {
			this.toggleLoader();
		}
		if (this.state.completedStep + 1 >= step) {
			this.setState({
				currentStep: step
			}, () => {
				document.querySelector(".onboarding-right").scrollTop = 0;
			});
		}
	}

	nextStep() {
		if (this.state.showLoader) {
			this.toggleLoader();
		}
		this.setState({
			currentStep: this.state.currentStep + 1,
			completedStep: this.state.completedStep + 1
		}, () => {
			document.querySelector(".onboarding-right").scrollTop = 0;
		});
	}

	skipTutorial() {
		this.setState({
			currentStep: 3
		});
	}

	stepRender() {
		if (this.state.currentStep == 3) {
			let snippet = dataOperation.appSnippet();
			new Clipboard(".copy-btn", {
				text: function(trigger) {
					return snippet;
				}
			});
		}
		return (
			<ServeStep
				key={this.state.currentStep}
				step={this.state.currentStep}
				nextStep={this.nextStep}
				setStep={this.setStep.bind(this)}
				toggleLoader={this.toggleLoader.bind(this)}
				completedStep={this.state.completedStep}>
			</ServeStep>
		);
	}

	toggleSlideup() {
		this.setState({
			slideup: !this.state.slideup
		});
	}

	renderSlideUp() {
		let markup = null;
		const cx = this.state.slideup ? "slideup-active" : "";

		if (this.state.slideVisible || this.state.slideup) {
			markup = (
				<div className={`slideup ${cx}`}>
					<a className="toggle-btn" onClick={this.toggleSlideup}>
						<i className="fa fa-chevron-up"></i>
						<i className="fa fa-chevron-down"></i>
					</a>
					<a target="_blank" href="https://dashboard.appbase.io/reactivesearch" className="item">
						<img src="https://i.imgur.com/WLmVtEN.png" alt="Dashboard"/>
						<h2>Visit Dashboard</h2>
						<p>Create more apps or edit existing ones instantly</p>
					</a>
					<a target="_blank" href="https://opensource.appbase.io/reactive-manual/" className="item">
						<img src="https://i.imgur.com/pHHtAMg.png" alt="Docs"/>
						<h2>Read Docs</h2>
						<p>Neatly organised documentation with code examples</p>
					</a>
				</div>
			);
		}
		return markup;
	}

	renderComponent(method) {
		let element;
		switch (method) {
			case "logout":
				if (this.state.currentStep === 0) {
					element = (<LogoutScreen />);
				}
				break;
			case "credentials":
				if(dataOperation.app && dataOperation.app.appName) {
					element = (
						<div className="credentials">
							<div className="well">
								<table>
									<tbody>
										<tr>
											<th>
												app:
											</th>
											<td>
												{dataOperation.app.appName}
											</td>
										</tr>
										<tr>
											<th>
												credentials:
											</th>
											<td>
												{dataOperation.app.username}:{dataOperation.app.password}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					);
				}
			break;
		}
		return element;
	}

	renderLoader() {
		if (this.state.showLoader) {
			return (
				<div className="overlay-loader">
					<div className="loading loading--double"></div>
					<p>{this.state.loadingMessage}</p>
				</div>
			);
		}
		return null;
	}

	render() {
		return (
			<div>
				{this.renderLoader()}
				<div className="onboarding-left">
					<div className="tex-left img-container reactive-logo">
						<a href="https://opensource.appbase.io/reactivesearch/">
							<img src="assets/images/searchicon.svg" alt="Reactive Maps" className="img-responsive" />
						</a>
					</div>
					<ul className="step-widget">
						<h3>
							Reactive Search Tutorial
							<span className="pull-right">{this.state.currentStep + 1} of 4</span>
						</h3>
						<li className={(this.state.currentStep == 0 ? "active" : this.state.completedStep >= 0 ? "finished" : null)}>
							<span className="icon">
								<i className="fa fa-check-circle"></i>
								<span className="circle">1</span>
							</span>
							Indexing Airbnb Dataset
						</li>
						<li className={(this.state.currentStep == 1 ? "active" : this.state.completedStep >= 1 ? "finished" : null)}>
							<span className="icon">
								<i className="fa fa-check-circle"></i>
								<span className="circle">2</span>
							</span>
							Assembling UI Components
						</li>
						<li className={(this.state.currentStep == 2 ? "active" : this.state.completedStep >= 2 ? "finished" : null)}>
							<span className="icon">
								<i className="fa fa-check-circle"></i>
								<span className="circle">3</span>
							</span>
							Save Progress in an App
						</li>
						<li className={(this.state.currentStep == 3 ? "active" : this.state.completedStep >= 3 ? "finished" : null)}>
							<span className="icon">
								<i className="fa fa-check-circle"></i>
								<span className="circle">4</span>
							</span>
							Relish the App!
						</li>
					</ul>
					{this.renderComponent("credentials")}
					<span className="skip-link">
						<iframe  frameBorder="0" src="https://ghbtns.com/github-btn.html?user=appbaseio&amp;repo=reactivesearch&amp;type=star&amp;count=true&amp;size=large" scrolling="0" width="160px" height="30px"></iframe>
					</span>
				</div>
				<div className="onboarding-navbar">
					<h1>ReactiveSearch</h1>
					<a href="#" className="pull-right">Skip</a>
				</div>
				<div className="onboarding-progress">
					<div className="status" style={{width: ((this.state.currentStep+1) * 25) + "%"}}></div>
				</div>
				<div className="onboarding-right">
					{this.renderComponent("logout")}
					<ReactCSSTransitionGroup
						transitionName="fadeSlideIn"
						transitionAppear={true}
						transitionAppearTimeout={500}
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
						{this.stepRender()}
					</ReactCSSTransitionGroup>
				</div>
				{this.renderSlideUp()}
			</div>
		);
	}
}

Steps.propTypes = {};
// Default props value
Steps.defaultProps = {};
