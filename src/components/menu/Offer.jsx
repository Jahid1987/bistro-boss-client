import SectionTitle from "../SectionTitle";
import useFetch from "../../hooks/useFetch";
import MenuItem from "../MenuItem";
import Button from "../Button";

const Offer = () => {
  const menus = useFetch();
  return (
    <section className="my-4 md:my-6 lg:my-8">
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <div className="px-1 md:p-2 grid gap-4 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2">
        {menus
          .filter((menu) => menu.category === "popular")
          .map((menu) => (
            <MenuItem menu={menu} key={menu._id}></MenuItem>
          ))}
      </div>
      <div className="text-center my-4 md:my-6 lg:my-8">
        <Button name={"ORDER YOUR FAVOURITE FOOD"} />
      </div>
    </section>
  );
};

export default Offer;
