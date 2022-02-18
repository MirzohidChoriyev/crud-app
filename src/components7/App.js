import React, { useEffect, useState } from "react";
import Start from "./Start";
import "./Data/Style.css";
import Question from "./Question";
import quizdata from "./Data/quiz.json";
import End from "./End";
import Results from "./Data/Results";

let interval;

function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);
  const [show, setShow] = useState(false);
  const [natija, setNatija] = useState(null);

  const closeModal = () => {
    setShow(false);
  };

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const onQuizStart = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const resetClick = () => {
    setAnswers([]);
    setStep(2);
    setTime(0);
    setActiveQuestion(0);
    interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const onCheckResults = () => {
    setShow(true);
    setNatija(window.localStorage.getItem("natija"));
    console.log(natija);
  };

  return (
    <div className="app">
      {step === 1 && <Start onQuizStart={onQuizStart} />}
      {step === 2 && (
        <Question
          data={quizdata.data[activeQuestion]}
          onSetAnswers={setAnswers}
          lengthQuestion={quizdata.data.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          data={quizdata.data}
          time={time}
          onReset={resetClick}
          onCheckResults={onCheckResults}
          results={answers}
        />
      )}

      <Results
        closeModal={closeModal}
        data={quizdata.data}
        results={answers}
        show={show}
        time={time}
        natija={natija}
      />
    </div>
  );
}

export default App;
