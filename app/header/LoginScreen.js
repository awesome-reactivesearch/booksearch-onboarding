import { default as React, Component } from 'react';
import { render } from 'react-dom';
import { LoginModal } from '../others/LoginModal';
import { config } from '../config';

export class LoginScreen extends Component {
	render() {
		var loginModal = (<LoginModal></LoginModal>);
		return (
			<div className="on-right">
				<div className="steps-wrapper">
					<h2>Signup/Login to save your progress</h2>
					{loginModal}
				</div>
			</div>
		);
	}
}

LoginScreen.propTypes = {
};
// Default props value
LoginScreen.defaultProps = {
};
