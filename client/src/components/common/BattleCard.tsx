import Card from "react-bootstrap/Card";
import horrorData from "../../data/horrorCard.json";

type battleCardTypes = {
  name: string;
  //   image: ImageBitmap;
  description: string;
  special: string;
  weakness: string;
  health: number;
  power: number;
};
function BattleCard() {
  return (
    <Card>
      {/* This will change dependant on what the user picks. At the moment I will keep the data set small, so 10 characters in each category, 40, and you have to pick a mix of 20 */}
      {horrorData.horror.slashers.map((char: battleCardTypes) => (
        <div>
          <h3>{char.name}</h3>
          <p>{char.description}</p>
          <p>{char.special}</p>
          <p>{char.weakness}</p>
          <p>{char.health}</p>
          <p>{char.power}</p>
        </div>
      ))}
    </Card>
  );
}

export default BattleCard;
