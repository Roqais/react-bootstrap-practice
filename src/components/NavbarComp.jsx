import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function NavbarComp() {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#service" className="nav-link-custom">Service</Nav.Link>
            <Nav.Link href="#feature" className="nav-link-custom">Feature</Nav.Link>
            <Nav.Link href="#testimonial" className="nav-link-custom">Testimonial</Nav.Link>
            <Nav.Link href="#faq" className="nav-link-custom">FAQ</Nav.Link>
          </Nav>
          <div>
            <Button variant="" className="me-2 login">Login</Button>
            <Button variant="" className='signup'>Signup</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
