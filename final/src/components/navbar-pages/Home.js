import React from 'react'
import { Link } from "react-router-dom";
import Form from "./Form";
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <>
      <h1>Welcome student!</h1>
      <div className="card">
        <div className="card-header">
          <h3>This is your personal homework tracker To-Do list.</h3>
        </div>
        <div className="card-body">
          <h2 className="card-title">Start Here:</h2>
          <br />
          <h4 className="card-text">
            <ol>
                <li>Sign in to your school's LMS by selecting the navbar "School Login Page" for quick access.
                </li>
                <br/>
                <li>Identify which week you are on currently on.
                </li>
                <br/>
                <li>Start tracking your assignments to stay on track with the bootcamp by selecting "To-DO Form" in the navbar.
                </li>
                {/* <Button variant="outline-secondary">
                  <Link to='/Form'>To-Do Form</Link>
                </Button> */}
            </ol>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Home;