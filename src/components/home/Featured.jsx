import featured from "../../assets/home/featured.jpg";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
const Featured = () => {
  return (
    <section
      className="bg-fixed my-4 md:my-6 lg:my-8 h-[800px] py-8 md:py-16 lg:py-24"
      style={{
        background: `linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url(${featured}) lightgray 50% / cover no-repeat`,
      }}
    >
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
        color={true}
      />
      <div className="flex gap-3 md:gap-5 lg:gap-10 flex-col md:flex-row items-center justify-center w-11/12 md:w-3/4 mx-auto pt-4">
        <figure>
          <img src={featured} alt="" />
        </figure>
        <div className="text-white space-y-2">
          <p>March 20, 2023</p>
          <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <Button name={"Read more"} color={true} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
