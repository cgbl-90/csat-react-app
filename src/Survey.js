import { useState } from "react";
import questions from "./questions.json";
import "./App.css";

export default function Survey() {
  return (
    <div className="card">
      <h1 className="title">customer satisfaction survey</h1>
      <h3>
        We always want to improve — could you help us out for a few minutes and
        let us know about your experience with our solution?
      </h3>
      <button>Sure, let's start</button>
    </div>
  );
}
