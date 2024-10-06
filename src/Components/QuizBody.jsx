import React, { useCallback, useState } from "react";
import QUESTIONS from "../assets/questions";
import Questions from "./Questions";
import Summary from "./Summary";

const QuizBody = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prev) => [...prev, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleAnswer(null);
  }, [handleAnswer]);

  if (quizIsCompleted) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Questions
        index={activeQuestionIndex}
        OnSelectAnswer={handleAnswer}
        OnSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default QuizBody;
