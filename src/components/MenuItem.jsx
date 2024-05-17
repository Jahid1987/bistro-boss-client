const MenuItem = ({ menu }) => {
  return (
    <div className="flex gap-2 items-center">
      <img
        style={{
          borderRadius: `0px 200px 200px 200px`,
          background: `#D9D9D9`,
        }}
        className="mask h-14 lg:h-28 w-16 lg:w-32 object-cover"
        src={menu.image}
      />
      <div className="w-full">
        <h3 className="flex justify-between ">
          <span className="uppercase text-base md:text-lg text-[#151515]">
            {menu.name} --------
          </span>
          <span className="text-[#BB8506] text-base md:text-lg">$14.5</span>
        </h3>
        <p className="text-[#737373] text-sm">{menu.recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
