import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#f8f9fa" }}>
      {/* Main container with padding and light background */}

      <Row className="justify-content-center">
        {/* Row to center-align the content */}

        <Col md={8} lg={6} className="text-center">
          {/* Centered Column for the content */}
          <h2 className="display-4 mb-4" data-aos="zoom-in">
            About Me
          </h2>
          <p className="lead mb-4" data-aos="zoom-in">
            I'm a passionate <strong>Full Stack Developer</strong> who loves to create meaningful and
            innovative solutions. I specialize in designing, developing, and deploying web applications
            that provide excellent user experiences. With a strong foundation in both frontend and backend
            technologies, I strive to build scalable, efficient, and maintainable solutions.
          </p>
          <Row className="justify-content-center mb-5">
            {/* Row to arrange Image and text side by side */}

            <Col xs={12} md={6} data-aos="zoom-in">
              <img
                src="\images\Photo.jpg" // Adjust image path
                alt="Taiwo Akinpennu"
                
                className="rounded-circle shadow-lg"
                style={{ width: "250px", height: "250px" }}
              />
            </Col>

            <Col xs={12} md={6} className="d-flex flex-column justify-content-center" data-aos="zoom-in">
              <h3>Who am I?</h3>
              <p className="mb-3">
                I am someone who believes in continuous learning. As a developer, my mission is to
                leverage technology to solve complex problems and create products that have a real-world
                impact. I have experience working with a variety of programming languages and frameworks,
                including <strong>React, JavaScript, HTML, CSS, Django, Bootstrap, Tailwind CSS</strong> and
                <strong> Firebase</strong>, and I’m always open to exploring new tools and technologies.
              </p>
              <p className="mb-3">
                When I’m not coding, I enjoy reading tech blogs, collaborating with peers, and exploring
                new ideas. I'm also a strong advocate for open-source projects and contribute whenever I
                can. My passion is to continue learning, growing, and applying new concepts to real-life
                applications that benefit people.
              </p>
            </Col>
          </Row>

          {/* Card Section */}
          <Card className="mt-4 shadow-lg" data-aos="zoom-in">
            <Card.Body>
              <h4 className="mb-3">Technologies I Work With:</h4>

              <Row className="text-center mt-4 mb-4">
                {/* Add margin to the top (mt-4) and bottom (mb-4) of the Row */}
                <Col xs={6} sm={4} md={3} data-aos="zoom-in" className="mb-2">
                  <Button variant="outline-primary" className="w-100">
                    Tensorflow
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} data-aos="zoom-in" className="mb-2">
                  <Button variant="outline-primary" className="w-100">
                    PyTorch
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} data-aos="zoom-in" className="mb-2">
                  <Button variant="outline-primary" className="w-100">
                    FastApi
                  </Button>
                </Col>

                <Col xs={6} sm={4} md={3} data-aos="zoom-in">
                  <Button variant="outline-primary" className="w-100">
                    Javascript
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} className="mb-2" data-aos="zoom-in">
                  <Button variant="outline-secondary" className="w-100">
                    ReactJs
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} data-aos="zoom-in" >
                  <Button variant="outline-warning" className="w-100 mb-2">
                    Django
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} data-aos="zoom-in">
                  <Button variant="outline-success" className="w-100 mb-2">
                    HTML
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} data-aos="zoom-in">
                  <Button variant="outline-danger" className="w-100 mb-2 ">
                    CSS
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} data-aos="zoom-in">
                  <Button variant="outline-info" className="w-100">
                    Tailwind CSS
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} data-aos="zoom-in">
                  <Button variant="outline-dark" className="w-100 ">
                    Bootstrap
                  </Button>
                </Col>
                <Col xs={6} sm={4} md={3} data-aos="zoom-in">
                  <Button variant="outline-warning" className="w-100">
                    Firebase
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Contact Button */}
          <div className="mt-4" data-aos="zoom-in">
           <Link to="/contact"> <Button variant="primary" size="lg" >
              Get In Touch
            </Button></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
