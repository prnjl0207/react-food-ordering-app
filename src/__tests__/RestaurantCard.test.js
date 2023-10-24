import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import MOCK_RESTRO_DATA from "../mocks/restroDetails.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render restaurant card with props data on the page", () => {
  render(
    <BrowserRouter>
      <RestaurantCard restroDetails={MOCK_RESTRO_DATA} />
    </BrowserRouter>
  );

  const restroName = screen.getByText("Punjabi Angithi (Vegorama Group)");

  expect(restroName).toBeInTheDocument();
});

it("should navigate to menu page on restaurant image click", () => {
  render(
    <BrowserRouter>
      <RestaurantCard restroDetails={MOCK_RESTRO_DATA} />
    </BrowserRouter>
  );

  const imageWrapper = screen.getByTestId("imageWrapper");
  fireEvent.click(imageWrapper);

  const restaurantName = screen.getByText("Punjabi Angithi (Vegorama Group)");

  expect(restaurantName).toBeInTheDocument();
});
