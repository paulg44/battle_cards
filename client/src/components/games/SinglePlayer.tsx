import { MouseEvent, useEffect, useState } from "react";
import "../../assets/css/singlePlayerHome.css";
import "../../assets/css/quickBattle.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import BattleCard from "../common/BattleCard";
import horrorData from "../../data/horrorCard.json";
import { battleCardTypes } from "../../data/types";

function SinglePlayerBattle() {
  const [playerCards, setPlayerCards] = useState<battleCardTypes[]>([]);
  const [computerCards, setComputerCards] = useState<battleCardTypes[]>([]);
  const [playerCardSelected, setPlayerCardSelected] =
    useState<battleCardTypes | null>(null);
  const [playerStatSelected, setPlayerStatSelected] = useState<{
    statName: string;
    statValue: number;
  } | null>(null);

  function handleQuickStart(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    // Create a random array of cards
    // Add corresponding arrays to each state
    const shuffleCards = [...horrorData.horror.slashers].sort(
      () => Math.random() - 0.5
    );

    const randomPlayerCards = shuffleCards.slice(0, 5);
    const randomComputerCards = shuffleCards.slice(5, 10);

    setPlayerCards(randomPlayerCards);
    setComputerCards(randomComputerCards);
  }

  function handlePlayerCardSelection(card: battleCardTypes) {
    setPlayerCardSelected(card);
    console.log(playerCardSelected);
  }

  function handlePlayerStatSelection(statName: string, statValue: number) {
    setPlayerStatSelected({ statName, statValue });
  }

  function handleQuickStartFight() {}

  // To test my state changes when building
  useEffect(() => {
    console.log(playerCardSelected, playerStatSelected);
  }, [playerCardSelected, playerStatSelected]);

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
        <div className="innerQuickBattleGameContainer">
          <div className="player">
            <h4>Player Name</h4>
            <div className="quickBattleCardsContainer player">
              {playerCards.map((char: battleCardTypes) => (
                <Card
                  className={`quickBattleCard ${
                    playerCardSelected?.id === char.id ? "selected" : ""
                  }`}
                  key={char.id}
                  onClick={() => handlePlayerCardSelection(char)}
                  style={{
                    background: `url(${char.image}) no-repeat center center/cover`,
                  }}
                >
                  <h3>{char.name}</h3>
                  <p>{char.description}</p>
                  <ul>
                    <li
                      onClick={() =>
                        handlePlayerStatSelection("intellect", char.intellect)
                      }
                    >
                      Intellect: {char.intellect}
                    </li>
                    <li
                      onClick={() =>
                        handlePlayerStatSelection("fear", char.fearFactor)
                      }
                    >
                      Fear: {char.fearFactor}
                    </li>
                    <li
                      onClick={() =>
                        handlePlayerStatSelection("kills", char.bodyCount)
                      }
                    >
                      Kills: {char.bodyCount}
                    </li>
                    <li
                      onClick={() =>
                        handlePlayerStatSelection("stealth", char.stealth)
                      }
                    >
                      Stealth: {char.stealth}
                    </li>
                  </ul>
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
                  className="quickBattleCard"
                  key={char.id}
                  style={{
                    background: `url(${char.image}) no-repeat center center/cover`,
                  }}
                >
                  <h3>{char.name}</h3>
                  <p>{char.description}</p>
                  <ul>
                    <li>Intellect: {char.intellect}</li>
                    <li>Fear: {char.fearFactor}</li>
                    <li>Kills: {char.bodyCount}</li>
                    <li>Stealth: {char.stealth}</li>
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <p>Chosen Fighter: {playerCardSelected?.name}</p>
        <p>
          Chosen Stat: {playerStatSelected?.statName} -{" "}
          {playerStatSelected?.statValue}
        </p>
        <button type="button" onClick={handleQuickStartFight}>
          Fight
        </button>
      </div>
      {/* Replace the card list with the quick start battle if thats what the user selects */}
      <div className="battleCardContainer">{/* <BattleCard /> */}</div>
    </Container>
  );
}

export default SinglePlayerBattle;
