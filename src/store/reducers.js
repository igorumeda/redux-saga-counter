import types from "./types";

const initialState = {
	counter: 0,
	loading: false,
	error: false,
	initialTimer: undefined,
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
				...state,
				counter: state.counter + 1,
				loading: false,
				error: false,
			};
		case types.DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
				loading: false,
				error: false,
			};
		case types.ACTIVE_TIMER:
			if (!state.initialTimer) {
				const newDate = new Date();
				return {
					...state,
					initialTimer: newDate,
				};
			} else {
				return {
					...state,
					initialTimer: undefined,
				};
			}
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

const currentDate = () => {
	return new Date();
};
