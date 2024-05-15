import Button from "../Button";
import MenuItem from "../MenuItem";
import SectionTitle from "../SectionTitle";

const Menu = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />
      <div className="grid gap-2 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
      <div className="text-center my-4 md:my-6 lg:my-8">
        <Button name={"View Full Menu"} />
      </div>
    </section>
  );
};

export default Menu;
