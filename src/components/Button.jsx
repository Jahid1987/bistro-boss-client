const Button = ({ name, color }) => {
  return (
    <button
      className={`${
        color
          ? "text-white bg-transparent border-0 border-b-white hover:bg-black"
          : "text-slate-600 border-b-black"
      } btn btn-sm md:btn-md lg:btn-lg border-b-4 hover:border-b-yellow-500`}
    >
      {name}
    </button>
  );
};

export default Button;
