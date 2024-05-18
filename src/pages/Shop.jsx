import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import img from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useFetch from "../hooks/useFetch";
import TabContents from "../components/shop/TabContents";
import { useState } from "react";
import { useParams } from "react-router-dom";
const Shop = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const items = useFetch("menus");
  const salads = items.filter((item) => item.category === "salad");
  const pizzas = items.filter((item) => item.category === "pizza");
  const soups = items.filter((item) => item.category === "soup");
  const desserts = items.filter((item) => item.category === "dessert");
  const drinks = items.filter((item) => item.category === "drinks");

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
      <div className="my-4 md:my-6 lg:my-8">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <TabContents items={salads}></TabContents>
          </TabPanel>
          <TabPanel>
            <TabContents items={pizzas}></TabContents>
          </TabPanel>
          <TabPanel>
            <TabContents items={soups}></TabContents>
          </TabPanel>
          <TabPanel>
            <TabContents items={desserts}></TabContents>
          </TabPanel>
          <TabPanel>
            <TabContents items={drinks}></TabContents>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
