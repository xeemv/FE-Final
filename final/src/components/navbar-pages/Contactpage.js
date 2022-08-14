import React from "react";
import Contact from "../Contact";

const About = () => {
  return (
    <>
      <br />
      <br />
      <div>
        <h1 className="text-center" style={{ paddingTop: "05%" }}>
          Contact Page
        </h1>
        <div className="card-contact">
          <div className="card-header">
            <h3>Send me a message!</h3>
          </div>
          <div className="card-body">
            <h2 className="card-title">Start Here:</h2>
            <br />
            <h4 className="card-text">
              <Contact />
            </h4>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default About;
