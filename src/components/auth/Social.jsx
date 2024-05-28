import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Social = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleGoogleSignin() {
    try {
      const { user } = await googleSignIn();
      console.log(user);
      const userInfo = {
        name: user?.displayName,
        email: user?.email,
        role: "guest",
      };
      navigate(location.state || "/");
      await axiosPublic.post("/users", userInfo);
      toast.success("You are logged in!");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="flex gap-5 justify-center">
      <span className="border-2 cursor-pointer border-black p-2 rounded-full">
        <FaFacebook />
      </span>
      <span
        onClick={handleGoogleSignin}
        className="border-2 cursor-pointer border-black p-2 rounded-full"
      >
        <FaGoogle />
      </span>
      <span className="border-2 cursor-pointer border-black p-2 rounded-full">
        <FaGithub />
      </span>
    </div>
  );
};

export default Social;
