import React from "react";

function Start({ onQuizStart }) {
  return (
    <div className="card text-center" style={{ padding: "100px" }}>
      <div className="card-content">
        <h4>Start quiz</h4>
        <p>Good luck !</p>
        <button
          className="btn btn-primary button is-info is-medium"
          onClick={onQuizStart}
        >
          Start quiz
        </button>
      </div>
    </div>
  );
}

export default Start;
