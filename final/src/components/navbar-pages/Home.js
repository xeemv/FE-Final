import React from 'react'

const Home = () => {
  return (
    <>
      <h1>Welcome student!</h1>
      <div className="card">
        <div className="card-header">
          This is your personal weekly homework tracker To-Do list.
        </div>
        <div className="card-body">
          <h5 className="card-title">Start Here:</h5>
          <br />
          <h4 className="card-text">
            <ol>
                <li>Sign in to your school's LMS by selecting the navbar "School Login Page" for quick access.
                </li>
                <br/>
                <li>Identify which week you are on currently on.
                </li>
                <br/>
                <li>Start tracking your assignments to stay on track with the bootcamp by selecting the button, "To-DO List" below or in the navbar.
                </li>
               
            </ol>
          </h4>
          <a href="#" className="btn btn-primary">
            To-Do List
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;