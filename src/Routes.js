import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Restaurant from "./components/Restaurant";
import RestaurantMenu from "./components/RestauantMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurant />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
