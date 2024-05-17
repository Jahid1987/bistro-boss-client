import useFetch from "../../hooks/useFetch";
import MenuItem from "../MenuItem";
import Button from "../Button";
import Banner from "../Banner";
import img from "../../assets/menu/pizza-bg.jpg";
const Pizza = () => {
  const menus = useFetch();
  return (
    <section className="my-4 md:my-6 lg:my-8 ">
      <Banner
        image={img}
        title="Pizza"
        text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="px-1 md:p-2 mt-5 grid gap-4 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2">
        {menus
          .filter((menu) => menu.category === "pizza")
          .slice(0, 6)
          .map((menu) => (
            <MenuItem menu={menu} key={menu._id}></MenuItem>
          ))}
      </div>
      <div className="text-center my-4 md:my-6 lg:my-8">
        <Button name={"ORDER YOUR FAVOURITE Pizza"} />
      </div>
    </section>
  );
};

export default Pizza;
