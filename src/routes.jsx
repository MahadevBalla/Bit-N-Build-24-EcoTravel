import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pgs/Home";
import Calc from "./pgs/Calc";
import Accomodations from "./pgs/Accomodations";
import Login from "./pgs/Login";
import Register from "./pgs/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "accom",
        element: <Accomodations />,
      },
      {
        path: "calc",
        element: <Calc />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reg",
        element: <Register />,
      },
    ],
  },
]);

export default router;
