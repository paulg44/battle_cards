import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Landing from "../components/pages/Landing";

it("displays two links to game modes", () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );

  const links = screen.getAllByRole("link");

  expect(links).toHaveLength(2);
});
