import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Contact from "../pages/Contact";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/Cart";
import PrivateRoutes from "./PrivateRouter";
import Users from "../pages/dashboard/Users";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/dashboard/AddItems";
import ManageItems from "../pages/dashboard/ManageItems";
import UpdateItem from "../pages/dashboard/UpdateItem";
import Payment from "../pages/dashboard/Payment";

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
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "userhome",
        element: <h3>This is User hojme</h3>,
      },
      {
        path: "reservation",
        element: <h3>This is reservation</h3>,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "review",
        element: <h3>This is review</h3>,
      },
      {
        path: "booking",
        element: <h3>This is booking</h3>,
      },
      {
        path: "adminhome",
        element: <h3>This is adminhome</h3>,
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manageitems",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "updateitem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
      },
      {
        path: "bookings",
        element: <h3>This is bookings</h3>,
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
