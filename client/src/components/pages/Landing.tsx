// import { useState } from "react";
import "../../assets/css/landing.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function Landing() {
  // const [username, setUsername] = useState("");

  return (
    <div className="landingBackground">
      <Container className="landing">
        <h1>
          <span>Horror Cards.</span> Welcome to the arena!{" "}
        </h1>

        {/* <div className="signInOption">
          <label>Enter Username or continue as guest</label>
          <input onChange={(e) => setUsername(e.target.value)} />
        </div> */}

        <div id="horror" className="horrorLandingCard">
          <h2>Enter the Horror! Choose wisely.</h2>
          <div className="landingPageLinks">
            <Link to={"/horrorBattle"}>Battle</Link>
            <Link to={"/horrorCampaign"}>Campaign</Link>
            {/* <Link to="/horror">Enter the Horror!</Link> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Landing;
