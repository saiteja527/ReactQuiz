import React, { useState, useEffect } from "react";
import QuestionTimerProgressBar from "./QuestionTimerProgressBar";
import Answers from "./Answers";
import QUESTIONS from "../assets/questions";

const Questions = ({ index, OnSelectAnswer, OnSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect) {
    timer = 2000;
  }

  const handleSelectAnswer = (selectedAnswer) => {
    setAnswer({ selectedAnswer, isCorrect: null });

    setTimeout(() => {
      const isCorrect = QUESTIONS[index].correctAnswer === selectedAnswer;
      setAnswer((prev) => ({ ...prev, isCorrect }));

      setTimeout(() => {
        OnSelectAnswer(selectedAnswer);
      }, 2000);
    }, 1000);
  };

  useEffect(() => {
    setAnswer({
      selectedAnswer: "",
      isCorrect: null,
    });
  }, [index]);

  const answerState =
    answer.selectedAnswer && answer.isCorrect !== null
      ? answer.isCorrect
        ? "correct"
        : "wrong"
      : answer.selectedAnswer
      ? "answered"
      : "";

  return (
    <div id="question">
      <QuestionTimerProgressBar
        key={index}
        timeout={timer}
        OnTimeOut={answer.selectedAnswer === "" ? OnSkipAnswer : null}
        mode={answerState}
      />
      <h2>
        {index + 1}
        {") "}
        {QUESTIONS[index].text}
      </h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        OnSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Questions;
