import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";

import store from "./src/store/store";
import Counter from "./src/components/Counter";

function render() {
	ReactDOM.render(<Counter />, document.getElementById("root"));
}

render();
store.subscribe(render);
