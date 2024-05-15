import Card from "../Card";
import SectionTitle from "../SectionTitle";

const Recomended = () => {
  return (
    <section className="px-1 md:px-2 lg:px-0">
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      />
      <div className="grid gap-2 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Recomended;
