import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav />
      <div className="min-h-[calc(100vh-308px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
