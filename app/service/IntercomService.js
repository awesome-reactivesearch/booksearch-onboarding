class IntercomService {
	loggingIn(userInfo) {
		window.Intercom('boot', {
			app_id: 'jnzcgdd7',
			email: userInfo.email
		});
	}
	update(userInfo) {
		window.Intercom('update', userInfo);
	}
}

const intercomService = new IntercomService();
export default intercomService;