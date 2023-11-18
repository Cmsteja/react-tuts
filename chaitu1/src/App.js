import React from "react";
import { BrowserRouter as Router, Route, Routes, Form,  } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contactus from "./components/Contactus";
import Signup from "./components/Signup";



const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/Home" element={<Home/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/skills" element={<Skills/>} ></Route>
        <Route path="/contactus" element={<Contactus/>} ></Route>
        <Route path="/signup" element={<Signup/>} >
          
        </Route>
      </Routes>
    </Router>
    
    
    </>
  );
};

export default App;
