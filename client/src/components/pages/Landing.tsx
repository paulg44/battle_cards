import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import desktopBackgroundImg from "../../assets/img/m-wrona-pCgxm-HDMNs-unsplash.jpg";

function Landing() {
  return (
    <div
      style={{
        background: `url(${desktopBackgroundImg}) no-repeat center center/cover`,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Container>
        <h1>Battle Cards! Welcome to the arena! </h1>

        <Card id="horror">
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
