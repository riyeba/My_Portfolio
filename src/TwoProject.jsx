import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProjectsPage = () => {
 

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="mb-5 text-center">Explore My Projects</h2>
      <Row className="w-100 justify-content-center">
        <Col xs={10} sm={6} md={4} className="mb-3 d-flex justify-content-center">
        <Link to="/mlearning">
          <Button
            variant="primary"
            size="lg"
            className="w-100"
            
          >
            Machine Learning Projects
            
          </Button>
          </Link>
        </Col>
        <Col xs={10} sm={6} md={4} className="mb-3 d-flex justify-content-center">
        <Link to="/project">
          <Button
            variant="success"
            size="lg"
            className="w-100"
            
          >
            Web Development Projects
          </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsPage;
