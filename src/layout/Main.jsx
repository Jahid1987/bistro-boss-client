import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="max-w-7xl mx-auto ">
      {noHeaderFooter || <Nav />}
      <div className="min-h-[calc(100vh-240px)]">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
      <ToastContainer />
    </div>
  );
};

export default Main;
