import {
	all,
	put,
	take,
	call,
	actionChannel,
	takeLeading,
} from "redux-saga/effects";
import { buffers } from "redux-saga";
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
	const requestChannel = yield actionChannel(
		types.REQUEST,
		buffers.sliding(3) // Limite de ações na fila
	);
	while (true) {
		const { action } = yield take(requestChannel);
		yield call(handleRequest, action);
	}
}

export default function* rootSaga() {
	yield all([watchRequests()]);
}
