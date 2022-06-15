import React from 'react'

function Home() {
  return (
    <>
      <h1>Welcome student!</h1>
      <div class="card">
        <div class="card-header">
          This is your personal weekly homework tracker To-Do list.
        </div>
        <div class="card-body">
          <h5 class="card-title">Start Here:</h5>
          <br />
          <p class="card-text">
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
          </p>
          <a href="#" class="btn btn-primary">
            To-Do List
          </a>
        </div>
      </div>
    </>
  );
}

export default Home