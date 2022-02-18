import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "bulma/css/bulma.min.css";
import App from "./components9/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
