import { useEffect, useRef, useState } from "react";
import authBg from "../../assets/others/authentication.png";
import authImg from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Social from "../../components/auth/Social";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { logInUser } = useAuth();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handling captcha related things
  const captchaRef = useRef("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  function handleCaptchaValidation() {
    if (validateCaptcha(captchaRef.current.value)) {
      setDisabled(false);
      captchaRef.current.value = "";
    } else {
      setDisabled(true);
    }
  }
  // handle login
  async function handleLogin(data) {
    try {
      await logInUser(data.email, data.password);
      toast.success("You are logged in!");
      navigate(location.state || "/");
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
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className=" hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 card shrink-0 w-full max-w-sm">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-center">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
            <div className="form-control">
              <LoadCanvasTemplate />
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter above text"
                  ref={captchaRef}
                />
                <span
                  onClick={handleCaptchaValidation}
                  className="badge badge-info"
                >
                  Match
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                className="btn bg-[#D1A054] text-white"
              >
                Sign In
              </button>
            </div>
            <div className="mt-3 text-center space-y-3">
              <p className="text-[#D1A054] text-base lg:text-lg font-medium">
                New here? Create a New Account{" "}
                <Link className="border-b-2 border-b-[#D1A054]" to="/signup">
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

export default Login;
