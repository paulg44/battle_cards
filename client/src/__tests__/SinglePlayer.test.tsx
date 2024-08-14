import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SinglePlayerBattle from "../components/games/SinglePlayer";

describe("single player page tests", () => {
  it("shows a header", () => {
    render(
      <MemoryRouter>
        <SinglePlayerBattle />
      </MemoryRouter>
    );

    const mainHeader = screen.getByRole("heading", { name: /battle/i });

    expect(mainHeader).toBeInTheDocument();
  });

  it("Single player page shows battle card", async () => {
    render(
      <MemoryRouter>
        <SinglePlayerBattle />
      </MemoryRouter>
    );

    const cardName = await screen.findByRole("heading", { name: /freddy/i });
    const cardDescription = await screen.findByText(/glove/i);

    expect(cardName).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
  });
});
