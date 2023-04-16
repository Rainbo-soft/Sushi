import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Chef from "../Pages/Chef/Chef";
import CheckOut from "../Pages/CheckOut/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/chef",
        element: <Chef />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
    ],
  },
]);

export default router;
