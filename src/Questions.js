import questions from "./questions.json";
import "./App.css";

export default function Questions(count) {
  if (questions[count.count].typeof === "one") {
    return questions[count.count].options.map((choise) => (
      <li className="oneChoise">{choise}</li>
    ));
  }

  if (questions[count.count].typeof === "multiple") {
    return questions[count.count].options.map((choise) => (
      <li className="multipleChoise">{choise}</li>
    ));
  }

  if (
    questions[count.count].typeof === "open" ||
    questions[count.count].typeof === "email"
  ) {
    return <input type="text" className="textBox" />;
  }

  if (
    questions[count.count].typeof === "rate" ||
    questions[count.count].typeof === "close"
  ) {
    return questions[count.count].options.map((choise) => (
      <span className="rate">{choise}</span>
    ));
  }
}
