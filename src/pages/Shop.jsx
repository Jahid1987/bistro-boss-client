import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import img from "../assets/shop/banner2.jpg";
const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <Banner
        image={img}
        title={"OUR SHOP"}
        text={"Would you like to try a dish?"}
      />
    </div>
  );
};

export default Shop;
