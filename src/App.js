import "./Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import Forms from "./Components/Forms";
import Cards from "./Components/Cards";
import Accordions from "./Components/Accordions";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <NavBar />
          <Forms />
          <Cards />
          <Accordions />
          <Button>Testing</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
