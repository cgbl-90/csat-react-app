import { useState } from "react";
import questions from "./questions.json";
import Questions from "./Questions";
import "./App.css";

export default function Survey() {
  let [count, setCount] = useState(0);

  function nextQuestion(event) {
    event.preventDefault();
    setCount(count + 1);
  }

  function lastQuestion(event) {
    event.preventDefault();
    setCount(count - 1);
  }

  if (count === 0) {
    return (
      <div className="card">
        <h1 className="title">customer satisfaction survey</h1>
        <h3>
          We always want to improve — could you help us out for a few minutes
          and let us know about your experience with our solution?
        </h3>
        <button onClick={nextQuestion}>Sure, let's start</button>
      </div>
    );
  }
  if (count > questions.length) {
    return (
      <div className="card">
        <h1 className="title">thank you!</h1>
        <h3>
          Thanks for completing the survey about your experience using our
          product! Your feedback helps us improve our offerings for you and
          other customers.
        </h3>
        <button onClick={lastQuestion}>BACK</button>
        <button>SUBMIT</button>
      </div>
    );
  }
  return (
    <div className="card">
      <h1 className="question">
        {count + ". " + questions[count - 1].question}
      </h1>
      <Questions count={count - 1} />
      <br />
      <button onClick={lastQuestion}>BACK</button> 
      <button onClick={nextQuestion}>NEXT</button>
    </div>
  );
}
