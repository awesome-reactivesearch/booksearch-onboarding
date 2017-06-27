import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export default class IntroModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				showModal: true
			});
		}, 500);
	}

	close() {
		this.setState({
			showModal: false
		});
	}

	open() {
		this.setState({
			showModal: true
		});
	}

	render() {
		return (
			<Modal className="modal-danger" show={this.state.showModal} onHide={() => this.close()}>
				<Modal.Header closeButton>
					<Modal.Title style={{padding: 0}}>Getting started with ReactiveSearch</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{paddingBottom: "10px"}}>
					<div className="youtube-wrapper">
						<div className="youtube">
							<iframe
								className="youtube-frame"
								src="https://www.youtube.com/embed/EUYJMpwKlXU?ecver=2"
								width="520"
								height="300"
								allowFullScreen
							/>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}
