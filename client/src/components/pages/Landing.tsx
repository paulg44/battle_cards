import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Container
      style={{ border: "5px solid red", height: "500px", width: "1100px" }}
    >
      <h1>Battle Cards! Welcome to the arena! </h1>
      <p>Choose your path</p>

      <Card id="horror">
        <h2>Horror</h2>
        <Link to="/">Choose the Horror!</Link>
      </Card>
      <Card id="family">
        <h2>Family</h2>
        <Link to={"/"}>Family Time!</Link>
      </Card>
    </Container>
  );
}

export default Landing;
