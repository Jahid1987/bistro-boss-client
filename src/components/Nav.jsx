import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Nav = () => {
  const { user, logOutUser } = useAuth();
  async function handleLogOut() {
    try {
      await logOutUser();
    } catch (err) {
      console.log(err);
    }
  }
  console.log(user);
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop/salad">Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar max-w-7xl fixed z-10 opacity-80 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <p
            onClick={handleLogOut}
            className="text-white border-b-2 border-b-amber-500"
          >
            Log Out
          </p>
        ) : (
          <div className="space-x-2">
            <Link
              to="/login"
              className="text-white border-b-2 border-b-amber-500"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white border-b-2 border-b-amber-500"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
