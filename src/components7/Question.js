import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";

function Question({
  data,
  onSetAnswers,
  lengthQuestion,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radioWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radioWrapper.current.querySelector("input:checked");

    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
    console.log(findCheckedInput);
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  console.log(selected);

  const nextClick = (e) => {
    if (selected === "") {
      return setError("Please select the option!");
    }
    onSetAnswers((answers) => [
      ...answers,
      { questionItem: data.question, answerItem: selected },
    ]);
    setSelected("");

    if (activeQuestion < lengthQuestion - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div className="question">
      <div className="question-container">
        <h2>
          {activeQuestion + 1}. {data.question}
        </h2>
        <div className="control" ref={radioWrapper}>
          {data.choices.map((choice, index) => {
            return (
              <div>
                <label className="label-change radio" key={index}>
                  <input
                    type="radio"
                    value={choice}
                    name="answer"
                    onChange={changeHandler}
                    className="input-change"
                  />
                  <span className="question-change">{choice}</span>
                </label>
              </div>
            );
          })}
        </div>
        {error && <div className="error-change">{error}</div>}
        <div className="next-button">
          <Button type="primary" onClick={nextClick}>
            Next question
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Question;
