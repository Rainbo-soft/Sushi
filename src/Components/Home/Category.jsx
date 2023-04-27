import React from "react";
import { BiSearch } from "react-icons/bi";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "VOORGERECHTEN",
    },
    {
      id: 3,
      name: "CRISPY ROLL",
    },
    {
      id: 4,
      name: "HANDROLL TEMAKI",
    },
    {
      id: 5,
      name: "HOSOMAKI 6 ST.",
    },
  ];
  return (
    <div className="px-5 pt-20">
      <div class="flex items-center justify-center max-w-xl mx-auto border border-gray-300 rounded-full">
        <input
          type="text"
          class="px-4 py-2 w-full focus:outline-none rounded-full"
          placeholder="Search Here"
        />
        <button class="flex items-center justify-center px-4 border-l bg-red-500 py-3 rounded-r-full text-white">
          <BiSearch className="text-xl" />
        </button>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-4xl text-[#050f2c] Kurale">Category</h1>
        <div className="flex items-center justify-center mt-8 gap-3 flex-wrap">
          {categories.map((category) => (
            <p
              key={category.id}
              className="text-sm font-medium px-3 bg-white py-1 rounded-full border border-gray-300 hover:bg-red-500 hover:text-white duration-500 hover:border-red-500 cursor-pointer uppercase"
            >
              {category.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
