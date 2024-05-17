import Card from "../Card";
import SectionTitle from "../SectionTitle";
import useFetch from "../../hooks/useFetch";

const Recomended = () => {
  const menus = useFetch();

  return (
    <section className="px-1 md:px-2 lg:px-0">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      />
      <div className="grid gap-2 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {menus
          .filter((menu) => menu.category === "salad")
          .slice(0, 3)
          .map((menu) => (
            <Card key={menu._id} menu={menu}></Card>
          ))}
      </div>
    </section>
  );
};

export default Recomended;
