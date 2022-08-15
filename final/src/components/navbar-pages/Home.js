import React from "react";
import { Link } from "react-router-dom";
import Formpage from "./Formpage";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <h1>Welcome student!</h1>
      <br />
      <div className="card">
        <div className="card-header">
          <h3>This is your personal homework tracker To-Do list.</h3>
        </div>
        <div className="card-body">
          <h2 className="card-title">Start Here:</h2>
          <br />
          <h4 className="card-text">
            <ol>
              <li>
                Sign in to your school's LMS by selecting the navbar "School
                Login Page" for quick access.
              </li>
              <br />
              <li>
                Identify which week you are on currently on, review the materials for the week, and start tracking your homework.
              </li>
              <br />
              <li>
                To start tracking your assignments; select "To-DO Form" from
                the navbar or by clicking on this link{" "}
                <Link to="/Formpage">To-Do Form</Link> to navigate directly
                there.
              </li>
            </ol>
            <br />
              Please do not give up on your new goal of becoming a software engineer.  This may be a stressful 16 weeks but there are resources to help support you.
            <br />
            <br />
            Make sure to sign up for your weekly mentor sessions.  Here is a quick link to schedule your <a href="https://learn.promineotech.com/mod/page/view.php?id=568" target="blank>">mentor session</a> once you login.
          </h4>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Home;
