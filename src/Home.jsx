import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Container, Row, Col, Button, Image } from "react-bootstrap"; // Import necessary components from React Bootstrap
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    Aos.init({ duration: 1000 }); // You can change the duration as needed
  }, []);

  return (
    <Container fluid className="p-5 min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Main container with padding and light background */}

      <Row className="align-items-center">
        {/* Row to center-align the content */}

        <Col md={6}>
          {/* Left Column for text and buttons */}
          <h1 className="display-4 font-weight-bold mb-4" data-aos="zoom-in">
            Taiwo Akinpennu
          </h1>
          <p className="lead mb-3 text-justify" data-aos="zoom-in">
            As a driven <strong>Full Stack Developer</strong>, I specialize in creating innovative solutions that bring value to businesses,
            organizations, and communities. My focus is on using my expertise to solve problems and drive success through technology.
          </p>
          <div data-aos="zoom-in">

          
   <Link to="/project"><Button variant="success" size="lg" className="ms-3">My Project</Button></Link> 
    
   <Link to="/about"><Button variant="dark" size="lg" className="ms-3 "  >About Me</Button></Link>
            
          
          </div>
          

          
          <Image
            src="src\\asset\\images\\Photo.jpg"
            alt="Taiwo Akinpennu"
            fluid
            className="rounded-circle shadow-lg mt-4"
            data-aos="zoom-in" // Apply zoom-in effect to the image
          />
          {/* mt-4 adds top margin to create space above the image */}
        </Col>

        <Col md={6}>
          {/* Right Column for empty space or additional content */}
          {/* You can leave this column empty or add more content if needed */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
