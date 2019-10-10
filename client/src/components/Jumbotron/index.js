import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 250, clear: "both", paddingTop: 80, paddingBottom: 20}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
