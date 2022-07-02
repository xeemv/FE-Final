import React from 'react'
import Home from './Home';
import Form from './Form';
import School from './School';
import Contactpage from './Contactpage';
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link,
    Routes,
  } from "react-router-dom";




const Routerspage = () => {
  return (
        <>
          <Container>
            <Router>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar">
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
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <li className="nav-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/School">School</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Form">To-Do Form</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/Contact-Page">Contact Page</Link>
                    </li>
                  </div>
                </div>
              </nav> 
              
    
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contact-Page" element={<Contactpage />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/School" element={<School />} />
              </Routes>
            </Router>
          </Container>
        </>
      );
    }

export default Routerspage;