import React, { useState, useEffect, useCallback } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

 

  // add useEffect code
  useEffect(() => {
   const timer = setInterval(()=>{
    callBack()
   },1000);

   const timeOut = setTimeout(()=>{
    handleAnswer(false)
   },10000);

   return ()=>clearTimeout(timer);
  });
  

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  function callBack() {
    if(timeRemaining===0) {
      setTimeRemaining(10);

    } else {
    setTimeRemaining(timeRemaining-1);
    }

  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
