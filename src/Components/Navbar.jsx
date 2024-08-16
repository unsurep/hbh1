"use client";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import React from "react";
import Image from "next/image";
import logo from "../Components/Image/logo.jpg";
import { IoHome } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { RiNewsLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import logobg from "../Components/Image/logobg.png";

const Navbar = () => {
  return (
    <div>
      <div className="px-[6rem] py-[10px] flex fixed z-50 bg-white w-full   ">
        <div>
          <Image
            src={logo}
            width={0}
            height={0}
            alt="image"
            className="w-16 cursor-pointer"
          />
        </div>

        <ul className="m-auto flex gap-10">
          <li className="flex gap-1 items-center justify-center hover:text-yellow-800 text-black font-semibold hover:bg-red-100 px-3 py-2 rounded-full cursor-pointer">
            <span className="text-xl">
              <IoHome />
            </span>
            Home
          </li>
          <li className="flex gap-1 items-center justify-center hover:text-yellow-800 text-black font-semibold hover:bg-red-100 px-3 py-2 rounded-full cursor-pointer">
            <span className="text-xl">
              <FaBusinessTime />
            </span>
            Business Hub{" "}
          </li>
          <li className="flex gap-1 items-center justify-center hover:text-yellow-800 text-black font-semibold hover:bg-red-100 px-3 py-2 rounded-full cursor-pointer">
            <span className="text-xl">
              <FaBookReader />
            </span>
            About us
          </li>
          <li className="flex gap-1 items-center justify-center hover:text-yellow-800 text-black font-semibold hover:bg-red-100 px-3 py-2 rounded-full cursor-pointer">
            <span className="text-xl">
              <RiNewsLine />
            </span>
            News flash
          </li>
          <li className="flex gap-1 items-center justify-center hover:text-yellow-800 text-black font-semibold hover:bg-red-100 px-3 py-2 rounded-full cursor-pointer">
            <span className="text-xl">
              <IoSearchSharp />
            </span>
            Search
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
