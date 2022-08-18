import types from "./types";

const initialState = {
	counter: 0,
	loading: false,
	error: false,
	timer: undefined,
};

export default function counter(state = initialState, action) {
	// console.log(state);
	switch (action.type) {
		case types.REQUEST:
			return {
				...state,
				loading: true,
				error: false,
			};
		case types.INCREMENT:
			return {
				counter: state.counter + 1,
				loading: false,
				error: false,
			};
		case types.DECREMENT:
			return {
				counter: state.counter - 1,
				loading: false,
				error: false,
			};
		case types.ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
}
