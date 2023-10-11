import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Restaurant from "./components/Restaurant";

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
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
