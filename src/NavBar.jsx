

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // For navigation

const NavBar = () => {
  // State to track the navbar collapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to handle nav item click and close the navbar
  const handleNavItemClick = () => {
    setIsCollapsed(true); // Collapse the navbar
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Link to="/" className='text-decoration-none'>
          <Navbar.Brand className="me-auto">Taiwo</Navbar.Brand>
        </Link>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setIsCollapsed(!isCollapsed)} // Toggle collapse on button click
        />
        <Navbar.Collapse id="navbar-nav" in={!isCollapsed}> {/* Manage collapse state */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link" onClick={handleNavItemClick}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link" onClick={handleNavItemClick}>About</Nav.Link>
            <Nav.Link as={Link} to="/twoproject" className="nav-link" onClick={handleNavItemClick}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" onClick={handleNavItemClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

