import { Button } from "antd";
import Item from "antd/lib/list/Item";
import React, { useEffect, useState } from "react";
import "./Question.css";
import QuestionItem from "./QuestionItem";

function Question({
  data,
  setActiveQuestion,
  activeQuestion,
  setStep,
  setAnswers,
  answers,
}) {
  const [selected, setSelected] = useState([]);
  const [answersSort, setAnswersSort] = useState([]);
  const [ansStep, setAnsStep] = useState(1);

  const onClickChange = (e, i) => {
    console.log(e.target.name, e.target.value);
    setSelected((selected) => [
      ...selected,
      {
        indexItem: i,
        nameItem: e.target.name,
        answerItem: e.target.value,
        questionItem: data[i].question,
      },
    ]);
  };
  const quizTestEnd = (e) => {
    setAnsStep(2);
    setAnswersSort(
      selected.sort(function (x, y) {
        return x.indexItem - y.indexItem;
      })
    );
  };

  const answerFilter = () => {
    const ids = answersSort.map((o) => o.indexItem);
    const filtered = answersSort.filter(
      ({ indexItem }, e) => !ids.includes(indexItem, e + 1)
    );
    setAnswers(filtered);
  };
  console.log(answers);

  useEffect(() => {
    answerFilter();
  }, [ansStep]);

  return (
    <div className="quiz">
      <Button type="primary" onClick={quizTestEnd}>
        Testni tugatish
      </Button>
      <div className="quiz-container">
        {data.map((questions, index) => {
          return (
            <div className="quiz-app">
              <div className="quiz-question">
                <strong>
                  {index + 1}.{questions.question}
                </strong>
              </div>
              <div className="quiz-answers">
                {questions.choices.map((choice, i) => {
                  return (
                    <div className="quiz-label">
                      <label className="quiz-label-item">
                        <input
                          type="radio"
                          id="label-input"
                          name={`answer${index}`}
                          value={choice}
                          onChange={(e) => onClickChange(e, index)}
                        />
                        <span className="answer-span">{choice}</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
