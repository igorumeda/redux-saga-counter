import React from "react";

import store from "../store/store";
import * as actions from "../store/actions";

const Counter = () => {
	const state = store.getState();

	return (
		<div>
			<button onClick={() => actions.increment()}>Increment</button>{" "}
			<button onClick={() => actions.decrement()}>Decrement</button>{" "}
			{state.loading && <span>{"Loading..."}</span>}
			{state.error && (
				<span style={{ color: "red" }}>{"Algo deu errado"}</span>
			)}
			<hr />
			<div>Clicked: {state.counter} times</div>
		</div>
	);
};

export default Counter;
