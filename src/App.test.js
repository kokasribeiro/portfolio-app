import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio banner", () => {
  render(<App />);
  expect(screen.getByText(/Web Developer · Geneva/i)).toBeInTheDocument();
  expect(screen.getByText(/Nelson Ribeiro/i)).toBeInTheDocument();
});
