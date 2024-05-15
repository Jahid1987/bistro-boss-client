const Button = ({ name }) => {
  return (
    <button
      className="uppercase text-[#1F2937] text-base md:text-lg"
      style={{
        borderRadius: "8px",
        borderBottom: "3px solid #1F2937",
        padding: "20px 30px",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
