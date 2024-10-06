import { useState } from "react";
import Header from "./Components/Header";
import QuizBody from "./Components/QuizBody";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };
  return (
    <>
      <Header />
      <main>
        {quizStarted ? (
          <QuizBody />
        ) : (
          <div className="quiz">
            <h2>
              Test your React skills and push the boundaries of your knowledge.
            </h2>
            <p>
              This quiz will challenge your understanding of components, hooks,
              and everything in between. Are you ready to React?
            </p>
            <div className="start-quiz-container">
              <button className="start-quiz-button" onClick={startQuiz}>
                Start Quiz
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
