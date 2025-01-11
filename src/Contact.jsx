import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Container, Row, Col } from 'react-bootstrap'; // For responsive layout

function Contact() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-page min-vh-100">
      <Container fluid className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <h1 className="text-center mb-4" data-aos="zoom-in">CONTACT ME</h1>
            <p className="text-center text-bold fs-3" data-aos="zoom-in">Let's Talk</p>

            {/* Social Media Icons */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-decoration-none d-flex align-items-center"
                data-aos="zoom-in"
              >
                <i className="bi bi-linkedin" style={{ fontSize: '2rem', color: '#0077b5' }}></i>
                <span className="ms-2">LinkedIn</span> {/* Text is now always visible */}
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/your-profile" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-decoration-none d-flex align-items-center"
                data-aos="zoom-in"
              >
                <i className="bi bi-github" style={{ fontSize: '2rem', color: '#333' }}></i>
                <span className="ms-2">GitHub</span> {/* Text is now always visible */}
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/your-profile" // Replace with your Twitter URL
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-decoration-none d-flex align-items-center"
                data-aos="zoom-in"
              >
                <i className="bi bi-twitter" style={{ fontSize: '2rem', color: '#1da1f2' }}></i>
                <span className="ms-2">Twitter</span> {/* Text is now always visible */}
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+2347060912057" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon text-decoration-none d-flex align-items-center"
                data-aos="zoom-in"
              >
                <i className="bi bi-whatsapp" style={{ fontSize: '2rem', color: '#25d366' }}></i>
                <span className="ms-2">WhatsApp</span> {/* Text is now always visible */}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
