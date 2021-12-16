import React from "react";
import { Card } from "react-bootstrap";

const Cards = () => {
  return (
    <Card className="mb-2" style={{ color: "#000" }}>
      <Card.Img src="https://picsum.photos/200" />
      <Card.Body>
        <Card.Title>
          <Card.Text>This is an example yo!</Card.Text>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Cards;
