import React from "react";
import Home from "./Home";
import Form from "./Form";
import School from "./School";
import About from "./About";
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  // useRouteMatch
} from 'react-router-dom';
// the different routes we want access to


const Navbar = () => {
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
                {/* <a
                  className="nav-link"
                  aria-current="page 2"
                  // href="https://learn.promineotech.com/login/"
                  target="_blank"
                > */}
                   <Link to='/School'>School</Link>              
              </li>
              <li className="nav-item">              
                <Link to='/Form'>To-Do Form</Link>              
              </li>
              <li className="nav-item">
                <Link to='/About'>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/School" element={<School />} />
        </Routes> 
      </Router>
      </Container>
    </>
  );
};

export default Navbar;

/* <div>
         <ButtonGroup>
           {/* <Button variant="outline-secondary">
           <Link to='/'>Home</Link> */
             /* the link will change the url
             * based on the change of the url, we will use routes later */
          /* </Button> */
    //        <Button variant="outline-secondary">
    //        <Link to='/Form'>Form</Link>
    //          /* the link will change the url
    //          * based on the change of the url, we will use routes later */
    //        </Button>
    //       <Button variant="outline-secondary">
    //       <Link to='/About'>About</Link>
    //          /* the link will change the url
    //          * based on the change of the url, we will use routes later */
    //       </Button>
    //        <Button variant="outline-secondary">
    //        <Link to='/School'>School</Link>
    //          /* the link will change the url
    //          * based on the change of the url, we will use routes later */
    //        </Button>
    //      </ButtonGroup>
    // </div>

      




      /* <main>
      {/* <Routes> */
        /* <Route path="/" exact>
          <Home />
        </Route> */
        /* <Route path="/about" exact>
          <About />
        </Route> */
       /* </Routes> */
    /* </main> */

    // <Container>
    // <Router>
    // <div>
    //     <ButtonGroup>
    //       <Button variant="outline-secondary">
    //       <Link to='/'>Home</Link>
    //         {/* the link will change the url
    //         * based on the change of the url, we will use routes later */}
    //       </Button>
    //       <Button variant="outline-secondary">
    //       <Link to='/Form'>Form</Link>
    //         {/* the link will change the url
    //         * based on the change of the url, we will use routes later */}
    //       </Button>
    //       <Button variant="outline-secondary">
    //       <Link to='/About'>About</Link>
    //         {/* the link will change the url
    //         * based on the change of the url, we will use routes later */}
    //       </Button>
    //       <Button variant="outline-secondary">
    //       <Link to='/School'>School</Link>
    //         {/* the link will change the url
    //         * based on the change of the url, we will use routes later */}
    //       </Button>
    //     </ButtonGroup>




      // <Switch>
      //   <Route path="/" >
      //     <Home />
      //   </Route>
      //   <Route path="/Form">
      //     <Form />
      //   </Route>
      //   <Route path="/About">
      //     <About />
      //   </Route>
      //   <Route path="/School">
      //     <School />
      //   </Route>
      // </Switch>


    // </div>
    // </Router>
    // </Container>

    /* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/School" element={<School />} />
        </Routes> */