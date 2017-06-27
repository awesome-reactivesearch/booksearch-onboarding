import { default as React, Component } from 'react';
import { readLinks } from '../service/default';

export class ReadMore extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<a href={readLinks[this.props.link]} className={"read-more "+this.props.extraClass} target="_blank">
			&nbsp; Read more
			</a>
		);
	}
}
