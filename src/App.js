import "./Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Cards";
// import About from "./Components/About";
import Questions from "./Components/Questions";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container fluid className="contain">
      <NavBar />
      <Hero />
      <Cards />
      {/* <About /> */}
      <Questions />
      <Footer />
    </Container>
  );
}

export default App;
