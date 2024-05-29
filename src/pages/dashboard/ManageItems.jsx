import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import confirmDelete from "../../utils/confirmDelete";
import deleteMessage from "../../utils/deleteMessage";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const axioSecure = useAxiosSecure();

  // fetching all items
  const { data: menus = [], refetch } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const { data } = await axioSecure.get("/menus");
      return data;
    },
  });
  // handling delete menu item
  async function handleDelete(id) {
    try {
      const result = await confirmDelete();
      if (!result.isConfirmed) return;
      await axioSecure.delete(`/menus/${id}`);
      await refetch();
      deleteMessage();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <SectionTitle
        subHeading={"---Hurry Up!---"}
        heading={"MANAGE ALL ITEMS"}
      />
      <div className="bg-white mx-10 shadow-lg p-5">
        <div className="flex justify-between uppercase">
          <p className="text-3xl font-semibold">Total orders: {menus.length}</p>
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
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {menus?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="w-20" src={item.image} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateitem/${item._id}`}>
                      <button className="btn btn-error border-none btn-sm bg-[#D1A054] text-white">
                        <FaEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error btn-sm text-white border-none"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
