import React from "react";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import Notes from './Notes';

const Home = (props) => {
 
  

  return (
    <div>
    <Notes showAlert={props.showAlert}/>
    </div>
  );
};

export default Home;
