import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const Modal = ({ closeCheckOutModal, showCheckOutModal }) => {
  return (
    <div>
      {showCheckOutModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 text-[#050f2c]">
          <div className="bg-[#E5E7EB] shadow-md rounded mb-4 min-w-[700px]">
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black opacity-50"></div>
            <div className="w-full h-[500px]">
              {/* <button
                className="absolute -top-2 -right-2 text-xl bg-red-500 w-7 h-7 text-white rounded-full z-10 flex items-center justify-center"
                onClick={closeCheckOutModal}
              >
                <RxCross1 />
              </button>
              <div className="flex items-center justify-between relative px-8 pt-6 pb-8 mb-4 gap-10 w-full">
                <div>
                  <div className="flex items-center justify-start border-b w-full">
                    <AiOutlineShoppingCart className="text-3xl text-red-500 mr-1" />
                    <h4 className="text-2xl font-semibold text-red-500">
                      Cart
                    </h4>
                  </div>
                  <h1 className="my-4 text-xl font-semibold">
                    Title <br /> $Price
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
                      <label htmlFor="Wasabi">Wasabi</label>
                      <br />
                      <input
                        type="radio"
                        id="Gember"
                        name="Sauce"
                        value="Gember"
                      />
                      <label htmlFor="Gember">Gember</label>
                      <br />
                      <input
                        type="radio"
                        id="Soy sauce sweet"
                        name="Sauce"
                        value="Soy sauce sweet"
                      />
                      <label htmlFor="Soy sauce sweet">Soy sauce sweet</label>
                      <br />
                      <input
                        type="radio"
                        id="Soy sauce salt"
                        name="Sauce"
                        value="Soy sauce salt"
                      />
                      <label htmlFor="Soy sauce salt">Soy sauce salt</label>
                    </div>
                  </div>
                  <button
                    className="text-sm bg-red-500 px-3 py-1 text-white rounded-md"
                    onClick={closeCheckOutModal}
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
              </div> */}
              <div className="flex items-center justify-between w-full px-5 py-3 border-b border-red-800">
                <div className="flex items-center justify-center border-b">
                  <AiOutlineShoppingCart className="text-3xl text-red-500 mr-1" />
                  <h4 className="text-2xl font-semibold text-red-500">Cart</h4>
                </div>
                <button
                  className="text-xl bg-red-500 w-7 h-7 text-white rounded-full z-10 flex items-center justify-center"
                  onClick={closeCheckOutModal}
                >
                  <RxCross1 />
                </button>
              </div>
              <div className="w-full py-2 px-5">
                <ul className="flex justify-around w-full items-center text-xl font-semibold">
                  <li className="max-w-2xl">Name</li>
                  <li className="max-w-2xl">Quantity</li>
                  <li className="max-w-2xl">Price</li>
                  <li className="max-w-2xl">Total</li>
                  <li className="max-w-2xl">Action</li>
                </ul>
                <ul className="flex justify-around w-full items-center text-xl py-2 font-semibold shadow-md mt-5 bg-white rounded">
                  <li>Wakame</li>
                  <li>1</li>
                  <li>5.00</li>
                  <li>5.00</li>
                  <li className="p-2 bg-red-500 rounded-full text-white">
                    <BsFillTrashFill />
                  </li>
                </ul>
                <ul className="flex justify-around w-full items-center text-xl py-2 font-semibold shadow-md mt-3 bg-white rounded">
                  <li>Edamame</li>
                  <li>2</li>
                  <li>5.00</li>
                  <li>10.00</li>
                  <li className="p-2 bg-red-500 rounded-full text-white">
                    <BsFillTrashFill />
                  </li>
                </ul>
                <ul className="flex justify-around w-full items-center text-xl py-2 font-semibold shadow-md mt-3 bg-white rounded">
                  <li>Total</li>
                  <li>:</li>
                  <li>$15:00</li>
                </ul>
              </div>
              <div className="flex items-center justify-end mr-5 mt-5">
                <button className="bg-[#22C55E] px-4 py-2 rounded-md text-white text-lg font-medium tracking-wider">
                  Checkout
                </button>
                <button className="bg-red-500 ml-2 px-4 py-2 rounded-md text-white text-lg font-medium tracking-wider">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
