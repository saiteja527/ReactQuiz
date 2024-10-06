import React, { useMemo } from "react";

const Answers = ({
  answers,
  selectedAnswer,
  answerState,
  OnSelect,
}) => {
  const shuffledAnswers = useMemo(() => {
    const shuffled = [...answers];
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled;
  }, [answers]);

  return (
    <ul id="answers">
      {shuffledAnswers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }
        return (
          <li className="answer" key={answer}>
            <button
              onClick={() => OnSelect(answer)}
              className={cssClasses}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
