import "../../assets/css/landing.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
      // style={{
      //   background: `url(${desktopBackgroundImg}) no-repeat center center/cover`,
      //   width: "100vw",
      //   height: "100vh",
      //   position: "absolute",
      //   top: 0,
      // }}
      className="landingBackground"
    >
      <Container className="landing">
        <h1>Battle Cards! Welcome to the arena! </h1>

        <Card id="horror" className="horrorLandingCard">
          <h2>Horror</h2>
          <Link to="/horror">Enter the Horror!</Link>
        </Card>
        {/* <Card id="family">
        <h2>Family</h2>
        <Link to={"/"}>Family Time!</Link>
      </Card> */}
      </Container>
    </div>
  );
}

export default Landing;
