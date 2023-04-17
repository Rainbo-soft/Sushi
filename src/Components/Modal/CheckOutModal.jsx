import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Modal = ({ closeCheckOutModal, showCheckOutModal }) => {
  return (
    <div>
      {showCheckOutModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 text-[#050f2c]">
          <div className="bg-[#E5E7EB] shadow-md rounded mb-4 md:min-w-[700px]">
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black opacity-50"></div>
            <div className="w-full h-[500px]">
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
                <ul className="flex justify-around w-full items-center text-xl font-semibold gap-2">
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
                <Link
                  to="/checkout"
                  className="bg-[#22C55E] px-4 py-2 rounded-md text-white text-lg font-medium tracking-wider"
                >
                  Checkout
                </Link>
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
