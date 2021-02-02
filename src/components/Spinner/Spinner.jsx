import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Spinner;
