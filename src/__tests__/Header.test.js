import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../Redux/appStore";
import Header from "../components/Header";
import "@testing-library/jest-dom";

it("should render header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});

it("should render logo in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logo = screen.getByTestId("logo");
  expect(logo).toBeInTheDocument();
});

it("should load header component on click on logo", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logo = screen.getByTestId("logo");

  fireEvent.click(logo);

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});

it("should render city name in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cityName = screen.getByTestId("cityName");
  expect(cityName).toBeInTheDocument();
});

it("should render 0 items in cart in header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(0);
  expect(cartItems).toBeInTheDocument();
});
