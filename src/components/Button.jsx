const Button = ({ name, color }) => {
  return (
    <button
      className={`${
        color ? "text-white" : "text-slate-600"
      }uppercase text-base md:text-lg`}
      style={{
        borderRadius: "8px",
        borderBottom: `3px solid ${color ? "white" : "#1F2937"}`,
        padding: "20px 30px",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
