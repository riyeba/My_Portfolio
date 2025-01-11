import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 " 
    >
      <Container >
        <Row>
          <Col>
          <div >
          <p >Taiwo</p>
          <p className>© All Rights Reserved 2025 .</p>
          </div>
          
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
