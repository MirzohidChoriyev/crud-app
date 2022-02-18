import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Quiz from "./Quiz/Quiz";
import Result from "./Result/Result";

function App() {
  const [name, setName] = useState("");

  const fetchQuestion = () => {
    console.log("Fetchquestion");
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestion={fetchQuestion}
              />
            }
          />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
