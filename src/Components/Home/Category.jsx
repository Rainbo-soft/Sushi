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
      <div className="flex items-center bg-white rounded-lg overflow-hidden mx-auto py-1 justify-between max-w-xl shadow-lg border border-gray-300">
        <input
          className="text-lg text-[#ed1b2e] font-semibold flex-grow outline-none px-2"
          type="text"
          placeholder="Search Here"
        />
        <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
          <button className="bg-red-500 text-white text-base rounded-lg px-4 py-2 font-thin">
            <BiSearch className="text-xl" />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-5xl text-[#050f2c] font-bold Kurale">
          Category
        </h1>
        <div className="flex items-center justify-center mt-8 gap-3 flex-wrap">
          {categories.map((category) => (
            <p
              key={category.id}
              className="text-lg font-semibold px-3 bg-white py-1 rounded-full border border-gray-300 hover:bg-red-500 hover:text-white duration-500 hover:border-red-500 cursor-pointer uppercase"
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
