import "../../assets/css/battleCard.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import horrorData from "../../data/horrorCard.json";
import { battleCardTypes } from "../../data/types";

function BattleCard() {
  return (
    <Container className="cardWrapper">
      {/* This will change dependant on what the user picks. At the moment I will keep the data set small, so 10 characters in each category, 40, and you have to pick a mix of 20 */}
      {horrorData.horror.slashers.map((char: battleCardTypes) => (
        <Card
          className="card"
          key={char.id}
          style={{
            background: `url(${char.image}) no-repeat center center/cover`,
          }}
        >
          <h3>{char.name}</h3>
          <p>{char.description}</p>
          <p>{char.special}</p>
          <p>{char.weakness}</p>
        </Card>
      ))}
    </Container>
  );
}

export default BattleCard;
