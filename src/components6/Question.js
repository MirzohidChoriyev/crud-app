import React, { useEffect, useRef, useState } from "react";
import "./Style.css";

function Question({
  data,
  onAnswerUpdate,
  numberOffQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radioWrapper = useRef();

  useEffect(() => {
    const findcheckedinput =
      radioWrapper.current.querySelector("input:checked");
    console.log(findcheckedinput);
    if (findcheckedinput) {
      findcheckedinput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    setError("");
  };

  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("Please select one option");
    }
    onAnswerUpdate((element) => [
      ...element,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOffQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  return (
    <div className="card text-center">
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          <div className="control" ref={radioWrapper}>
            {data.choices.map((item, i) => (
              <label className="radio has-background-light">
                <input
                  type="radio"
                  name="answer"
                  value={item}
                  onChange={changeHandler}
                />
                {item}
              </label>
            ))}
          </div>
          {error && <div className="has-text-danger">{error}</div>}
          <button
            className="button btn btn-success is-info"
            onClick={nextClickHandler}
          >
            Next quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
