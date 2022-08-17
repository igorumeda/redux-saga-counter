import test from "tape";
import { call, put } from "redux-saga/effects";
import { incrementAsync, delay } from "./sagas";

test("incrementAsync Saga test", (assert) => {
	const gen = incrementAsync();

	assert.deepEqual(
		gen.next().value,
		call(delay, 1000),
		"increment Saga must call delay in 1 seconds"
	);

	assert.deepEqual(
		gen.next().value,
		put({ type: "INCREMENT" }),
		"incrementAsync Saga must dispatch an INCREMENT action"
	);

	assert.deepEqual(
		gen.next(),
		{ done: true, value: undefined },
		"incrementAsync Saga must be done"
	);

	assert.end();
});
