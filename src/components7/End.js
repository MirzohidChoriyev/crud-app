import { Button } from "antd";
import Item from "antd/lib/list/Item";
import React, { useEffect, useState } from "react";
import { formatTime } from "./Data/utils";

function End({ data, time, onReset, onCheckResults, results }) {
  const [correct, setCorrect] = useState(0);

  useEffect(() => {
    let count = 0;
    results.forEach((result, index) => {
      if (result.answerItem === data[index].answer) {
        count++;
      }
    });
    setCorrect(count);
    console.log(count);
  }, []);
  window.localStorage.setItem("natija", correct);

  return (
    <div className="end">
      <div className="end-container">
        <h2>Your results</h2>
        <div className="results">
          <p>
            <strong>{Math.floor((correct / data.length) * 100)}%</strong>
          </p>
          <p>
            <strong>
              {correct} 0f {data.length}
            </strong>
          </p>
          <p>
            <strong>Your time:</strong> {formatTime(time)}
          </p>
          <p style={{ marginTop: "20px" }}>
            <Button
              type="primary"
              style={{ marginRight: "4px" }}
              onClick={onCheckResults}
            >
              Check results
            </Button>
            <Button type="primary" onClick={onReset}>
              Qayta urinish
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default End;
