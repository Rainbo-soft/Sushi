import React, { useState } from "react";
import Modal from "../Modal/Modal";

const CategoryItems = ({ setShowModal, setGetItems }) => {
  const Fruits = [
    {
      category: "VOORGERECHTEN",
      Items: [
        {
          name: "Wakame",
          price: "5.00",
          imageURL:
            "https://www.grocery.coop/sites/default/files/wp-content/uploads/2013/03/Wakame_Sesame_Salad_with_Pickled_Onion_Garnish_0.jpg",
        },
        {
          name: " Edamame",
          price: "4.00",
          imageURL:
            "https://www.inspiredtaste.net/wp-content/uploads/2020/03/Spicy-Edamame-Recipe-1200-1200x800.jpg",
        },
        {
          name: "Kimchi",
          price: "5.50",
          imageURL:
            "https://www.chilipeppermadness.com/wp-content/uploads/2021/12/Kimchi-SQ.jpg",
        },
        {
          name: "WakameKoolsla",
          price: "3.00",
          imageURL:
            "https://www.tasteatlas.com/images/dishes/cc12f50bd4744ceb8e874cc78bf76363.jpg",
        },
      ],
    },
    {
      category: "VOORGERECHTEN",
      Items: [
        {
          name: "Deep Fried Dragon Eyes",
          price: "13.00",
          imageURL:
            "https://ricebowldeluxe.com/wp-content/uploads/2020/07/RBD-App-Deluxe-Dragon-Eye-Roll.jpg",
        },
        {
          name: " Spicy Volcano Roll",
          price: "1.50",
          imageURL:
            "https://ichisushi.com/wp-content/uploads/2022/05/Best-Volcano-Roll-Sushi-Recipes.jpg",
        },
        {
          name: "Crispy Zalm",
          price: "2.00",
          imageURL:
            "https://goodfoodmix.nl/wp-content/uploads/2021/02/crispy-zalm.jpg",
        },
        {
          name: "Crispy Scampi",
          price: "1.00",
          imageURL:
            "https://recipes.net/wp-content/uploads/2022/05/Crispy-Baked-Shrimp-Scampi-Recipe-1024x577.jpg",
        },
      ],
    },
    {
      category: "HANDROLL TEMAKI",
      Items: [
        {
          name: "Zalm avocado temaki",
          price: "13.00",
          imageURL:
            "https://cdn.ekoplaza.nl/ekoplaza/recepten/large/temaki-met-avocado-en-zalm.gif",
        },
        {
          name: "Spicy zalm temaki",
          price: "1.50",
          imageURL:
            "https://d2j6dbq0eux0bg.cloudfront.net/images/36980112/2401094468.jpg",
        },
        {
          name: "Tonijn avocado temaki",
          price: "2.00",
          imageURL:
            "https://pics.orderandeat.eu/wp-content/uploads/2021/02/26101233/45a.jpg",
        },
        {
          name: "Spicy tonijn temaki",
          price: "1.00",
          imageURL:
            "https://iheartumami.com/wp-content/uploads/2019/09/Tuna-Temaki-Sushi_.jpg",
        },
      ],
    },
    {
      category: "HOSOMAKI 6 ST.",
      Items: [
        {
          name: "Hosomaki tonijn",
          price: "13.00",
          imageURL:
            "https://images.unsplash.com/photo-1648146299493-301461058f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          name: "Hosomaki zalm",
          price: "1.50",
          imageURL:
            "https://images.unsplash.com/photo-1648146299178-566fbf8522d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          name: "Hosomaki krab",
          price: "2.00",
          imageURL:
            "https://images.unsplash.com/photo-1648146299319-a190a47a1335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
          name: "Hosomaki avocado",
          price: "1.00",
          imageURL:
            "https://images.unsplash.com/photo-1648146299381-5f4db5d842a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        },
      ],
    },
  ];
  return (
    <div>
      {Fruits.map((fruit) => (
        <>
          <h1 className="text-center text-4xl Kurale font-semibold tracking-wide text-red-500 mt-24 mb-7">
            {fruit.category}
          </h1>
          <div className="max-w-6xl mx-auto grid grid-cols-4 gap-5">
            {fruit.Items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[265px] w-[265px] from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br rounded-xl"
              >
                <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-xl relative group h-full w-full">
                  <div className="rounded-xl  transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end z-10">
                    <div className="">
                      <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                        <div className="font-bold">{item.name}</div>
                        <div className=" text-sm">
                          <button
                            className="uppercase text-sm md:text-base tracking-wider px-3 text-white py-2 font-semibold bg-red-500 rounded-md"
                            onClick={() => {
                              setShowModal(true);
                              setGetItems(item);
                            }}
                          >
                            ${item.price} +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    alt=""
                    className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                    src={item.imageURL}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default CategoryItems;
