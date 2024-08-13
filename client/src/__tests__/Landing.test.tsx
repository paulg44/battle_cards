import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Landing from "../components/pages/Landing";

it("displays a link to horror page", () => {
  render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>
  );

  const horrorLink = screen.getByRole("link", { name: /enter the horror/i });

  expect(horrorLink).toBeInTheDocument();
});
