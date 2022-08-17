import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";

import store from "./src/store/store";
import * as actions from "./src/store/actions";
import Counter from "./src/components/Counter";

function render() {
	ReactDOM.render(
		<Counter
			onIncrement={actions.increment}
			onDecrement={actions.decrement}
		/>,
		document.getElementById("root")
	);
}

render();
store.subscribe(render);
