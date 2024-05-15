const SectionTitle = ({ subHeading, heading, color }) => {
  console.log(color);
  return (
    <div className="flex flex-col items-center gap-1 md:gap-2 text-center my-4 md:my-6 lg:my-8">
      <h3 className="text-[#D99904] italic text-base md:text-lg lg:text-xl">
        {subHeading}
      </h3>
      <div
        className="w-80 md:w-96"
        style={{
          background: `var(--Dark-06, #E8E8E8)`,

          height: "2px",
        }}
      ></div>
      <h1
        className={`text-2xl md:text-3xl lg:text-4xl my-1 md:my-2 ${
          color ? "text-white" : "text-slate-600"
        } `}
      >
        {heading}
      </h1>
      <div
        className="w-80 md:w-96"
        style={{
          background: `var(--Dark-06, #E8E8E8)`,

          height: "2px",
        }}
      ></div>
    </div>
  );
};

export default SectionTitle;
