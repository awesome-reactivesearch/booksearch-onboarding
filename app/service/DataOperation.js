import { storageService } from './StorageService';
import { urlShare } from './UrlShare';
import { sampleCodeSnippet } from './SampleCodeSnippet';
import $ from 'jquery';

class DataOperation {
	constructor() {
		this.user = null;
		this.app = null;
		this.defaultApp = {
			"appName": "housing",
			"username": "0aL1X5Vts",
			"password": "1ee67be1-9195-4f4b-bd4f-a91cd1b5e4b5",
			"type": "good-books-ds"
		}
		this.address = "https://accapi.appbase.io/";
		$.ajaxSetup({
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			}
		});
		this.sampleCodeSnippet = sampleCodeSnippet;
	}

	getUser() {
		return $.ajax({
			type: "GET",
			url: this.address+'user',
			dataType: 'json',
			contentType: "application/json"
		});
	}

	logout() {
		return $.ajax({
			type: "GET",
			url: this.address+'logout?next=',
			dataType: 'json',
			contentType: "application/json"
		});
	}

	createApp(appname) {
		return $.ajax({
			type: "PUT",
			url: this.address+'app/' + appname,
			dataType: 'json',
			contentType: "application/json"
		});
	}

	getPermission(appId) {
		return new Promise((resolve, reject) => {
			$.get(`${this.address}app/${appId}/permissions`).done((data) => {
				const permissions = data.body.filter(permission => permission.read && permission.write);
				resolve(permissions[0]);
			}).fail((e) => {
				reject(e);
			});
		});
	}

	updateUser(user) {
		this.user = user;
	}

	updateApp(app) {
		this.app = app;
	}

	closeIndex() {
		let credentials = this.app.username + ':' + this.app.password;
		return $.ajax({
			type: "POST",
			url: 'https://scalr.api.appbase.io/' + this.app.appName + '/_close/',
			headers: {
				'Authorization': 'Basic ' + btoa(credentials)
			}
		});
	}

	openIndex() {
		let credentials = this.app.username + ':' + this.app.password;
		return $.ajax({
			type: "POST",
			url: 'https://scalr.api.appbase.io/' + this.app.appName + '/_open/',
			headers: {
				'Authorization': 'Basic ' + btoa(credentials)
			}
		});
	}

	updateSettings(type, settingsObj) {
		let credentials = this.app.username + ':' + this.app.password;
		this.app.type = type;
		return $.ajax({
			type: "PUT",
			url: 'https://scalr.api.appbase.io/' + this.app.appName + '/_settings/',
			dataType: 'json',
			contentType: "application/json",
			headers: {
				'Authorization': 'Basic ' + btoa(credentials)
			},
			data: JSON.stringify(settingsObj)
		});
	}

	updateMapping(type, mappingObj) {
		let credentials = this.app.username + ':' + this.app.password;
		this.app.type = type;
		return $.ajax({
			type: "POST",
			url: 'https://scalr.api.appbase.io/' + this.app.appName + '/_mapping/' + type + '?update_all_types=true',
			dataType: 'json',
			contentType: "application/json",
			headers: {
				'Authorization': 'Basic ' + btoa(credentials)
			},
			data: JSON.stringify(mappingObj)
		});
	}

	indexData(data) {
		let credentials = this.app.username + ':' + this.app.password;
		let finalData = [];
		data.forEach((record) => {
			let indexObj = {
				index: {}
			};
			finalData.push(indexObj);
			finalData.push(record);
		});
		var appbaseRef = new Appbase({
			"url": "https://scalr.api.appbase.io",
			"appname": this.app.appName,
			"username": this.app.username,
			"password": this.app.password
		});
		return appbaseRef.bulk({
			type: this.app.type,
			body: finalData
		});
	}

	createUrl(cb) {
		let obj = {
			url: 'https://' + this.app.username + ':' + this.app.password + '@scalr.api.appbase.io',
			appname: this.app.appName,
			version: '2.4.0'
		};
		if (this.app.type) {
			obj.selectedType = [this.app.type];
			obj.selectedTypes = [this.app.type];
		}
		urlShare.setInputs(obj, cb);
	}

	appConfig() {
		let app = this.app ? this.app : this.defaultApp;
		return {
			"app": app.appName,
			"credentials": `${app.username}:${app.password}`,
			"type": app.type
		};
	}

	htmlSnippet(method) {
		let min_html = `<div id="app"></div>`;
		let max_html = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>GoodBooks</title>
		</head>
		<body>
			<div id="app">
			</div>
			<script src="dist/index.js"></script>
		</body>
		</html>
		`;

		if (method === 'full') {
			return max_html;
		}
		return min_html;
	}
	resources() {
		let resources = [
			'https://cdnjs.cloudflare.com/ajax/libs/react/16.2.0/umd/react.production.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.2.0/umd/react-dom.production.min.js',
			'https://rawgit.com/appbaseio/reactivesearch/dev/packages/web/umd/reactivesearch.js',
		];
		return resources.join(',');
	}
	appSnippet() {
		let obj = this.appConfig();
		let data = this.sampleCodeSnippet;
		for(let field in obj) {
			data = data.replace('{{'+field+'}}', '"'+obj[field]+'"');
		}
		return data;
	}
}

export const dataOperation = new DataOperation();
