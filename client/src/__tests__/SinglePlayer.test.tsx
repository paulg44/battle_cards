import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
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

  it("shows a button for quick battle and link tag(a) for battle", () => {
    render(
      <MemoryRouter>
        <SinglePlayerBattle />
      </MemoryRouter>
    );
    const quickBattleBtn = screen.getByRole("button", {
      name: /quick battle/i,
    });
    const battleLink = screen.getByRole("link");

    expect(quickBattleBtn).toBeInTheDocument();
    expect(battleLink).toBeInTheDocument();
  });
});
