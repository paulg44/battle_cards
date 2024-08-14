import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BattleCard from "../components/common/BattleCard";

// I'll just be testing for a title and description for now until I get the card layout finalised
test("battle card displays a name, image, description etc", () => {
  render(
    <MemoryRouter>
      <BattleCard />
    </MemoryRouter>
  );

  const cardName = screen.getByRole("heading");
  const cardDescription = screen.getByText(/glove/i);

  expect(cardName).toBeInTheDocument();
  expect(cardDescription).toBeInTheDocument();
});
