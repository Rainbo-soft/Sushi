import React from "react";
import { Link } from "react-router-dom";
import { AiFillRedditCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { SlDrawer } from "react-icons/sl";
import { MdPayment } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-10 mx-auto py-20 px-5 lg:px-0">
          <div className="flex gap-5">
            <AiOutlineShoppingCart className="text-3xl " />
            <div>
              <h4 className="text-2xl">Pick a dish</h4>
              <p className="text-sm w-72">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <MdPayment className="text-3xl" />
            <div>
              <h4 className="text-2xl">Pick a dish</h4>
              <p className="text-sm  w-72">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <SlDrawer className=" text-3xl" />
            <div>
              <h4 className=" text-2xl">Pick a dish</h4>
              <p className="text-sm w-72">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27615.07980089876!2d-118.25316644142603!3d34.055768980613024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1681579291461!5m2!1sen!2sbd"
          width="100%"
          height="250"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="py-10 bg-red-500 text-white">
        <p className="text-2xl text-center mb-8 font-bold underline underline-offset-8 Kurale">
          Opening Hour
        </p>
        <ul className="px-5 space-y-3 lg:space-y-0 lg:flex items-center justify-around text-xl font-semibold">
          <li>
            <p>MONDAY</p>
            <p className="bg-white text-black px-3 py-2 rounded-md">
              8:00 AM - 5:00 PM
            </p>
          </li>
          <li>
            <p>TUESDAY</p>
            <p className="bg-white text-black px-3 py-2 rounded-md">
              8:00 AM - 5:00 PM
            </p>
          </li>
          <li>
            <p>WEDNESDAY</p>
            <p className="bg-white text-black px-3 py-2 rounded-md">
              8:00 AM - 5:00 PM
            </p>
          </li>
          <li>
            <p>THURSDAY</p>
            <p className="bg-white text-black px-3 py-2 rounded-md">
              8:00 AM - 5:00 PM
            </p>
          </li>
          <li>
            <p>FRIDAY</p>
            <p className="bg-white text-black px-3 py-2 rounded-md">
              8:00 AM - 5:00 PM
            </p>
          </li>
          <li>
            <p>SATURDAY</p>
            <p className="bg-white text-black px-3 py-2 rounded-md">
              8:00 AM - 5:00 PM
            </p>
          </li>
          <li>
            <p>SUNDAY</p>
            <p className="bg-white text-red-500 px-3 py-2 rounded-md">CLOSED</p>
          </li>
        </ul>
      </div>

      <div className="bg-red-600">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <Link href="/" className="text-3xl font-semibold text-white">
            Sushi
          </Link>

          <p className="text-sm text-white capitalize">
            © 2022 - 2023 Rainbosoft All Right Reserved
          </p>

          <div className="flex -mx-2 items-center">
            <Link
              href="/"
              className="mx-2 text-white text-2xl transition-colors duration-300 hover:text-white/70"
              aria-label="Reddit"
            >
              <AiFillRedditCircle />
            </Link>

            <Link
              href="/"
              className="mx-2 text-white text-2xl transition-colors duration-300 hover:text-white/70"
              aria-label="Facebook"
            >
              <BsFacebook />
            </Link>

            <Link
              href="/"
              className="mx-2 text-white text-2xl transition-colors duration-300 hover:text-white/70"
              aria-label="Github"
            >
              <BsInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
