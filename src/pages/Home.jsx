import { Helmet } from "react-helmet-async";
import About from "../components/home/About";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import Featured from "../components/home/Featured";
import Menu from "../components/home/Menu";
import Recomended from "../components/home/Recomended";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <About />
      <Menu />
      <section className="bg-black text-white text-center py-4 md:py-8 lg:py-16">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Call Us: +88 0192345678910
        </h3>
      </section>
      <Recomended />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
