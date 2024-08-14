import BattleCard from "../common/BattleCard";

function SinglePlayerBattle() {
  return (
    <div>
      <h2>Battle Mode</h2>
      <button type="button">Start Battle</button>
      {/* Have options to choose what characters the user wants etc */}
      <BattleCard />
    </div>
  );
}

export default SinglePlayerBattle;
