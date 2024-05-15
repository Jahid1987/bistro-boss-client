const Card = () => {
  return (
    <div className="card max-w-[424px] bg-base-100 rounded-none">
      <figure className="h-[300px] w-full">
        <img
          className="w-full h-full object-cover"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-[#F3F3F3] text-center items-center">
        <h2 className="card-title">Caeser Salad</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm md:btn-md lg:btn-lg border-b-4 hover:border-b-4 border-b-yellow-500 hover:border-b-yellow-500 hover:btn-neutral text-[#BB8506] hover:text-[#BB8506]">
            Add to CArt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
