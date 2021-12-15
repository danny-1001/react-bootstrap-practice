import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                {" "}
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Write in your email"
                  />
                  <Form.Text className="text-muted">
                    Type in your email now
                  </Form.Text>
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
          <Card className="mb-2" style={{ color: "#000" }}>
            <Card.Img src="https://picsum.photos/200" />
            <Card.Body>
              <Card.Title>
                <Card.Text>This is an example yo!</Card.Text>
              </Card.Title>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test1</Breadcrumb.Item>
            <Breadcrumb.Item>Test2</Breadcrumb.Item>
            <Breadcrumb.Item active>Test3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert varient="primary">This is a button</Alert>
          <Button>Testing</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
