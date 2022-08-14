import React from "react";
import Form from "./Form";

function Formpage() {
  return (
    <>
      <br />
      <br />
      <div className="card">
        <div className="card-header">
          <h3>User this area to track your your Front-End homework.</h3>
        </div>
        <div className="card-body">
          <h4 className="card-title">Important to note: </h4>
          <ul>
            <li>Check the box next to your task to mark it as completed.</li>
          </ul>
          <br />
          <h4 className="card-text">
            <Form />
          </h4>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default Formpage;
