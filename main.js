import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";

import store from "./src/store/store";
import Counter from "./src/components/Counter";
import Timer from "./src/components/Timer";

function render() {
	ReactDOM.render(
		<div>
			<Counter />
			<Timer />
		</div>,
		document.getElementById("root")
	);
}

render();
store.subscribe(render);
