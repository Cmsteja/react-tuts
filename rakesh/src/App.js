import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/skills" element={<Skills />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/signup" element={<Signup />} >

          </Route>
        </Routes>
      </Router>


    </>
  );
};
export default App;