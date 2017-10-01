import React, { Component } from "react";
import { dataOperation } from "../service/DataOperation";

import TodoApp from '../code/todoApp';
import TodoModel from '../code/todoModel';
// require("./styles.scss");
// require("../code/reset.scss");

let model = new TodoModel('react-todos')

export class LiveExample extends Component {

	render() {
		return (
			<TodoApp model={model}/>
		);
	}
}

// let render = () => {
//   ReactDOM.render(
//     <TodoApp model={model}/>,
//     document.getElementsByClassName('todoapp')[0]
//   )
// }
//
// model.subscribe(render)
// render()
