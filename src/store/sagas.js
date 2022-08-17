import { all, put, take, call, fork, actionChannel } from "redux-saga/effects";
import types from "./types";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* handleRequest(action) {
	yield call(delay, 2000);

	switch (action) {
		case types.INCREMENT:
			yield put({ type: types.INCREMENT });
			break;

		case types.DECREMENT:
			yield put({ type: types.DECREMENT });
			break;

		default:
			yield put({ type: types.ERROR });
			break;
	}
}

function* watchRequests() {
	const requestChannel = yield actionChannel(types.REQUEST);
	while (true) {
		const { action } = yield take(requestChannel);
		yield fork(handleRequest, action);
	}
}

export default function* rootSaga() {
	yield all([watchRequests()]);
}
