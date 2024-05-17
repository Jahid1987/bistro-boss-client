import { useEffect, useState } from "react";
import Button from "../Button";
import MenuItem from "../MenuItem";
import SectionTitle from "../SectionTitle";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    // const allMenus
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);
  return (
    <section className="px-1 md:p-2">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />
      <div className="grid gap-4 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2">
        {menus
          .filter((menu) => menu.category === "popular")
          .map((menu) => (
            <MenuItem key={menu._id} menu={menu} />
          ))}
      </div>
      <div className="text-center my-4 md:my-6 lg:my-8">
        <Button name={"View Full Menu"} />
      </div>
    </section>
  );
};

export default Menu;
