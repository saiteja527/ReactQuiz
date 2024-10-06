import React, { useEffect, useState } from "react";

const QuestionTimerProgressBar = ({ timeout, OnTimeOut, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setRemainingTime(timeout);
  }, [timeout]);

  useEffect(() => {
    const timer = setTimeout(OnTimeOut, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, OnTimeOut]);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setRemainingTime((prev) => Math.max(prev - 100, 0));
    }, 100);

    return () => {
      clearInterval(intervalTime);
    };
  }, [timeout]);

  return (
    <>
      <h1 className="progress-clock">{Math.round(remainingTime / 1000)}</h1>
      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode}
      />
    </>
  );
};

export default QuestionTimerProgressBar;
