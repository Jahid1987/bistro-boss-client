import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useCart from "../hooks/useCart";

const Card = ({ menu }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  // adding cart item
  // eslint-disable-next-line no-unused-vars
  const { _id, ...rest } = menu;
  async function handleAddToCart() {
    if (user && user.email) {
      try {
        const cartItem = {
          email: user.email,
          menuId: _id,
          ...rest,
        };
        await axiosSecure.post("/carts", cartItem);
        await refetch();
        toast.success("Item added to the cart!");
      } catch (err) {
        console.log(err);
      }
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add item to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  }
  return (
    <div className="card max-w-[424px] bg-base-100 rounded-none">
      <figure className="h-[300px] w-full relative">
        <img
          className="w-full h-full object-cover"
          src={menu.image}
          alt="Shoes"
        />
        <p className="absolute top-5 right-5 bg-black py px-2 rounded-lg text-white">
          ${menu.price}
        </p>
      </figure>
      <div className="card-body bg-[#F3F3F3] text-center items-center">
        <h2 className="card-title">{menu.name}</h2>
        <p className="text-gray-500">{menu.recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn btn-sm md:btn-md lg:btn-lg border-b-4 border-b-yellow-500  hover:btn-neutral text-[#BB8506] hover:text-[#BB8506]"
          >
            Add to CArt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
