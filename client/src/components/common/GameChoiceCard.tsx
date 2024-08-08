import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface CardChoice {
  header: string;
  btnText: string;
}
function GameChoiceCard(props: CardChoice) {
  return (
    <Card id="horror">
      <h2>{props.header}</h2>
      <Button type="button">{props.btnText}</Button>
    </Card>
  );
}

export default GameChoiceCard;
