import { MouseEvent, useState } from "react";
import "../../assets/css/singlePlayerHome.css";
import "../../assets/css/quickBattle.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import BattleCard from "../common/BattleCard";
import horrorData from "../../data/horrorCard.json";
import { Link } from "react-router-dom";

type battleCardTypes = {
  id: number;
  name: string;
  image: string;
  description: string;
  special: string;
  weakness: string;
  health: number;
  power: number;
};

function SinglePlayerBattle() {
  const [playerCards, setPlayerCards] = useState<battleCardTypes[]>([]);
  const [computerCards, setComputerCards] = useState<battleCardTypes[]>([]);

  function handleQuickStart(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    // Create a random array of 5 computer and player cards
    // Add corresponding arrays to each state
    const shuffleCards = [...horrorData.horror.slashers].sort(
      () => Math.random() - 0.5
    );

    const randomPlayerCards = shuffleCards.slice(0, 5);
    const randomComputerCards = shuffleCards.slice(5, 10);

    setPlayerCards(randomPlayerCards);
    setComputerCards(randomComputerCards);
  }

  return (
    <Container>
      <h2>Battle Mode</h2>
      {/* If this version clicked, take 5 random cards to each player */}
      <div className="quickBattleDetails">
        <p>If you want a quick player vs computer game, enter here</p>
        <button type="button" onClick={handleQuickStart}>
          Quick Battle
        </button>
      </div>

      {/* If this version clicked, take to another page where there will be some options like how many cards, filter etc  */}
      <div className="battleDetails">
        <p>Fancy a longer, more strategic game? Enter here</p>
        <Link to={"/startBattle"} className="battleBtn">
          Battle
        </Link>
      </div>

      <div className="quickBattleGameContainer">
        <div className="player">
          <h4>Player Name</h4>
          <div className="quickBattleCardsContainer player">
            {playerCards.map((char: battleCardTypes) => (
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
                <p>{char.health}</p>
                <p>{char.power}</p>
              </Card>
            ))}
          </div>
        </div>
        <p>VS</p>
        <div className="computer">
          {/* Replace with an array of name, different on each load */}
          <h4>Computer</h4>
          <div className="quickBattleCardsContainer computer">
            {computerCards.map((char: battleCardTypes) => (
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
                <p>{char.health}</p>
                <p>{char.power}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Replace the card list with the quick start battle if thats what the user selects */}
      <div className="battleCardContainer">{/* <BattleCard /> */}</div>
    </Container>
  );
}

export default SinglePlayerBattle;
