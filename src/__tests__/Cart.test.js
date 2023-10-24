import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import MOCK_RESTAURANT_MENU from "../mocks/restroMenu.json";
import Header from "../components/Header";
import Cart from "../components/Cart";
import appStore from "../Redux/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RESTAURANT_MENU);
    },
  });
});

it("should load restaurant menu component with recommended accordion", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const recommended = screen.getByText("Recommended (11)");
  fireEvent.click(recommended);

  const items = screen.getAllByTestId("items");

  expect(items.length).toBe(11);
});

it("should add items to cart on click of add button and incrment cart items number ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);

  let cartItem = screen.getByText(1);

  expect(cartItem).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  cartItem = screen.getByText(2);

  expect(cartItem).toBeInTheDocument();
});

it("should remove items from cart on click of remove button and decrement cart items number ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const addBtn = screen.getAllByRole("button", { name: "Remove -" });

  fireEvent.click(addBtn[0]);

  let cartItem = screen.getByText(1);

  expect(cartItem).toBeInTheDocument();
});

it("should empty items from cart on click of last remove button and decrement cart items number to 0 and show empty cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const addBtn = screen.getAllByRole("button", { name: "Remove -" });

  fireEvent.click(addBtn[0]);

  let cartItem = screen.getByText(0);

  expect(cartItem).toBeInTheDocument();

  const emptyCartText = screen.getByText("Your cart is empty");
  expect(emptyCartText).toBeInTheDocument();
});
