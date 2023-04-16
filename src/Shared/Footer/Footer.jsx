import React from "react";
import { Link } from "react-router-dom";
import { AiFillRedditCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27615.07980089876!2d-118.25316644142603!3d34.055768980613024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1681579291461!5m2!1sen!2sbd"
          width="100%"
          height="250"
          className="border-0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="py-10 bg-red-500 text-white">
        <p className="text-2xl text-center mb-8 font-bold underline underline-offset-8 Kurale">
          Opening Hour
        </p>
        <ul className="flex items-center justify-around text-xl font-semibold">
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

      <div class="bg-red-600">
        <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <Link href="/" className="text-3xl font-semibold text-white">
            Sushi
          </Link>

          <p class="text-sm text-white capitalize">
            © 2022 - 2023 Rainbosoft All Right Reserved
          </p>

          <div class="flex -mx-2 items-center">
            <Link
              href="/"
              class="mx-2 text-white text-2xl transition-colors duration-300 hover:text-white/70"
              aria-label="Reddit"
            >
              <AiFillRedditCircle />
            </Link>

            <Link
              href="/"
              class="mx-2 text-white text-2xl transition-colors duration-300 hover:text-white/70"
              aria-label="Facebook"
            >
              <BsFacebook />
            </Link>

            <Link
              href="/"
              class="mx-2 text-white text-2xl transition-colors duration-300 hover:text-white/70"
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
