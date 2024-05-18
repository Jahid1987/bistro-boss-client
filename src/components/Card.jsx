const Card = ({ menu }) => {
  console.log(menu);
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
          <button className="btn btn-sm md:btn-md lg:btn-lg border-b-4 border-b-yellow-500  hover:btn-neutral text-[#BB8506] hover:text-[#BB8506]">
            Add to CArt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
