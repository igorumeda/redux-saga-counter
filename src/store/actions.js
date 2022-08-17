import store from "./store";
import types from "./types";

export const increment = () => {
	store.dispatch({ type: types.REQUEST, action: types.INCREMENT });
};

export const decrement = () => {
	store.dispatch({ type: types.REQUEST, action: types.DECREMENT });
};
