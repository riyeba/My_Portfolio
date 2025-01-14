import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import ScrollTop from "./ScrollTop";



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
      <ScrollTop/>
        <NavBar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </>
    </div>
  );
}

export default App;
