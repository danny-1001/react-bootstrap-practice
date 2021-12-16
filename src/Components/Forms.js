import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
const Forms = () => {
  return (
    <Form className="form">
      <Row>
        <Col md>
          {" "}
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control type="email" placeholder="Write in your email" />
            <Form.Text className="text-muted">Type in your email now</Form.Text>
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Write in your password"
            />
            <Form.Text className="text-muted">
              Type in your password now!
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Forms;
