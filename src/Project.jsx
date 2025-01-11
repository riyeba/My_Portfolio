// import React, { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import { Row, Col } from "react-bootstrap";

// function Project() {
//   useEffect(() => {
//     // Initialize AOS animation when the component mounts
//     Aos.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="container-fluid mt-3 mb-3">
//       {/* Heading Section */}
//       <div className="text-center mb-5" >
//         <h1
//           style={{
//             fontSize: "3rem", // Large font size for the main heading
//             fontWeight: "bold", // Bold font weight
//             color: "#2c3e50", // A dark color for good contrast
//             textTransform: "uppercase", // Uppercase letters for emphasis
//             letterSpacing: "2px", // Space between letters
//           }}
//         >
//           My Projects
//         </h1>
//         <p
//           style={{
//             fontSize: "1.5rem", // Slightly smaller font size for the subheading
//             fontStyle: "italic", // Italicize for differentiation
//             color: "#7f8c8d", // Lighter color for the subheading
//             fontWeight: "lighter", // Lighter weight for the subheading
//             maxWidth: "600px", // Limit the width for better readability
//             margin: "0 auto", // Center the subheading
//           }}
//         >
//           <strong>Take A Look At Some of The Projects That I Have Built</strong>
//         </p>
//       </div>

//       {/* First Project */}
//       <Row className="g-4" data-aos="zoom-in" >
//         <Col xs={12} md={6} className="d-flex flex-column align-items-center">
//           <img
//             src="src/asset/images/weathertwo.png"
//             alt="project"
//             className="img-fluid rounded" // img-fluid for responsiveness
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </Col>
//         <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
//           <h2 >WEATHER APP</h2>
//           <p >
//             I built a Weather Forecast App that allows users to check current
//             weather conditions, forecasts, and other relevant data for any
//             location. The app fetches weather information from a public API and
//             displays the data in a clean and intuitive interface. It can display
//             the current temperature, humidity, wind speed, and weather
//             conditions (e.g., clear, cloudy, etc.), as well as a forecast for
//             the next three days.
//           </p>
//           <div>
//             <h3 >TOOLS:</h3>
//             <div
//               style={{ color: "black", display: "flex", gap: "5px", fontWeight: "bold" }}
             
//             >
//               <p>HTML</p>
//               <p>CSS</p>
//               <p>JAVASCRIPT</p>
//             </div>
//           </div>

//           {/* Button Container */}
//           <div
//             style={{
//               display: "flex",
//               gap: "1rem", // Keep buttons apart
//               justifyContent: "center", // Center the buttons
//               marginTop: "20px",
//             }}
            
//           >
//             {/* Live Button */}
//             <a
//               className="w-100 bg-success text-center d-flex justify-content-center align-items-center"
//               style={{
//                 fontWeight: "bold",
//                 color: "white",
//                 textDecoration: "none",
//                 padding: "10px",
//               }}
//               href="https://weather-app-phi-gold-99.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i>
//             </a>

//             {/* Git Button */}
//             <a
//               className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
//               style={{
//                 fontWeight: "bold",
//                 color: "white",
//                 textDecoration: "none",
//                 padding: "10px",
//               }}
//               href="https://github.com/riyeba/Weather-APP.git"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i>
//             </a>
//           </div>
//         </Col>
//       </Row>

//       {/* Repeat the same structure for another project */}
//       <Row className="g-4 mt-5" data-aos="zoom-in">
//         <Col xs={12} md={6} className="d-flex flex-column align-items-center">
//           <img
//             src="src/asset/images/abiotech.png"
//             alt="project"
//             className="img-fluid rounded"
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </Col>
//         <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
//           <h2 >ABIOTECH NIGERIA LIMITED</h2>
//           <p >
//             I developed a website for ABIOTECH NIGERIA LIMITED, a company that specializes in selling plumbing and building materials. The website showcases their products, provides detailed descriptions of each item, and allows customers to browse through different categories of materials. The website also includes a contact feature that makes it easy for customers to reach out to the company for inquiries, orders, or support.
//           </p>
//           <div>
//             <h3 >TOOLS:</h3>
//             <div
//               style={{ color: "black", display: "flex", gap: "5px", fontWeight: "bold" }}
             
//             >
//               <p>HTML</p>
//               <p>CSS</p>
//               <p>JAVASCRIPT</p>
//             </div>
//           </div>

//           {/* Button Container */}
//           <div
//             style={{
//               display: "flex",
//               gap: "1rem", // Keep buttons apart
//               justifyContent: "center", // Center the buttons
//               marginTop: "20px",
//             }}
            
//           >
//             {/* Live Button */}
//             <a
//               className="w-100 bg-success text-center d-flex justify-content-center align-items-center"
//               style={{
//                 fontWeight: "bold",
//                 color: "white",
//                 textDecoration: "none",
//                 padding: "10px",
//               }}
//               href="https://abiotech-l5dd.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i>
//             </a>

//             {/* Git Button */}
//             <a
//               className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
//               style={{
//                 fontWeight: "bold",
//                 color: "white",
//                 textDecoration: "none",
//                 padding: "10px",
//               }}
//               href="https://github.com/riyeba/ABIOTECH.git"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i>
//             </a>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default Project;

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Row, Col } from "react-bootstrap";

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
            fontSize: "1.5rem", // Slightly smaller font size for the subheading
            fontStyle: "italic", // Italicize for differentiation
            color: "#7f8c8d", // Lighter color for the subheading
            fontWeight: "lighter", // Lighter weight for the subheading
            maxWidth: "600px", // Limit the width for better readability
            margin: "0 auto", // Center the subheading
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)", // Shadow for subheading text
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
              src="src/asset/images/weathertwo.png"
              alt="project"
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "auto",
                display: "block", // Ensures image fills the container properly
                borderBottom: "5px solid #ccc", // Border separating image and text
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Shadow covering image as well
                marginBottom: "0", // Remove bottom margin between image and title
              }}
            />
            <div
              style={{
                padding: "20px",
                backgroundColor: "#fff",
                flex: "1", // Ensures the text section takes remaining height
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
                  <p>HTML</p>
                  <p>CSS</p>
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
                <a
                  className="w-100 bg-success text-center d-flex justify-content-center align-items-center"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for Live button
                  }}
                  href="https://weather-app-phi-gold-99.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i>
                </a>

                {/* Git Button */}
                <a
                  className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for Git button
                  }}
                  href="https://github.com/riyeba/Weather-APP.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i>
                </a>
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
                display: "block", // Ensures image fills the container properly
                borderBottom: "5px solid #ccc", // Border separating image and text
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // Shadow covering image as well
                marginBottom: "0", // Remove bottom margin between image and title
              }}
            />
            <div
              style={{
                padding: "20px",
                backgroundColor: "#fff",
                flex: "1", // Ensures the text section takes remaining height
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
                  <p>HTML</p>
                  <p>CSS</p>
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
                <a
                  className="w-100 bg-success text-center d-flex justify-content-center align-items-center"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for Live button
                  }}
                  href="https://abiotech-l5dd.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live <i className="bi bi-globe" style={{ marginLeft: "7px" }}></i>
                </a>

                {/* Git Button */}
                <a
                  className="w-100 bg-dark text-center d-flex justify-content-center align-items-center"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "none",
                    padding: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for Git button
                  }}
                  href="https://github.com/riyeba/ABIOTECH.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Git <i className="bi bi-github" style={{ marginLeft: "7px" }}></i>
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Project;


