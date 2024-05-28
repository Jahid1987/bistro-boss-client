import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

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
    </div>
  );
};

export default Main;
