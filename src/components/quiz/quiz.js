import React, { useState } from "react";
import "./quiz.css";
 
function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
 
  const questions = [
    {
      text: "What is a Petri net primarily used for?",
      options: [
        { id: 0, text: "Network security analysis", isCorrect: false },
        { id: 1, text: "Modeling and analyzing processes in systems", isCorrect: true },
        { id: 2, text: "Image processing", isCorrect: false },
        { id: 3, text: "Database management", isCorrect: false },
      ],
    },
    {
      text: "In a Petri net, what do the circles represent?",
      options: [
        { id: 0, text: "Transitions", isCorrect: false },
        { id: 1, text: "Tokens", isCorrect: false },
        { id: 2, text: "Places", isCorrect: true },
        { id: 3, text: "Arcs", isCorrect: false },
      ],
    },
    {
      text: "Which component in a Petri net is responsible for representing events or actions that cause state changes?",
      options: [
        { id: 0, text: "Places", isCorrect: false },
        { id: 1, text: "Tokens", isCorrect: false },
        { id: 2, text: "Arcs", isCorrect: false },
        { id: 3, text: "Transitions", isCorrect: true },
      ],
    },
    {
      text: "How is a state change depicted in a Petri net?",
      options: [
        { id: 0, text: "By adding more places", isCorrect: false },
        { id: 1, text: "By moving tokens from one place to another", isCorrect: true },
        { id: 2, text: "By adding more arcs", isCorrect: false },
        { id: 3, text: "By changing the labels on transitions", isCorrect: false },
      ],
    },
    {
      text: "What is the term used to describe a situation where a Petri net reaches a state where no transitions are enabled?",
      options: [
        { id: 0, text: "Deadlock", isCorrect: true },
        { id: 1, text: "Livelock", isCorrect: false },
        { id: 2, text: "Concurrency", isCorrect: false },
        { id: 3, text: "Synchronization", isCorrect: false },
      ],
    },
  ];
 
  // Helper Functions
 
  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }
 
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
 
  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
 
  return (
    <div className="quiz flex justify-center items-center flex-col mt-10">
      {/* 1. Header  */}
      <h1 className=" text-4xl mb-2 mt-10">Petri Nets Quiz</h1>
 
      {/* 2. Current Score  */}
      <h2 className=" text-3xl mb-3">Score: {score}</h2>
 
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1 className=" text-4xl mb-4">Final Results</h1>
          <h2 className=" text-3x mb-4">
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button className="button_quiz" onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2 className=" text-3xl mb-2">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text mb-10">{questions[currentQuestion].text}</h3>
 
          {/* List of possible answers  */}
          <ul className="ul_quiz ">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                 className="li_quiz"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
 
export default Quiz;
 
 
//-------------------------------------------CSS-----------------------------------//
 

 
