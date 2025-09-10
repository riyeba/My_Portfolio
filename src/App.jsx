import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";

// import Project from "./Project";
import Contact from "./Contact";

import ScrollT from "./Scrooler";
import ProjectsPage from "./TwoProject";
import MachineLearning from "./MachineLearning";
import Project from "./Project";




// Main Application
function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  return (
    <div className="min-vh-100 ">
      <>
      <ScrollT/>
        <NavBar />
        
        <Routes >
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutMe />} /> */}
          <Route path="/project" element={<Project/>} /> 
          <Route path="/contact" element={<Contact/>} />
          <Route path="/twoproject" element={<ProjectsPage/>} /> 
          <Route path="/mlearning" element={<MachineLearning/>} /> 
        </Routes>
        <Footer/>
      </>
    </div>
  );
}

export default App;
