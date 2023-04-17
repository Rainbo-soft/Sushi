import React from "react";
import bannerImage from "../../assets/bannerImage.png";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-0 md:flex justify-between items-center py-10">
      <div className="flex flex-col md:items-start items-center w-64 md:w-auto mx-auto md:mx-0 gap-3">
        <h1 className="Kurale text-3xl md:text-3xl lg:text-5xl text-[#050f2c]">
          Beste sushi op Mol
        </h1>
        <p className="lg:text-lg text-sm text-center md:text-start text-[#ed1b2e]">
          Lorem, ipsum dolor sit amet consectetur
          <br className="hidden md:block lg:hidden" />
          adipisicing elit. Ipsam, officiis.
        </p>
        <button className="uppercase text-sm md:text-lg px-3 text-white py-2 font-semibold tracking-wider bg-red-500 rounded-md">
          Order Now
        </button>
      </div>
      <div className="relative w-80 h-80 overflow-hidden">
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <mask id="mask-heart">
                <path
                  fill="white"
                  d="M50,15 A20,20 0 0,1 90,55 L50,95 L10,55 A20,20 0 0,1 50,15 z"
                />
              </mask>
            </defs>
            <image
              href={bannerImage}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#mask-heart)"
            />
            <use xlinkHref="#mask-background" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
