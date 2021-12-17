import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero text-light p-5 text-center text-sm-start">
      <Container>
        <div>
          <h1>
            <span className="span_shoes">Shoes</span> for everyone
          </h1>
          <p class="lead my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            ratione officiis exercitationem quis tempora, quo corporis dicta,
            animi et nisi fugiat pariatur dolore modi, reprehenderit reiciendis.
            Iusto in dolore distinctio?
          </p>
          <a href="https://react-bootstrap.github.io/components/overlays/#popovers">
            <Button className="btn" btn="lg">
              Shop Now
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
