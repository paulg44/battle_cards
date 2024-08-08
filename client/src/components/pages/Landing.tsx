import Container from "react-bootstrap/Container";
import GameChoiceCard from "../common/GameChoiceCard";

function Landing() {
  return (
    <Container
      style={{ border: "5px solid red", height: "500px", width: "1100px" }}
    >
      <h1>Battle Cards! Welcome to the arena! </h1>
      <p>Choose your path</p>
      <GameChoiceCard header="Horror" btnText="Choose the horror" />
      <GameChoiceCard header="Family" btnText="Family Time!" />
    </Container>
  );
}

export default Landing;
