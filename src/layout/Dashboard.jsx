import {
  FaBars,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex gap-3 h-full">
      <div className="w-[280px] bg-[#D1A054] p-5 min-h-screen">
        <h3 className="uppercase text-[#151515] font-bold text-xl">
          Bistro Boss
        </h3>
        <h4 className="font-light text-base uppercase">Restaurant</h4>
        <ul className="menu pl-0 mt-5 uppercase space-y-2">
          {isAdmin ? (
            <>
              {/* admin nav links  */}
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additems">
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <FaBars />
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook />
                  manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers />
                  All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {/* user nav link  */}
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaWallet />
                  payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineRateReview />
                  add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <TbBrandBooking />
                  my booking
                </NavLink>
              </li>
            </>
          )}

          {/* common nav link  */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">
              <FaBagShopping />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
