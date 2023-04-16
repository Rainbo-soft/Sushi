import React from "react";
import img from "../../assets/about us 1.jpg";
import img1 from "../../assets/about us 2.jpg";
import img2 from "../../assets/about us 3.jpg";
import facebook from "../../assets/facebook-96.png";
import twitter from "../../assets/twitter-circled-96.png";
import takeway from "../../assets/Takeway.png";
import uber from "../../assets/Uber eats-01.png";

const About = () => {
  return (
    <div>
      <div className="md:grid grid-cols-2 gap-5 mt-3">
        <div className="flex flex-col justify-center md:ml-20 md:mt-10">
          <h1 className="font-bold text-center text-5xl capitalize">About Us</h1>
          <p className="border-b border-gray-400 pb-3 mt-3">A traditional Japanese and Tibetan restaurant. A traditional Asian setting is the setting for Sushi Mol lunch and dinner services. Our specialties include sushi, maki, noodles, woks, and momos, by the piece or on trays. The restaurant is located close to AXA Bank Zakenkantoor Vandenweyer and the Mol Centrum. Quality products prepared with care are what we offer! With our know-how, we prepare sushi on the go in our open kitchen. On request, we can provide a buffet and catering service. Our restaurant has a very relaxed atmosphere, and you can sit right on the spot. You can also take away our food to go.</p>
          <h3 className="mt-5 font-bold">We at Sushi Mol Kokoro are proud of the quality and freshness of our products. This is why we prepare all our products "on the spot" when you order.</h3>
          <h5 className="mt-5 text-left">Delivery in 45 to 60 minutes (depending on traffic).</h5>
          <h5 className="font-bold mt-5">Delivery Hours: 14:00 <span className="font-normal">22:00 (Monday to Sunday)</span></h5>
          <h3 className="my-5 font-bold text-xl border-b border-gray-400 pb-3">TUESDAY - CLOSED</h3>
          <p>Sushi Mol Kokoro, a unique Japanese restaurant in Mol with an "all-you-can-eat" concept. Two all-you-can-eat meals: lunch and dinner. We offer delicious Japanese menus prepared by our staff according to Japanese art rules, respecting traditions and balancing ingredients. You can choose from our wide range of soups, tasty salads, sushi, noodles, tempura, teppanyaki, and desserts included in our menus.</p>
          <h3 className="my-5 font-bold text-xl">Come try it today. You won't be disappointed!</h3>
        </div>
        <div>
          <div >
            <img src={img} alt="" srcset="" />
          </div>

        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-5 mt-5">
        <div className="md:pl-10">
          <img src={img1} alt="" />
        </div>
        <div>
          <h1 className="text-center font-bold text-4xl mb-3">King of sushi mol</h1>
          <p>One of the things that makes Sushi Mol so special is the quality of the ingredients they use. Fresh, high-quality fish is a staple at Sushi Mol, and their chefs take great care to prepare it in a way that brings out the flavors and textures. Additionally, the sushi rice used is also top-notch, perfectly seasoned, and perfectly sticky, making every bite of sushi a delight to eat.Another unique aspect of Sushi Mol is its menu. While they have many classic sushi rolls and dishes, they also have some original creations that you won't find anywhere else. These delicious rolls feature unexpected ingredients and flavors and are a true testament to the skill of the chefs at Sushi Mol.</p>
          <p className="mt-5">The atmosphere at Sushi Mol is also special. The restaurant has a relaxed and casual vibe, with a cozy and intimate setting. It's the perfect place to enjoy a delicious meal with friends or family, and the service is always excellent.Overall, Sushi Mol is a unique and delicious sushi bar that you simply must try. Whether you're a sushi lover or a rookie to the cuisine, you're sure to find something you love on their menu. From the high-quality ingredients to the creative menu and casual atmosphere, Sushi Mol is a true standout in the world of sushi.</p>
        </div>
      </div>
      <div className="mt-5 md:w-11/12 mx-auto">
        <h1 className="text-center font-bold text-5xl">The perfect place for your group dinners and events</h1>
        <h5 className="mt-5 text-center">The banquet hall is the perfect place for all your events, and we would be happy to host them for you. We welcome birthday parties, corporate dinners, event dinners, buffer dinners, bachelor parties and bachelorette parties of up to 50 guests.</h5>
      </div>
      <div className="mt-5">
        <img src={img2} alt="" />
      </div>
      <div className="mt-10 border-t-8 border-red-500 bg-black">
        <div className="md:grid grid-cols-2 ">
          <div>
            <h3 className="text-white font-bold text-center text-2xl mt-5">OPENING HOUR</h3>
            <h5 className="text-center text-white mt-5 font-semibold">We zijn ook open <br />
              of feestdagen</h5>
            <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
              <h6>Monday</h6>
              <h6>14:00</h6>
              <h6>-</h6>
              <h6>22:00</h6>
            </div>
            <div className="bg-white w-10/12 mx-auto text-red-500 flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
              <h6>TUESDAY</h6>

              <h6>CLOSED</h6>
            </div>
            <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
              <h6>Monday</h6>
              <h6>14:00</h6>
              <h6>-</h6>
              <h6>22:00</h6>
            </div>
            <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
              <h6>Monday</h6>
              <h6>14:00</h6>
              <h6>-</h6>
              <h6>22:00</h6>
            </div>
            <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
              <h6>Monday</h6>
              <h6>14:00</h6>
              <h6>-</h6>
              <h6>22:00</h6>
            </div>
            <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
              <h6>Monday</h6>
              <h6>14:00</h6>
              <h6>-</h6>
              <h6>22:00</h6>
            </div>
            <div className="bg-white w-10/12 mx-auto flex justify-evenly mt-5 font-bold text-xl py-3 rounded-full">
              <h6>Monday</h6>
              <h6>14:00</h6>
              <h6>-</h6>
              <h6>22:00</h6>
            </div>
          </div>
          <div className="text-white">
            <h1 className="mt-5 text-center font-bold text-2xl">CONTACT INFORMATION</h1>
            <p className="mt-5 font-semibold text-xl text-center">CORBIESTRAAT 21 <br />
              2400 MOL, BELGIUM <br />
              PHONE:+32 14 872 578 , 014872578</p>
          </div>
        </div>
        <h1 className="text-center text-2xl font-bold mt-8 text-white">ORDER SUSHI MOL, GEEL, LOMMEL, BALEN, DESSEL, KASTERLEE, MEERHOUT</h1>
        <p className="text-center font-semibold text-white mt-5 md:w-11/12 mx-auto text-xl">As you enter our restaurant, you can see our chefs in action in the open kitchen. We carefully select all our staff members based on their outstanding abilities, Character, and personal qualities. From the waiter to the Chef, they will offer you the best possible sushi experience. KokoroSushi is one of Mol's top sushi restaurants. All our dishes are carefully prepared with high-quality products. Our highest priority is to provide you with the best possible dining experience. That is why we prepare all our dishes fresh and low in calories: that is how the favors come to dishes.</p>
        <p className="text-center font-semibold text-white mt-5 md:w-11/12 mx-auto text-xl">We welcome both young and old in our tastefully decorated, sleekly styled eatery, while foodies and guests who wish to experience japanese suchi for the very first time will feel completely at japan. Don't know what to choose from our menu? Let us help you </p>
        <h1 className="text-center text-2xl font-bold mt-10 text-white">RESTAURANT CORBIESTRAAT MOL</h1>
        <div className="flex mt-3 pb-10 justify-center items-center">
          <a className="w-10 h-10 md:w-20 md:h-20" href="#" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>          
          <a className="w-10 h-10 md:w-20 md:h-20" href="#" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>          
          <a className="w-10 h-10 md:w-20 md:h-20" href="#" target="_blank" rel="noopener noreferrer"><img src={takeway} alt="" /></a>          
          <a className="w-10 h-10 md:w-20 md:h-20" href="#" target="_blank" rel="noopener noreferrer"><img src={uber} alt="" /></a>          
        </div>
      </div>
    </div>
  )
};

export default About;
