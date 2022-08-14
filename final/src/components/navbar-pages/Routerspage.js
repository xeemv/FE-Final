import React from "react";
import Home from "./Home";
import Formpage from "./Formpage";
import School from "./School";
import Contactpage from "./Contactpage";
import Container from "react-bootstrap/Container";
import Resources from "./Resources";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer";
import Header from "../Header";

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
    <Header />
    <br />
      <Container>
        <Router>
          <Navbar bg="light" expand="lg" className="navbar">
            <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Link to="/" className="nav-item">Home</Link>
                  <Link to="/School" className="nav-item">School</Link>
                  <Link to="/Formpage" className="nav-item">To-Do Form</Link>
                  <Link to="/Contact-Page" className="nav-item">Contact Page</Link>
                  <Link to="/Resources" className="nav-item">Resources</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact-Page" element={<Contactpage />} />
            <Route path="/Formpage" element={<Formpage />} />
            <Route path="/School" element={<School />} />
            <Route path="/Resources" element={<Resources />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  );
};

export default Routerspage;



  {/* <Nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              > */}
                {/* <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/School">School</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Formpage">To-Do Form</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact-Page">Contact Page</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Resources">Resources</Link>
                </li> */}
              {/* </div>
            </div>
          </Nav> */}