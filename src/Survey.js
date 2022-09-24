import { useState } from "react";
import questions from "./questions.json";
import "./App.css";

export default function Survey() {
  let [count, setCount] = useState(0);

  function nextQuestion(event) {
    event.preventDefault();
    setCount(count + 1);
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
          Product! Your feedback helps us improve our offerings for you and
          other customers.
        </h3>
      </div>
    );
  }
  return (
    <div className="card">
      <h1 className="question">
        {count + ". " + questions[count - 1].question}
      </h1>
      {(() => {
        switch (questions[count - 1].correct) {
          case "one":
            return questions.options.map((choise) => {
              <li className="oneChoise">{choise}</li>;
            });
          case "multiple":
            return questions.options.map((choise) => {
              <li className="multipleChoise">{choise}</li>;
            });
          case "open":
            return <input type="text" className="textBox" />;
          case "rate":
            return questions.options.map((choise) => {
              <span className="rate">{choise}</span>;
            });
          case "close":
            return questions.options.map((choise) => {
              <span className="rate">{choise}</span>;
            });
          case "email":
            return <input type="text" className="textBox" />;
        }
      })()}
      <button onClick={nextQuestion}>NEXT</button>
    </div>
  );
}
