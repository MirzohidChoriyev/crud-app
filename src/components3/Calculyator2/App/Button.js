import React from "react";
import "./App.css";

function Button({ onButtonClick, content, type }) {
  return (
    <div
      onClick={onButtonClick(content)}
      className={`button ${content === "0" ? "zero" : ""} ${type || ""}`}
    >
      {content}
    </div>
  );
}
export default Button;
