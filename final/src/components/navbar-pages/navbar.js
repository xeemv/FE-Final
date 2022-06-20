import React from "react";
import Home from "./Home";
import Form from "./Form";
import School from "./School";
import About from "./About";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
// the different routes we want access to






const Navbar = () => {
  return (
    <Router>
      <main>
      <Routes>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
       </Routes>
      </main>
     





    </Router>
  );
}

export default Navbar;



      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            // data-bs-target="#navbarNav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page 1" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page 2"
                  href="https://learn.promineotech.com/login/"
                  target="_blank"
                >
                  School Login Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page 3" href="#">
                  To-Do Form
                  <script src="/Form.js" type="text/javascript" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}