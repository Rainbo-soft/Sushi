import React from "react";
import image from "../../assets/sushi.jpg";

const SushiFlavor = () => {
  return (
    <div className="max-w-7xl flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-3xl lg:text-left">
        <h1 className="text-3xl md:text-3xl lg:text-4xl text-[#050f2c] mb-3 Kurale">
          Delicious Sushi that Adds Flavor to Your Diet
        </h1>
        <h4 className="mb-10 text-lg font-semibold">Be Healthy Be happy</h4>
        <p className="text-justify md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque
          officia eos blanditiis itaque molestias accusamus, eum tempore quas
          perspiciatis. In, deleniti ut quo tempore aliquid sint minima sed
          consectetur fuga error repellendus odit ratione non nemo animi
          assumenda recusandae voluptatum debitis id ullam. Dicta iste aut
          similique excepturi illo!
        </p>
        <br />
        <p className="text-justify md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque
          officia eos blanditiis itaque molestias accusamus, eum tempore quas
          perspiciatis. In, deleniti ut quo tempore aliquid sint minima sed
          consectetur fuga error repellendus odit ratione non nemo animi
          assumenda recusandae voluptatum debitis id ullam. Dicta iste aut
          similique excepturi illo!
        </p>
        <br />
        <p className="text-justify md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque
          officia eos blanditiis itaque molestias accusamus, eum tempore quas
          perspiciatis. In, deleniti ut quo tempore aliquid sint minima sed
          consectetur fuga error repellendus odit ratione non nemo animi
          assumenda recusandae voluptatum debitis id ullam. Dicta iste aut
          similique excepturi illo!
        </p>
        <div className="mt-4">
          <button className="uppercase text-sm md:text-base px-3 text-white py-2 font-semibold tracking-wider bg-red-500 rounded-md">
            Read More
          </button>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-start p-6 mt-8 mr-14 lg:mt-0">
        <img src={image} alt="" className="object-cover max-h-[550px]" />
      </div>
    </div>
  );
};

export default SushiFlavor;
