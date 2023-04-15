import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="flex justify-center items-center gap-7 py-3 text-lg font-semibold">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="chef">Chef</Link>
      </li>
    </ul>
  );
};

export default Navbar;
