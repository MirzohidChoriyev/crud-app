import React from "react";
import notfound from "./Images/notfound.png";

function NotFound() {
  const styles = {
    width: "100%",
    height: "100%",
  };
  return (
    <div>
      <div
        className="notfound"
        style={{ width: "100%", display: "flex", alignItems: "center" }}
      >
        <img style={styles} src={notfound} />
      </div>
    </div>
  );
}

export default NotFound;
