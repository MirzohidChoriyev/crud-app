import React, { useEffect, useState } from "react";
import quizdata from "../Data/quizdata.json";
import Question from "./Question";

function App() {
  const [data, setData] = useState(quizdata.data);
  const [datalength, setDatalength] = useState(data.length);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [aStep, setAstep] = useState(1);

  console.log(datalength);
  console.log(answers);

  const addAnswers = () => {
    for (let j = 0; j < data.length; j++) {
      if (answers.indexItem !== j) {
        setAnswers((answers) => [
          ...answers,
          {
            indexItem: j,
            nameItem: "answers",
            answerItem: "anwers",
            questionItem: data[j].question,
          },
        ]);
      }
    }
  };

  useEffect(() => {
    if (answers !== []) {
      addAnswers();
    }
  }, []);
  return (
    <div className="app">
      {step === 1 && (
        <Question
          data={data}
          setActiveQuestion={setActiveQuestion}
          activeQuestion={activeQuestion}
          setStep={setStep}
          setAnswers={setAnswers}
          answers={answers}
        />
      )}
    </div>
  );
}

export default App;
