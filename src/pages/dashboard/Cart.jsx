import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import confirmDelete from "../../utils/confirmDelete";
import deleteMessage from "../../utils/deleteMessage";

const Cart = () => {
  const axioSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  async function handleDelete(id) {
    try {
      const result = await confirmDelete();
      if (!result.isConfirmed) return;
      await axioSecure.delete(`/carts/${id}`);
      await refetch();
      deleteMessage();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <SectionTitle subHeading={"---My Cart---"} heading={"WANNA ADD MORE?"} />
      <div className="bg-white mx-10 shadow-lg p-5">
        <div className="flex justify-between uppercase">
          <p className="text-3xl font-semibold">Total orders: {cart.length}</p>
          <p className="text-3xl font-semibold">total price: ${totalPrice}</p>
          {cart.length > 0 ? (
            <Link to="/dashboard/payment">
              <button className="btn btn-sm bg-[#D1A054] text-white">
                Pay
              </button>
            </Link>
          ) : (
            <button disabled className="btn btn-sm bg-[#D1A054] text-white">
              Pay
            </button>
          )}
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table ">
            {/* head */}
            <thead className="bg-[#D1A054]">
              <tr className="rounded-xl uppercase">
                <th></th>
                <th>Item image</th>
                <th>item name</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="w-20" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error btn-sm"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
