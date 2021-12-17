import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="foot p-2 text-center position-relative">
      <Container>
        <p className="lead">Copyright &copy; 2021 Website Yo!</p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
