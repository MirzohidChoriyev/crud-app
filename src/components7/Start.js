import { Button } from "antd";
import React from "react";
import "./Data/Style.css";

function Start({ onQuizStart }) {
  return (
    <div className="start">
      <div className="start-container">
        <h3>Testni boshlashingiz mumkin</h3>
        <Button type="primary" className="start-button" onClick={onQuizStart}>
          Boshlash
        </Button>
      </div>
    </div>
  );
}

export default Start;
