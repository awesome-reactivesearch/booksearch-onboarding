import { default as React, Component } from "react";
import { render } from "react-dom";
import { LoginScreen } from "../header/LoginScreen";
import { dataOperation } from "../service/DataOperation";
import { settings } from "../service/analyzerSettings";
import { mapping } from "../service/mappingObj";
import { data } from "../service/indexData";
import intercomService from "../service/IntercomService";

export class AppCreation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appName: "",
			readOnly: false,
			url: null,
			error: false,
			appnameValidation: false
		};
		this.errorMsg = "";
		this.appNameChange = this.appNameChange.bind(this);
		this.createUrl = this.createUrl.bind(this);
		this.showError = this.showError.bind(this);
	}

	componentWillMount() {
		this.getUser();
	}

	componentDidMount() {
		if (dataOperation.app && dataOperation.app.appName) {
			this.setState({
				appName: dataOperation.app.appName,
				readOnly: true
			});
			dataOperation.createUrl(this.createUrl);
		}
	}

	getUser() {
		this.setState({
			loadingProgress: true
		});
		dataOperation.getUser().done((res) => {
			this.setState({
				loadingProgress: false,
				profile: res
			});
			intercomService.loggingIn(res.body);
			const userInfo = {
				email: res.body.email,
				reactivesearch: true
			};
			intercomService.update(userInfo);
			dataOperation.updateUser(res.body);
		}).fail((res) => {
			this.setState({
				loadingProgress: false
			});
		});
	}

	container() {
		let view = (
			<div>
				<LoginScreen />
				<p>
					<a className="subscribe" style={{border: "0", fontSize: "14px", textTransform: "none", position: "absolute", bottom: "10px", left: "calc(50% - 88px)"}} onClick={() => this.props.nextStep()}>Skip to Airbnb App</a>
				</p>
			</div>
		);
		if (this.state.loadingProgress) {
			view = (
				<div style={{position: "relative", top: 0, left: 0}}>
					<div className="loading loading--dark"></div>
				</div>
			);
		}
		if(this.state.profile) {
			let readOnly = {
				readOnly: this.state.readOnly
			};
			view = (
			  <section className="single-step">
				<h2>Create an app</h2>
				<p>
					It's time we create an appbase.io app where all the data will reside once our <b>reactivesearch</b> app is up and running.
				</p>

				{this.state.error ? this.showError(): null}

				<div className="row">
					<div className="input-field">
						<label {...readOnly}>
							<span>Enter app name</span>
							<input type="text"
								className="form-control"
								onChange={this.appNameChange}
								value={this.state.appName} />
						</label>
						{this.submitBtn()}
					</div>
				</div>
			  </section>
			);
		}
		return view;
	}

	appNameChange(event) {
		let inputVal = event.target.value;
		var patt = /^[a-zA-Z0-9_+-@$\.]+$/;
		if (!patt.test(inputVal)) {
			this.errorMsg = "Only use a-z,A-Z,0-9 and any of -._+$@ chars for the app name."
		}
		this.setState({
			appName: inputVal,
			appnameValidation: patt.test(inputVal),
			error: !patt.test(inputVal)
		});
	}

	submit() {
		if (this.state.appName.trim() != "") {
			if (dataOperation.user && dataOperation.user.apps && !dataOperation.user.apps.hasOwnProperty(this.state.appName)) {
				this.createApp();
			} else {
				this.errorMsg = this.state.appName + " already exists!";
				this.setState({
					error: true
				});
			}
		} else {
			this.errorMsg = "App name should not be empty.";
			this.setState({
				error: true
			});
		}
	}

	createApp() {
		dataOperation.createApp(this.state.appName).done((res) => {
			if (res.message === 'App Created') {
				dataOperation.getPermission(res.body.id).then((permission) => {
					this.setState({
						readOnly: true
					});
					res.body.appName = this.state.appName;
					res.body = Object.assign(res.body, permission);
					dataOperation.updateApp(res.body);
					dataOperation.createUrl(this.createUrl)
				})
				.then(() => {this.props.toggleLoader("Applying mappings... Please Wait!")})
				.then(() => dataOperation.closeIndex())
				.then(() => dataOperation.updateSettings("listing", settings))
				.then(() => dataOperation.openIndex())
				.then(() => dataOperation.updateMapping("listing", mapping))
				.then((res) => {
					this.props.toggleLoader();
					this.props.toggleLoader("Assembling data and components for your app. Hold tight!");
					dataOperation.indexData(data)
					.on('data', (res) => {
						this.props.nextStep();
					})
					.on('error', (err) => {
						console.error("bulk failed: ", err);
					});
				})
				.catch((e) => {
					console.log(e);
					this.errorMsg = 'Some error occured. Please try again!';
					this.setState({
						error: true
					});
				});
			} else {
				this.errorMsg = 'Some error occured. Please try again!';
				this.setState({
					error: true
				});
			}
		}).fail((res) => {
			if(res && res.responseJSON && res.responseJSON.Message && res.responseJSON.Message.indexOf('UNIQUE KEY') > 0) {
				this.errorMsg = 'An app with the same name already exists!';
			} else {
				this.errorMsg = res.responseText;
			}
			this.setState({
				error: true
			});
		});
	}

	createUrl(url) {
		this.setState({
			url: url
		});
	}

	showError() {
		return (
			<div className="error-box">
				{this.errorMsg}
			</div>
		)
	}

	submitBtn() {
		let btn;
		if (this.state.readOnly) {
			btn = (
				<button className="btn btn-primary submit-btn" onClick={() => this.props.setStep(1)}>
					Next
				</button>
			);
		} else {
			let readonly;
			if (!this.state.appnameValidation) {
				readonly = {
					disabled: !this.state.appnameValidation
				};
			}
			btn = (
				<button {...readonly} className="btn btn-primary submit-btn" onClick={() => this.submit()}>
					Submit
				</button>
			);
		}
		return btn;
	}

	render() {
		return (
			<div className="appContainer">
				<div className="app-container">
					{this.container()}
				</div>
			</div>
		);
	}
}

AppCreation.propTypes = {};
// Default props value
AppCreation.defaultProps = {};
