import { MouseEvent } from "react";
import Container from "react-bootstrap/Container";
import BattleCard from "../common/BattleCard";
import { Link } from "react-router-dom";

function SinglePlayerBattle() {
  function handleQuickStart(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
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

      {/* Have options to choose what characters the user wants etc */}
      <div className="battleCardContainer">
        <BattleCard />
      </div>
    </Container>
  );
}

export default SinglePlayerBattle;
