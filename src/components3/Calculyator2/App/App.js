import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButton = (content) => () => {
    if (content == "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }
    if (content == "±") {
      setValue((number) => (-1 * number).toString());
      setOperator(null);
      return;
    }
    if (content == "%") {
      setValue((number) => (number / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }
    if (content == "+") {
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("+");
      return;
    }
    if (content == "-") {
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("-");
      return;
    }
    if (content == "×") {
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("×");
      return;
    }
    if (content == "÷") {
      setMemory(parseFloat(value));
      setValue("0");
      setOperator("÷");
      return;
    }
    if (content == "=") {
      setMemory(null);
      if (!operator) {
        return;
      }
      if (operator == "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator == "-") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator == "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator == "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      return;
    }
    setValue((parseFloat(value) + content).toString());
  };

  return (
    <div className="Container">
      <div className="App">
        <div className="top">4:45</div>
        <div className="display">{value}</div>
        <div className="buttons">
          <Button onButtonClick={handleButton} content="AC" type="function" />
          <Button onButtonClick={handleButton} content="±" type="function" />
          <Button onButtonClick={handleButton} content="%" type="function" />
          <Button onButtonClick={handleButton} content="÷" type="operator" />
          <Button onButtonClick={handleButton} content="7" />
          <Button onButtonClick={handleButton} content="8" />
          <Button onButtonClick={handleButton} content="9" />
          <Button onButtonClick={handleButton} content="×" type="operator" />
          <Button onButtonClick={handleButton} content="4" />
          <Button onButtonClick={handleButton} content="5" />
          <Button onButtonClick={handleButton} content="6" />
          <Button onButtonClick={handleButton} content="−" type="operator" />
          <Button onButtonClick={handleButton} content="1" />
          <Button onButtonClick={handleButton} content="2" />
          <Button onButtonClick={handleButton} content="3" />
          <Button onButtonClick={handleButton} content="+" type="operator" />
          <Button onButtonClick={handleButton} content="0" />
          <Button onButtonClick={handleButton} content="." />
          <Button onButtonClick={handleButton} content="=" type="operator" />
        </div>
        <div className="bottom">-</div>
      </div>
    </div>
  );
}

export default App;
