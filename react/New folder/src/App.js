import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState({
    msg: "Your Message has been .... successfullyy accessed",
    type: "success",
  });

  return (
    <>
      <Router>
        <NavBar title="vivek" firstcolmn="Home" />
        <Alert alert={alert}></Alert>
        <div className="container my-5">
          <Routes>
          <Route path='/About' element={<About/>} />
          <Route path='/' element={<TextForm alert={alert} heading="Insert Text Here" />} />
               
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
