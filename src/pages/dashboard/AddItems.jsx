import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const image_hosting_key = import.meta.env.VITE_image_api_key;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleAddItem(data) {
    // image upload to imagebb and get url
    const imageFile = { image: data.image[0] };
    try {
      const res = await axiosPublic.post(image_upload_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseInt(data.price),
          image: res.data.data.display_url,
          recipe: data.recipe,
        };
        console.log(menuItem);
        const result = await axiosSecure.post("/menus", menuItem);
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <SectionTitle subHeading={"---What's new?---"} heading={"ADD AN ITEM"} />
      <div className=" mx-10 bg-base-200 p-5">
        <div className="card shrink-0 w-full ">
          <form onSubmit={handleSubmit(handleAddItem)} className="card-body">
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
                  defaultValue="default"
                  className="select select-bordered"
                >
                  <option disabled value="default">
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
              ></textarea>
            </label>
            <label className="form-control">
              <label className="label">
                <span className="label-text">Image*</span>
                <span className="text-red-500">
                  {errors.image && <span>This field is required</span>}
                </span>
              </label>
              <input
                className="my-2"
                type="file"
                {...register("image", { required: true })}
              ></input>
            </label>
            <button
              style={{
                color: "white",
                background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,
              }}
              className="flex items-center justify-center py-2 px-4 w-fit"
            >
              Add Item <FaUtensils className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
