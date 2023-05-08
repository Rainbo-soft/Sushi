import React from "react";
import image1 from "../../assets/Wakame.jpg";
import image2 from "../../assets/Edamame.jpg";
import image3 from "../../assets/Kimchi.jpg";
import image4 from "../../assets/WakameKoolsla.jpg";
import image5 from "../../assets/Deep-Fried-Dragon-Eyes.jpg";
import image6 from "../../assets/Spicy-Volcano-Roll.jpg";
import image7 from "../../assets/crispy-zalm.jpg";
import image8 from "../../assets/Crispy-Scampi.jpg";
import image9 from "../../assets/Zalm-avocado-temaki.gif";
import image10 from "../../assets/Spicy-zalm-temaki.png";
import image11 from "../../assets/Tonijn-avocado-temaki.jpg";
import image12 from "../../assets/Spicy-tonijn-temaki.jpg";
import image13 from "../../assets/Hosomaki-tonijn.avif";
import image14 from "../../assets/Hosomaki-zalm.avif";
import image15 from "../../assets/Hosomaki-krab.avif";
import image16 from "../../assets/Hosomaki-avocado.avif";

const CategoryItems = ({ setShowModal, setGetItems }) => {
  const Fruits = [
    {
      category: "Voorgerechten",
      Items: [
        {
          name: "Wakame",
          price: "5.00",
          imageURL: image1,
        },
        {
          name: " Edamame",
          price: "4.00",
          imageURL: image2,
        },
        {
          name: "Kimchi",
          price: "5.50",
          imageURL: image3,
        },
        {
          name: "WakameKoolsla",
          price: "3.00",
          imageURL: image4,
        },
      ],
    },
    {
      category: "Crispy Roll",
      Items: [
        {
          name: "Deep Fried Dragon Eyes",
          price: "13.00",
          imageURL: image5,
        },
        {
          name: "Spicy Volcano Roll",
          price: "1.50",
          imageURL: image6,
        },
        {
          name: "Crispy Zalm",
          price: "2.00",
          imageURL: image7,
        },
        {
          name: "Crispy Scampi",
          price: "1.00",
          imageURL: image8,
        },
      ],
    },
    {
      category: "Handroll Temaki",
      Items: [
        {
          name: "Zalm avocado temaki",
          price: "13.00",
          imageURL: image9,
        },
        {
          name: "Spicy zalm temaki",
          price: "1.50",
          imageURL: image10,
        },
        {
          name: "Tonijn avocado temaki",
          price: "2.00",
          imageURL: image11,
        },
        {
          name: "Spicy tonijn temaki",
          price: "1.00",
          imageURL: image12,
        },
      ],
    },
    {
      category: "Hosomaki 6 st.",
      Items: [
        {
          name: "Hosomaki tonijn",
          price: "13.00",
          imageURL: image13,
        },
        {
          name: "Hosomaki zalm",
          price: "1.50",
          imageURL: image14,
        },
        {
          name: "Hosomaki krab",
          price: "2.00",
          imageURL: image15,
        },
        {
          name: "Hosomaki avocado",
          price: "1.00",
          imageURL: image16,
        },
      ],
    },
  ];
  return (
    <div>
      {Fruits.map((fruit) => (
        <>
          <h1 className="text-center text-3xl Kurale capitalize tracking-wide text-red-500 my-14">
            {fruit.category}
          </h1>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-5 px-5">
            {fruit.Items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[265px] lg:w-[265px] from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br rounded-xl"
              >
                <div className="overflow-hidden  aspect-video bg-red-400 cursor-pointer rounded-md relative group h-full w-full">
                  <div className="rounded-md  transition duration-300 ease-in-out cursor-pointer absolute from-black/40 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end z-10">
                    <div className="">
                      <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out">
                        <div className="font-bold">{item.name}</div>
                        <div className=" text-sm">
                          <button
                            className="uppercase text-sm md:text-base tracking-wider px-3 text-white py-2 font-semibold bg-red-500 rounded"
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
