import React from "react";
import quizCompletedImage from "../assets/quiz-complete.png";
import QUESTIONS from "../assets/questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const Summary = ({ userAnswers }) => {
  const skippedAnswer = userAnswers.filter((answer) => answer === null);

  const correctAnswer = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].correctAnswer
  );

  const skippedAnswerShare = Math.round(
    (skippedAnswer.length / userAnswers.length) * 100
  );

  const correctAnswerShare = Math.round(
    (correctAnswer.length / userAnswers.length) * 100
  );

  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

  const resetQuiz = () => {
    window.location.reload();
  };
  return (
    <div id="summary">
      <img src={quizCompletedImage} alt="Trophy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">Answer correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">Answer incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].correctAnswer) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
      <div className="retry-button-container">
        <button className="retry-button" onClick={resetQuiz}>
          <FontAwesomeIcon icon={faRotateRight} className="retry-icon" />
          Retry Quiz
        </button>
      </div>
    </div>
  );
};

export default Summary;
