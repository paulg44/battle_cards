import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HorrorHome from "../components/pages/HorrorHome";

describe("link tests", () => {
  it("three links are present on page", () => {
    render(
      <MemoryRouter>
        <HorrorHome />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(3);
  });

  it("shows a battle, campaign and home link", () => {
    render(
      <MemoryRouter>
        <HorrorHome />
      </MemoryRouter>
    );

    const battleLink = screen.getByRole("link", { name: /battle/i });
    const campiagnLink = screen.getByRole("link", { name: /campaign/i });
    const homeLink = screen.getByRole("link", { name: /home/i });

    expect(battleLink).toBeInTheDocument();
    expect(campiagnLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
});
