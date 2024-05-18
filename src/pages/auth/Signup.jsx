import authBg from "../../assets/others/authentication.png";
import authImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";

import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const { registerUserWithEmailAndPassword, updateUser } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;

    console.log(name, email, pass);
    try {
      await registerUserWithEmailAndPassword(email, pass);
      await updateUser(name);
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
      <div className=" hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 card shrink-0 w-full max-w-sm">
          <h1 className="text-xl md:text-2xl lg:text-4xl text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
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
                required
              />
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
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-[#D1A054] text-white">Sign In</button>
            </div>
            <div className="mt-3 text-center space-y-3">
              <p className="text-[#D1A054] text-base lg:text-lg font-medium">
                New here? Create a New Account
              </p>
              <p className="text-base lg:text-lg font-medium">
                Or sign in with
              </p>
              <div className="flex gap-5 justify-center">
                <span className="border-2 cursor-pointer border-black p-2 rounded-full">
                  <FaFacebookF />
                </span>
                <span className="border-2 cursor-pointer border-black p-2 rounded-full">
                  <FaGoogle />
                </span>
                <span className="border-2 cursor-pointer border-black p-2 rounded-full">
                  <FaGithub />
                </span>
              </div>
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
