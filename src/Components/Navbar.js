import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="nav_bar" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#">Flossy Flippers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#shoes">Shoes</Nav.Link>
            <Nav.Link href="#streetwear">Streetwear</Nav.Link>
            <Nav.Link href="#aboutUs">About Us</Nav.Link>
            <Nav.Link href="#questions">Questions</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
