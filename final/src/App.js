import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar-pages/navbar";
import Extraform from './components/navbar-pages/Extraform';


function App() {

  return (
    <div className="wrapper">
      <Navbar />
      <div className="form-and-todo-box">
        {/* <Extraform /> */}
      </div>
    </div>
  );
}

export default App;
