import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="flex gap-5 justify-center">
      <span className="border-2 cursor-pointer border-black p-2 rounded-full">
        <FaFacebook />
      </span>
      <span className="border-2 cursor-pointer border-black p-2 rounded-full">
        <FaGoogle />
      </span>
      <span className="border-2 cursor-pointer border-black p-2 rounded-full">
        <FaGithub />
      </span>
    </div>
  );
};

export default Social;
