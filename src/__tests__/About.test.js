import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../components/About";

it("should load about component on the browser", () => {
  render(<About />);
  const heading = screen.getByText("About page");
  expect(heading).toBeInTheDocument;
});
