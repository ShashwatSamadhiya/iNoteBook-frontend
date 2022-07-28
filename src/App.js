import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import LandingPage from './components/LandingPage'
import {  useState } from "react";
import Contact from "./components/Contact";

function App() {
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  return (
    <>
     <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
        <Route exact path="/" element={<LandingPage />}> </Route>
          <Route exact path="/Home" element={<Home showAlert={showAlert} />}> </Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/LogIn" element={<LogIn showAlert={showAlert}/>}> </Route>
          <Route exact path="/SignUP" element={<SignUp showAlert={showAlert}/>}> </Route>
          <Route exact path="/Contact" element={<Contact/>}> </Route>
        </Routes>
        </div>
      </Router>
     </NoteState>
    </>
  );
}

export default App;
