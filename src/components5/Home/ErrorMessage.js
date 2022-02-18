import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  style: {
    color: "white",
    borderRadius: 5,
    width: "100%",
    background: "orangered",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "40px",
  },
});

function ErrorMessage({ children }) {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.style}>Error message</div>
    </div>
  );
}

export default ErrorMessage;
