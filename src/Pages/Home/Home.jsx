import React, { useState } from "react";
import Banner from "../../Components/Home/Banner";
import Category from "../../Components/Home/Category";
import CategoryItems from "../../Components/Home/CategoryItems";
import Modal from "../../Components/Modal/Modal";
import SushiFlavor from "../../Components/Home/SushiFlavor";
import Deliver from "../../Components/Home/Deliver";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CheckOutModal from "../../Components/Modal/CheckOutModal";

const Home = () => {
  const [GetItems, setGetItems] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showCheckOutModal, setShowCheckOutModal] = useState(false);
  // console.log(GetItems);

  const closeModal = () => {
    setShowModal(false);
  };
  const closeCheckOutModal = () => {
    setShowCheckOutModal(false);
  };
  return (
    <div>
      <Banner />
      <Category />
      <CategoryItems setGetItems={setGetItems} setShowModal={setShowModal} />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        closeModal={closeModal}
        GetItems={GetItems}
      />
      <CheckOutModal
        showCheckOutModal={showCheckOutModal}
        setShowCheckOutModal={setShowCheckOutModal}
        closeCheckOutModal={closeCheckOutModal}
      />
      <SushiFlavor />
      <Deliver />{" "}
      <div
        className="fixed bottom-12 right-12 p-4 bg-red-500 text-white text-3xl rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        onClick={() => {
          setShowCheckOutModal(true);
        }}
      >
        <p className="absolute -top-3 -right-3 bg-slate-400/80 px-2 rounded-full">
          0
        </p>
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Home;
