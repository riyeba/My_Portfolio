

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Project() {
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
          <strong>Take A Look At Some of The Projects That I Have Built</strong>
        </p>
      </div>

      {/* Project Section */}
      <Row className="justify-content-center g-4">
        {/* First Project */}
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
      src="\images\image.png"
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
        NSU-KSU
      </h2>
      <p style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}>
        I developed a website for Nigerian students and alumni of King Saud University in Riyadh,
        Saudi Arabia, utilizing <strong>ReactJS</strong> for the frontend and <strong>Django</strong> for the backend. The landing 
        pages are dynamically fetched from the backend. The platform allows students and alumni to manage
        their profiles and connect with each other. Additionally, it features email notifications,
        enabling users to update their profiles, change their passwords, recover forgotten passwords, 
        and delete their accounts.
      </p>
      <div>
        <h3 style={{ fontWeight: "bold" }}>TOOLS:</h3>
        <div
          style={{
            color: "black",
            display: "flex",
            gap: "5px",
            fontWeight: "bold",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>ReactJS,</p>
          <p>Django</p>
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
          to="https://frontendksunsudemo.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="text-decoration-none bg-transparent border-0">Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i></Button>
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
          to="https://github.com/riyeba/frontendksunsudemo.git"  
          target="_blank"
          rel="noopener noreferrer"
        >
         <Button className="text-decoration-none bg-transparent border-0">Frontend Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></Button>  
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
          to="https://github.com/riyeba/ksunsudemo.git"  
          target="_blank"
          rel="noopener noreferrer"
        >
         <Button className="text-decoration-none bg-transparent border-0">Backend Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></Button> 
        </Link>
      </div>
    </div>
  </div>
</Col>

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
              src="\images\weathertwo.png"
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
                WEATHER APP
              </h2>
              <p style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}>
                I built a Weather Forecast App that allows users to check current
                weather conditions, forecasts, and other relevant data for any
                location. The app fetches weather information from a public API and
                displays the data in a clean and intuitive interface. It can display
                the current temperature, humidity, wind speed, and weather
                conditions (e.g., clear, cloudy, etc.), as well as a forecast for
                the next three days.
              </p>
              <div>
                <h3 style={{ fontWeight: "bold" }}>TOOLS:</h3>
                <div
                  style={{
                    color: "black",
                    display: "flex",
                    gap: "5px",
                    fontWeight: "bold",
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p>HTML,</p>
                  <p>CSS,</p>
                  <p>JAVASCRIPT</p>
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
                  to="https://weather-app-rgni.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-decoration-none bg-transparent border-0">Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i></Button>
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
                  to="https://github.com/riyeba/weather_app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <Button className="text-decoration-none bg-transparent border-0">Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></Button> 
                </Link>
              </div>
            </div>
          </div>
        </Col>

       {/* Second Project */}
       <Col xs={12} md={6} lg={5} className="d-flex flex-column align-items-stretch" data-aos="zoom-in">
          <div
            className="project-container"
            style={{
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Unified shadow for the container
              borderRadius: "10px", // Round corners for a card-like effect
              display: "flex",
              flexDirection: "column",
              height: "100%", // Ensure the column takes up full height
              overflow: "hidden", // Ensures content stays within the rounded container
            }}
          >
            {/* Image and Title in the Same Container */}
            <img
              src="\images\abiotech.png"
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
                ABIOTECH NIGERIA LIMITED
              </h2>
              <p style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}>
                I developed a website for ABIOTECH NIGERIA LIMITED, a company that specializes in selling plumbing and building materials. The website showcases their products, provides detailed descriptions of each item, and allows customers to browse through different categories of materials. The website also includes a contact feature that makes it easy for customers to reach out to the company for inquiries, orders, or support.
              </p>
              <div>
                <h3 style={{ fontWeight: "bold" }}>TOOLS:</h3>
                <div
                  style={{
                    color: "black",
                    display: "flex",
                    gap: "5px",
                    fontWeight: "bold",
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <p>HTML,</p>
                  <p>CSS,</p>
                  <p>JAVASCRIPT</p>
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
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for Live button
                  }}
                  to="https://abiotech-l5dd.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-decoration-none bg-transparent border-0">Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i></Button>
                </Link>

                {/* Git Button */}
                <Link
                  className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for Git button
                  }}
                  to="https://github.com/riyeba/ABIOTECH.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="text-decoration-none bg-transparent border-0">Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>  
              

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
              src="\images\billgate.PNG"
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
              INTERNSHIP PROJECT
              </h2>
              <p style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}>
              I remade a static website for Bill Gates School, located in India, as my first test project during my internship.
              </p>
              <div>
                <h3 style={{ fontWeight: "bold" }}>TOOLS:</h3>
                <div
                  style={{
                    color: "black",
                    display: "flex",
                    gap: "5px",
                    fontWeight: "bold",
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
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
                  to="https://internschool-75fp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <Button className="text-decoration-none bg-transparent border-0">Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i></Button> 
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
                  to="https://github.com/riyeba/Internschool.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <Button className="text-decoration-none bg-transparent border-0">Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i></Button> 
                </Link>
              </div>
            </div>
          </div>
        </Col>




        {/* Intern Project */}

       
      </Row>
    </div>
  );
}

export default Project;


