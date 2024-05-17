import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Offer from "../components/menu/Offer";
import Dessert from "../components/menu/Dessert";
import img from "../assets/menu/banner3.jpg";
import Pizza from "../components/menu/Pizza";
import Salad from "../components/menu/Salad";
import Soup from "../components/menu/Soup";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Banner
        image={img}
        title={"OUR MENU"}
        text={"Would you like to try a dish?"}
      />
      <Offer />
      <Dessert />
      <Pizza />
      <Salad />
      <Soup />
    </div>
  );
};

export default Menu;
