import dessert from "../assets/menu/dessert-bg.jpeg";
const MenuItem = () => {
  return (
    <div className="flex gap-2 items-center">
      <img
        style={{
          borderRadius: `0px 200px 200px 200px`,
          background: `#D9D9D9`,
        }}
        className="mask h-14 lg:h-28 w-14 lg:w-28 object-cover"
        src={dessert}
      />
      <div className="w-full">
        <h3 className="flex justify-between ">
          <span className="text-base md:text-lg">
            ROAST DUCK BREAST --------
          </span>
          <span className="text-[#BB8506] text-base md:text-lg">$14.5</span>
        </h3>
        <p className="text-[#737373]">
          Roasted duck breast (served pink) with gratin potato and a griottine
          cherry sauce
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
