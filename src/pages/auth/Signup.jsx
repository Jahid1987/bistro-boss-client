import authBg from "../../assets/others/authentication.png";
import authImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Social from "../../components/auth/Social";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const { registerUserWithEmailAndPassword, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  async function handleRegister(data) {
    console.log(data);
    try {
      await registerUserWithEmailAndPassword(data.email, data.password);
      await updateUser(data.name);
      toast.success("You are registered!");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        background: `url(${authBg}) lightgray 50% / cover no-repeat`,
      }}
      className="hero min-h-screen"
    >
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>
      <div className=" hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 card shrink-0 w-full max-w-sm">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-center">
            Register
          </h1>
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
              {errors.email && (
                <span className="text-red-500">
                  {errors.email?.type === "required"
                    ? "Password is required"
                    : "Email must be valid"}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <span className="text-red-500">
                  {errors.password?.type === "required"
                    ? "Password is required"
                    : "Your password must be 6 digits"}
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#D1A054] text-white">Register</button>
            </div>
            <div className="mt-3 text-center space-y-3">
              <p className="text-[#D1A054] text-base lg:text-lg font-medium">
                Have Account? Log in{" "}
                <Link className="border-b-2 border-b-[#D1A054]" to="/login">
                  here
                </Link>
              </p>
              <p className="text-base lg:text-lg font-medium">
                Or sign in with
              </p>
              <Social />
            </div>
          </form>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
