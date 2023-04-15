import React, { useState } from "react";
import Banner from "../../Components/Home/Banner";
import Category from "../../Components/Home/Category";
import CategoryItems from "../../Components/Home/CategoryItems";
import Modal from "../../Components/Modal/Modal";
import SushiFlavor from "../../Components/Home/SushiFlavor";
import Deliver from "../../Components/Home/Deliver";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [GetItems, setGetItems] = useState({});
  // console.log(GetItems);

  const closeModal = () => {
    setShowModal(false);
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
      <SushiFlavor />
      <Deliver />
    </div>
  );
};

export default Home;
