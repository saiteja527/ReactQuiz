import React from 'react'
import img from '../assets/quiz-logo.png'
const Header = () => {
  return (
    <header>
      <img src={img} alt="Quiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header
