import React from 'react'
import { Link } from "react-router-dom";
import Formpage from './Formpage';
import Button from 'react-bootstrap/Button';



const Home = () => {
  return (
    <>
     <br />
     <br />
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
                <li>Identify which week you are on currently on and the materials.
                </li>
                <br/>
                <li>Start tracking your assignments by selecting "To-DO Form" from the navbar or by selecting this link <Link to='/Formpage'>To-Do Form</Link> to navigate directly there.
                </li>
            </ol>
          </h4>
        </div>
      </div>
      <br />
     <br />
    </>
  );
}

export default Home;