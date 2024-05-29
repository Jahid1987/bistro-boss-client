import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const UpdateItem = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: updateItem = {} } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/menus/${id}`);

      return data;
    },
  });

  async function handleUpdateItem(data) {
    try {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseInt(data.price),
        recipe: data.recipe,
      };
      await axiosSecure.patch(`/menus/${id}`, menuItem);
      toast.success("Item updated");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <SectionTitle
        subHeading={"---What's changed?---"}
        heading={"Update ITEM"}
      />
      <div className=" mx-10 bg-base-200 p-5">
        <div className="card shrink-0 w-full ">
          <form onSubmit={handleSubmit(handleUpdateItem)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe name * </span>
                <span className="text-red-500">
                  {errors.name && <span>This field is required</span>}
                </span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Recipe name"
                className="input input-bordered"
                defaultValue={updateItem.name}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category *</span>
                  <span className="text-red-500">
                    {errors.category && <span>This field is required</span>}
                  </span>
                </label>
                <select
                  {...register("category", { required: true })}
                  defaultValue={updateItem.category}
                  className="select select-bordered"
                >
                  <option disabled value={updateItem.category}>
                    Select Category
                  </option>
                  <option>Salad</option>
                  <option>Pizza</option>
                  <option>Soup</option>
                  <option>Dessert</option>
                  <option>Drinks</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price *</span>
                  <span className="text-red-500">
                    {errors.price && <span>This field is required</span>}
                  </span>
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  defaultValue={updateItem.price}
                />
              </div>
            </div>
            <label className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
                <span className="text-red-500">
                  {errors.recipe && <span>This field is required</span>}
                </span>
              </label>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-40"
                placeholder="Recipe Details"
                defaultValue={updateItem.recipe}
              ></textarea>
            </label>
            <button
              style={{
                color: "white",
                background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,
              }}
              className="flex items-center justify-center py-2 px-4 w-fit"
            >
              Update Item <FaUtensils className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
