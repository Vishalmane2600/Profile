import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import TwoPartComponent from "./components/Main";
import AboutMe from "./components/About";
import ContactMe from "./components/Contact";


const App = ()=> {

  return (
    
      <>
      <Navbar />
      <TwoPartComponent />
      <AboutMe />
      <ContactMe/>
      </>
  
  )
};

export default App;
