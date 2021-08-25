import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
// import $ from 'jquery'
import Home from "./components/Home";


function App() {
  return (
    <>
      <div className="container-fluid w-100 d-flex justify-content-center align-items-center kbc_main_container g-0">
        <Home/>
      </div>
    </>
  );
}

export default App;
