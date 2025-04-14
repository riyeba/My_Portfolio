

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

function MachineLearning() {
  useEffect(() => {
    // Initialize AOS animation when the component mounts
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid mt-3 mb-3">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h1
          style={{
            fontSize: "3rem", // Large font size for the main heading
            fontWeight: "bold", // Bold font weight
            color: "#2c3e50", // A dark color for good contrast
            textTransform: "uppercase", // Uppercase letters for emphasis
            letterSpacing: "2px", // Space between letters
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Shadow for the heading text
          }}
        >
          My Projects
        </h1>
        <p
          style={{
            fontSize: "1.5rem", 
            fontStyle: "italic", 
            color: "#7f8c8d", 
            fontWeight: "lighter", 
            maxWidth: "600px", 
            margin: "0 auto", 
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)", 
          }}
        >
          <strong>Take A Look At Some of my Computer Vision Projects</strong>
        </p>
      </div>

      {/* Project Section */}
      <Row className="justify-content-center g-4">
     

        

       
              

             <Col xs={12} md={6} lg={5} className="d-flex flex-column align-items-stretch" data-aos="zoom-in">
             <div
               className="project-container"
               style={{
                 boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", 
                 borderRadius: "10px", 
                 display: "flex",
                 flexDirection: "column",
                 height: "100%", 
                 overflow: "hidden", 
               }}
             >
               <img
                 src="\images\potatoimg.PNG"
                 alt="project"
                 className="img-fluid rounded"
                 style={{
                   width: "100%",
                   height: "auto",
                   display: "block", 
                   borderBottom: "5px solid #ccc", 
                   boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", 
                   marginBottom: "0", 
                 }}
               />
               <div
                 style={{
                   padding: "20px",
                   backgroundColor: "#fff",
                   flex: "1", 
                 }}
               >
                 <h2 style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)", marginTop: "0" }}>
                   Potato Leaf Disease Detection App
                 </h2>
                 <p style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}>
                  I built pototao leaf disease detection app with computer vision (Tensorflow)
                 </p>
                 <div>
                   <h3 style={{ fontWeight: "bold" }}>Tech Stacks:</h3>
                   <div
                     style={{
                       color: "black",
                       display: "flex",
                       gap: "5px",
                       fontWeight: "bold",
                       textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
                     }}
                   >
                     <p>Tensorflow</p>
                     <p>FastApi</p>
                     <p>ReactJs</p>
                   </div>
                 </div>
           
                 {/* Button Container */}
                 <div
                   style={{
                     display: "flex",
                     gap: "1rem",
                     justifyContent: "center",
                     marginTop: "20px",
                   }}
                 >
                   {/* Live Button */}
                   <Link
                     className="w-100 bg-success text-center d-flex justify-content-center align-items-center"
                     style={{
                       fontWeight: "bold",
                       color: "white",
                       textDecoration: "none",
                       padding: "10px",
                       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
                     }}
                     to="https://potatoleafdiseasedetectionapp.vercel.app/"
                     
                   >
                     <button className="text-decoration-none bg-transparent border-0 text-white">Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i></button>
                   </Link>
           
                   {/* Frontend GitHub Button */}
                   <Link
                     className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
                     style={{
                       fontWeight: "bold",
                       color: "white",
                       textDecoration: "none",
                       padding: "10px",
                       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
                     }}
                     to="https://github.com/riyeba/potatoes_leaf_disease_detection.git"  
                    
                     
                   >
                    <button className="text-decoration-none bg-transparent border-0 text-white">Backend Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></button>  
                   </Link>
           
                   
                   <Link
                     className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
                     style={{
                       fontWeight: "bold",
                       color: "white",
                       textDecoration: "none",
                       padding: "10px",
                       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
                     }}
                     to="https://github.com/riyeba/frontend_potato_leaf_disese.git"  
                    
                     
                   >
                    <button className="text-decoration-none bg-transparent border-0 text-white">Frontend Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></button> 
                   </Link>
                 </div>
               </div>
             </div>
           </Col>
           




      
       
      </Row>






      <Row className="justify-content-center g-4">
     

        

       
              

             <Col xs={12} md={6} lg={5} className="d-flex flex-column align-items-stretch" data-aos="zoom-in">
             <div
               className="project-container"
               style={{
                 boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", 
                 borderRadius: "10px", 
                 display: "flex",
                 flexDirection: "column",
                 height: "100%", 
                 overflow: "hidden", 
               }}
             >
               <img
                 src="\images\saudidate.PNG"
                 alt="project"
                 className="img-fluid rounded"
                 style={{
                   width: "100%",
                   height: "auto",
                   display: "block", 
                   borderBottom: "5px solid #ccc", 
                   boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", 
                   marginBottom: "0", 
                 }}
               />
               <div
                 style={{
                   padding: "20px",
                   backgroundColor: "#fff",
                   flex: "1", 
                 }}
               >
                 <h2 style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)", marginTop: "0" }}>
                   Type of Date Fruit Detector 
                 </h2>
                 <p style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}>
                  I built an app that classify date fruit commonly found in Saudi Arabia
                 </p>
                 <div>
                   <h3 style={{ fontWeight: "bold" }}>Tech Stacks:</h3>
                   <div
                     style={{
                       color: "black",
                       display: "flex",
                       gap: "5px",
                       fontWeight: "bold",
                       textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
                     }}
                   >
                     <p>Tensorflow</p>
                     <p>FastApi</p>
                     <p>ReactJs</p>
                   </div>
                 </div>
           
                 {/* Button Container */}
                 <div
                   style={{
                     display: "flex",
                     gap: "1rem",
                     justifyContent: "center",
                     marginTop: "20px",
                   }}
                 >
                   {/* Live Button */}
                   <Link
                     className="w-100 bg-success text-center d-flex justify-content-center align-items-center"
                     style={{
                       fontWeight: "bold",
                       color: "white",
                       textDecoration: "none",
                       padding: "10px",
                       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
                     }}
                     to="https://typeofdatedetector.vercel.app/"
                     
                   >
                     <button className="text-decoration-none bg-transparent border-0 text-white">Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i></button>
                   </Link>
           
                   {/* Frontend GitHub Button */}
                   <Link
                     className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
                     style={{
                       fontWeight: "bold",
                       color: "white",
                       textDecoration: "none",
                       padding: "10px",
                       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
                     }}
                     to="https://github.com/riyeba/back-end_saudi_date"  
                    
                     
                   >
                    <button className="text-decoration-none bg-transparent border-0 text-white">Backend Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></button>  
                   </Link>
           
                   
                   <Link
                     className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
                     style={{
                       fontWeight: "bold",
                       color: "white",
                       textDecoration: "none",
                       padding: "10px",
                       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", 
                     }}
                     to="https://github.com/riyeba/date_type_detect_fr"  
                    
                     
                   >
                    <button className="text-decoration-none bg-transparent border-0 text-white">Frontend Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></button> 
                   </Link>
                 </div>
               </div>
             </div>
           </Col>
           




      
       
      </Row>
    </div>
  );
}

export default MachineLearning;


