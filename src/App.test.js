import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio banner", () => {
  render(<App />);
  expect(screen.getByText(/Welcome to my Portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/Nelson Ribeiro/i)).toBeInTheDocument();
});
