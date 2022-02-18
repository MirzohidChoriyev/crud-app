import React, { useEffect, useState } from "react";
import Question from "./Question";
import Start from "./Start";
import quizData from "./Data/quiz.json";
import End from "./End";
import Item from "antd/lib/list/Item";
import Modal from "./Modal";
import { data } from "jquery";

let interval;

function App() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [time, setTime] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);
  console.log(interval);

  const startQuestion = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setTime(0);
    setStep(2);
    interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  return (
    <div className="app">
      {step === 1 && <Start onQuizStart={startQuestion} />}
      {step === 2 && (
        <Question
          data={quizData.data[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOffQuestions={quizData.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={quizData.data}
          onReset={resetClickHandler}
          onAnswerCheck={() => setShowModal(true)}
          time={time}
        />
      )}
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
          results={answers}
          data={quizData.data}
        />
      )}
    </div>
  );
}

export default App;
