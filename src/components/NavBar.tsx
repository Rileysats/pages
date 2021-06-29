import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/NavBar.css';

class NavBar extends React.Component{
  render(){
    return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect id="navbar">  
      <Navbar.Brand id="brand-logo" href="/">
        Riley Satanek
      </Navbar.Brand>
      <Navbar.Toggle/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto" id="right-nav">  
        <NavDropdown title="Projects" id="basic-nav-dropdown">
          <NavDropdown.Item href="projects">Projects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="project1">1</NavDropdown.Item>
          <NavDropdown.Item href="project2">2</NavDropdown.Item>
          <NavDropdown.Item href="project3">3</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="about-me">About Me</Nav.Link>
        <Nav.Link href="experience">Experience</Nav.Link>
        <Nav.Link href="education">Education</Nav.Link>
        <Nav.Link href="contact">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
