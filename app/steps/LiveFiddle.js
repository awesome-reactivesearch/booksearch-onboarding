import { default as React, Component } from "react";
import { dataOperation } from "../service/DataOperation";
import { SampleCSS } from "../service/SampleCSS";
import { JsonView } from "../others/JsonView";
import { Tabs, Tab } from "react-bootstrap";
import LivePen from "./LivePen";

export class LiveFiddle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			key: 1
		};
		this.codepenConfig = this.codepenConfig.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		localStorage.removeItem("newUserLoggedIn");
	}

	codepenConfig() {
		let config = {
			title                 : "Book Search App",
			description           : "Powered by appbase.io",
			private               : false,
			editors               : "101",
			layout                : "left",
			html                  : dataOperation.htmlSnippet("small"),
			css                   : SampleCSS,
			css_pre_processor	  : "scss",
			js                    : dataOperation.appSnippet(),
			js_pre_processor      : "babel",
			head                  : "<meta name='viewport' content='width=device-width'>",
			js_external           : "https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js;https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js;https://rawgit.com/appbaseio/reactivesearch/dev/packages/web/umd/reactivesearch.js"

		};
		return JSON.stringify(config);
	}

	handleSelect(key) {
		this.setState({key}, function() {
			setTimeout(() => {
				if(this.state.key === 2) {
					this.setState({showJs: true});
				}
				if(this.state.key === 3) {
					this.setState({showHtml: true});
				}
				if(this.state.key === 4) {
					this.setState({showCSS: true});
				}
			}, 400);
		});
	}

	renderComponent(method) {
		let element;
		switch(method) {
			case "js":
				if(this.state.showJs) {
					element = (<JsonView content={dataOperation.appSnippet()} />);
				}
			break;
			case "html":
				if(this.state.showHtml) {
					element = (<JsonView content={dataOperation.htmlSnippet("full")} />);
				}
			break;
			case "css":
				if(this.state.showCSS) {
					element = (<JsonView content={SampleCSS} />);
				}
		}
		return element;
	}

	render() {
		return (
			<section className="single-step" id="codepen-step">
				<Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
					<Tab eventKey={1} title="Live">
						<LivePen />
					</Tab>
					<Tab eventKey={2} title="JS">
						{this.renderComponent("js")}
					</Tab>
					<Tab eventKey={3} title="HTML">
						{this.renderComponent("html")}
					</Tab>
					<Tab eventKey={4} title="CSS">
						{this.renderComponent("css")}
					</Tab>
				</Tabs>
				<div className="extra-btns">
					<form action="https://codepen.io/pen/define" method="POST" target="_blank">
						<input type="hidden" name="data" value={this.codepenConfig()} />
						<button type="submit" className="subscribe"><i className="fa fa-external-link"></i> Codepen</button>
					</form>
				</div>
			</section>
		);
	}
}

LiveFiddle.propTypes = {};
// Default props value
LiveFiddle.defaultProps = {};
