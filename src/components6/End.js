import React, { useEffect, useState } from "react";
import { formatTime } from "./Data/utils";

function End({ results, data, onReset, onAnswerCheck, time }) {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.map((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
      setCorrectAnswers(correct);
    });
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <div className="card">
          <h2>Your results</h2>
          <p>
            {correctAnswers} of {data.length}
          </p>
          <p>
            <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
          </p>
          <p>
            <strong>Your time:</strong>
            {formatTime(time)}
          </p>
          <button className="button is-primary" onClick={onAnswerCheck}>
            Check your answers
          </button>
          <button className="button is-primary" onClick={onReset}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export default End;
