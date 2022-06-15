import React from 'react';
import Home from './Home';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page 1" href="#">Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page 2" href="https://learn.promineotech.com/login/" target="_blank">
                  School Login Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page 2" href="#"><script src="/Form.js" type='text/javascript' />
                  To-Do List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;