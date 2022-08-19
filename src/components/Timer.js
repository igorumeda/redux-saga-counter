import React, { useRef, useState } from "react";
import { format, differenceInSeconds, addSeconds } from "date-fns";

import store from "../store/store";
import { activeTimer } from "../store/actions";

const Timer = () => {
	const [timer, setTimer] = useState("00:00:00");
	const intervalId = useRef();

	const handleActiveTimer = () => {
		activeTimer();
		handleInterval();
	};

	const handleInterval = () => {
		if (!getTimerState()) {
			clearInterval(intervalId.current);
			intervalId.current = undefined;
			setTimer("00:00:00");
		} else {
			intervalId.current = setInterval(
				() => displayTimer(new Date()),
				1000
			);
		}
	};

	const displayTimer = (currentTime) => {
		const timeZero = new Date(0, 0, 0, 0, 0, 0);
		const secondsDiff = differenceInSeconds(currentTime, getTimerState());
		const timeCount = addSeconds(timeZero, secondsDiff);
		const timeResult = format(timeCount, "HH:mm:ss");
		setTimer(timeResult);
	};

	const getTimerState = () => {
		return store.getState().initialTimer;
	};

	return (
		<div
			style={{
				border: "1px solid gray",
				padding: "5px",
				margin: "15px 0",
			}}
		>
			<p>
				<b>{timer}</b>
			</p>
			<button onClick={() => handleActiveTimer()}>
				{getTimerState() ? "Desativar timer" : "Active timer"}
			</button>
		</div>
	);
};

export default Timer;
