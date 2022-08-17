import React from "react";
import { PropTypes } from "prop-types";

import store from "../store/store";

const Counter = ({ onIncrement, onDecrement }) => {
	const state = store.getState();

	return (
		<div>
			<button onClick={onIncrement}>Increment</button>{" "}
			<button onClick={onDecrement}>Decrement</button>{" "}
			{state.loading && <span>{"Loading..."}</span>}
			{state.error && (
				<span style={{ color: "red" }}>{"Algo deu errado"}</span>
			)}
			<hr />
			<div>Clicked: {state.counter} times</div>
		</div>
	);
};

Counter.propTypes = {
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
};

export default Counter;
