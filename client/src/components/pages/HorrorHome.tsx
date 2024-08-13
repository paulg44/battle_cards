import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function HorrorHome() {
  return (
    <div>
      <Container>
        <h2>Choose your path</h2>
        <Link to={"/horrorBattle"}>Battle</Link>
        <Link to={"/horrorCampaign"}>Campaign</Link>
      </Container>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

export default HorrorHome;
