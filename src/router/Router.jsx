import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
