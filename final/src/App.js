import { Form } from "./components/navbar-pages/Form";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/navbar-pages/Home";
// import Container from 'react-bootstrap/Container';
import Navbar from "./components/navbar-pages/navbar";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch
// } from 'react-router-dom';
// // the different routes we want access to

function App() {

  return (
    // <Container>
    // <Router>
    <div className="wrapper">
      <Navbar />
      <div className="form-and-todo-box">
      {/* <Form/> */}
      <Home />
      </div>
    </div>
    // </Router>
    // </Container>
  );
}

export default App;
