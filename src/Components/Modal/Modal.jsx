import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Modal = ({ closeModal, showModal, GetItems }) => {
  return (
    <div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 text-[#050f2c]">
          <div className="bg-white shadow-md rounded mb-4 md:min-w-[700px]">
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black opacity-50"></div>
            <div className="flex flex-col items-center justify-center relative w-full">
              <button
                className="absolute -top-2 -right-2 text-xl bg-red-500 w-7 h-7 text-white rounded-full z-10 flex items-center justify-center"
                onClick={closeModal}
              >
                <RxCross1 />
              </button>
              <div className="md:flex items-center justify-between relative px-8 pt-6 pb-8 mb-4 gap-10 max-h-[450px] overflow-auto w-full">
                <div>
                  <div className="flex items-center justify-center">
                    <AiOutlineShoppingCart className="text-2xl text-red-500 mr-1" />
                    <h4 className="text-xl font-semibold text-red-500">
                      Add To Cart
                    </h4>
                  </div>
                  <h1 className="my-4 text-xl font-semibold">
                    {GetItems.name} <br /> ${GetItems.price}
                  </h1>
                  <div className="my-4">
                    <h2 className="text-2xl font-semibold">Sauce Choice</h2>
                    <div className="text-lg space-y-1 mt-2">
                      <input
                        type="radio"
                        id="Wasabi"
                        name="Sauce"
                        value="Wasabi"
                      />
                      <label className="ml-1" htmlFor="Wasabi">
                        Wasabi
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="Gember"
                        name="Sauce"
                        value="Gember"
                      />
                      <label className="ml-1" htmlFor="Gember">
                        Gember
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="Soy sauce sweet"
                        name="Sauce"
                        value="Soy sauce sweet"
                      />
                      <label className="ml-1" htmlFor="Soy sauce sweet">
                        Soy sauce sweet
                      </label>
                      <br />
                      <input
                        type="radio"
                        id="Soy sauce salt"
                        name="Sauce"
                        value="Soy sauce salt"
                      />
                      <label className="ml-1" htmlFor="Soy sauce salt">
                        Soy sauce salt
                      </label>
                    </div>
                  </div>
                  <button
                    className="text-sm bg-red-500 px-3 py-1 text-white rounded-md hidden md:block"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-col justify-between items-start">
                  <p className="text-xl font-medium mb-2">
                    Leave a note (Optional)
                  </p>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="7"
                    className="k focus:outline-none rounded-lg p-4 inner-Shadow"
                  ></textarea>
                  <button className="text-lg bg-red-500 px-3 py-1 text-white rounded-md mt-4">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
