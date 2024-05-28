import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import confirmDelete from "../../utils/confirmDelete";
import deleteMessage from "../../utils/deleteMessage";
import { toast } from "react-toastify";

const Users = () => {
  const axioSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axioSecure.get("/users");
      return data;
    },
  });

  // handle delete
  async function handleDelete(id) {
    try {
      const result = await confirmDelete();
      if (!result.isConfirmed) return; // if user selects yes delete then result will be true
      await axioSecure.delete(`/users/${id}`);
      await refetch();
      deleteMessage();
    } catch (err) {
      console.log(err);
    }
  }

  // handle edit role
  async function handleRole(user) {
    try {
      await axioSecure.patch(`/users/${user._id}`);
      await refetch();
      toast.success(`${user.name} ia an admin now.`);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <SectionTitle
        subHeading={"---How many??---"}
        heading={"MANAGE ALL USERS"}
      />
      <div className="bg-white mx-10 shadow-lg p-5">
        <div className=" uppercase">
          <p className="text-3xl font-semibold">Total users: {users.length}</p>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table ">
            {/* head */}
            <thead className="bg-[#D1A054]">
              <tr className="rounded-xl uppercase">
                <th></th>
                <th>name</th>
                <th>email</th>
                <th>role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleRole(user)}
                        className="btn btn-success btn-sm"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <th className=" space-x-2">
                    <button
                      onClick={() => handleDelete(user._id)}
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

export default Users;
