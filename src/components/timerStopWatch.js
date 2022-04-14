import React, { useState } from "react";
import { HistoryLaps } from "./historyLaps";
import { InitTimer } from "./layoutTimer/initTime";
import { RunningTimer } from "./layoutTimer/runningTime";
import { StoppingTimer } from "./layoutTimer/stopTime";

export const stateStopWatch = {
  start: "start",
  running: "running",
  done: "stop",
};
export const actionStopWatch = {
  start: "start",
  lap: "lap",
  stop: "stop",
  reset: "reset",
  resume: "resume",
};

export const LayoutStopWatch = (props) => {
  switch (props.actionStatus) {
    case stateStopWatch.start:
      return <InitTimer {...props} />;

    case stateStopWatch.running:
      return <RunningTimer {...props}/>;

    case stateStopWatch.done:
      return <StoppingTimer {...props}/>;
    default:
      return <InitTimer {...props} />;
  }
};

export const TimerStopWatch = (props) => {
  const [actionStatus, setActionStatus] = useState(stateStopWatch.start);
  const [startTimeMs, setStartTimeMs] = useState(0);
  const [listLaps, setListLaps] = useState([])
  const requestStart = () => {
    setActionStatus(stateStopWatch.running);
	setStartTimeMs(Date.now())
  };
  const requestStop = (currentTime) => {
    setActionStatus(stateStopWatch.done);
	setStartTimeMs(currentTime)
  };

  const requestLap = (currentTime) => {
	listLaps.unshift(currentTime)
	setListLaps([...listLaps])
  };

  const requestReset = () => {
	setActionStatus(stateStopWatch.start);
	setStartTimeMs(0)
	setListLaps([])
  };

  const requestResume = (currentTime) => {
	setActionStatus(stateStopWatch.running);
	setStartTimeMs(Date.now()-currentTime)
  };

  return (
    <React.Fragment>
      <LayoutStopWatch
        actionStatus={actionStatus}
        requestStart={requestStart}
		requestLap={requestLap}
		requestStop={requestStop}
		requestReset={requestReset}
		requestResume={requestResume}
		startTimeMs={startTimeMs}
      ></LayoutStopWatch>
      <HistoryLaps listLaps={listLaps}/>
    </React.Fragment>
  );
};
