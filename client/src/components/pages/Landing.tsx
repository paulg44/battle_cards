import "../../assets/css/landing.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landingBackground">
      <Container className="landing">
        <h1>Battle Cards! Welcome to the arena! </h1>

        <div id="horror" className="horrorLandingCard">
          <h2>Horror</h2>
          <Link to={"/horrorBattle"}>Battle</Link>
          <Link to={"/horrorCampaign"}>Campaign</Link>
          {/* <Link to="/horror">Enter the Horror!</Link> */}
        </div>
      </Container>
    </div>
  );
}

export default Landing;
