'use client'

import React, { useState } from "react"
import Image from "next/image"
import swiper1 from '../Image/swiper1.jpg'
import { IoCallSharp } from "react-icons/io5";
import swiper3 from '../Image/swiper3.png'
import swiper2 from '../Image/swiper2.png'
import { MdLooksOne } from "react-icons/md";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { LuBeer } from "react-icons/lu";
import { GiMorgueFeet } from "react-icons/gi";
import { GiFootsteps } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import greenguy from '../Image/greenguy.webp'
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";



const SectionOne=()=>{
    const [showSectionOne, setShowSectionOne]=useState(true);
    const [showSectionTwo, setShowSectionTwo]=useState(false);
    const [showSectionThree, setShowSectionThree]=useState(false);


    const handleSectionOne=()=>{
        setShowSectionOne(true)
        setShowSectionTwo(false)
        setShowSectionThree(false)
    }

    const handleSectionTwo=()=>{
        setShowSectionOne(false)
        setShowSectionTwo(true)
        setShowSectionThree(false)
    }

    const handleSectionThree=()=>{
        setShowSectionOne(false)
        setShowSectionTwo(false)
        setShowSectionThree(true)
    }

    

    return (
    <div className=" pt-20">
        {/* Section One A */}
        {/* section 1/1 */}

        {showSectionOne === true && (
          <section className="px-[5rem] bg-green-100 h-[80vh] flex items-center relative ">
            <div className="">
              <p className="text-black font-semibold text-xl cursor-pointer">Welcome to Anomia H3 Business Hub 1.0 🔥</p>
              <h1 className="text-black font-extrabold text-5xl pt-8 pb-8 leading-[4rem]">Exclusive collections <br /> for everyone</h1>

              {/* =========================================DRAWER========================================================== */}
              <div className="drawer drawer-end">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn bg-black text-white gap-2 hover:bg-slate-600">Contact Us <IoCallSharp /></label>
              </div>
              <div className="drawer-side ">
              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

            
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 mt-20 ">
              <h1>Amomia H3</h1>
              {/* Sidebar content here */}
              {/* <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
              <li><a>Another one</a></li> */}
              {/* <li><b>Anomia Hash Hash Harriers</b></li> */}

              </ul>
              </div>
              </div>
              {/* ======================================================================================================================= */}

              {/* <button className="mt-14 bg-black text-white px-6 py-3 flex items-center gap-1 rounded-[20px] hover:bg-slate-400 hover:text-black hover:font-semibold">Contact us <IoCallSharp /></button> */}
            </div>

            <div data-aos="fade-up"
              data-aos-duration="500" className="ml-auto ">
              <Image src={swiper3} alt="img" width={0} height={0} className="rounded-[30px] w-[90%]"/>
            </div>

            <ul className="absolute bottom-0 left-[35rem] flex items-center gap-5 pb-4">
              <li onClick={handleSectionOne} className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"><MdLooksOne /></li>
              <li onClick={handleSectionTwo} className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"><PiNumberSquareTwoFill /></li>
              <li onClick={handleSectionThree} className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"><PiNumberSquareThreeFill /></li>
            </ul>

            <p className="text-5xl absolute top-[27rem] right-[1rem] "><GiMorgueFeet /></p>
            <p className="text-8xl absolute bottom-[1rem] left-[18rem]"><GiFootsteps /></p>
          </section>
        )}




        {/* section 1/2 */}

        {showSectionTwo===true && ( <section className="px-[5rem] bg-green-100 h-[80vh] flex items-center ">
          <div className="">
            <p className="text-black font-semibold text-xl">
              In this season, find the best 🔥
            </p>
            <h1 className="text-black font-extrabold text-5xl pt-8 leading-[4rem]">
              Exclusive collections <br /> for hashers
            </h1>
            <button className="mt-14 bg-black text-white px-6 py-3 flex items-center gap-1 rounded-[20px] hover:bg-slate-400 hover:text-black hover:font-semibold">
              Contact us <IoCallSharp />
            </button>
          </div>

          <div data-aos="fade-up"
              data-aos-duration="500" className="ml-auto">
            <Image
              src={swiper1}
              alt="img"
              width={0}
              height={0}
              className="rounded-[30px] w-[90%]"
            />
          </div>

          <ul className="absolute top-[34rem] left-[35rem] flex items-center gap-5 pb-4">
              <li
                onClick={handleSectionOne}
                className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"
              >
                <MdLooksOne />
              </li>
              <li
                onClick={handleSectionTwo}
                className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"
              >
                <PiNumberSquareTwoFill />
              </li>
              <li
                onClick={handleSectionThree}
                className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"
              >
                <PiNumberSquareThreeFill />
              </li>
            </ul>

            <p className="text-5xl absolute top-[20rem] right-[1rem] "><GiMorgueFeet /></p>
            <p className="text-8xl absolute bottom-[4rem] left-[18rem]"><GiFootsteps /></p>
          </section>
        )}
        

        {/* section 1/3 */}
        {showSectionThree===true && <section className="px-[5rem] bg-green-100 h-[80vh] flex items-center ">
          <div className="">
            <p className="text-black font-semibold text-xl">
              In this season, find the best 🔥
            </p>
            <h1 className="text-black font-extrabold text-5xl pt-8 leading-[4rem]">
              Drinking beer <br /> & making money
            </h1>
            <button className="mt-14 bg-black text-white px-6 py-3 flex items-center gap-1 rounded-[20px] hover:bg-slate-400 hover:text-black hover:font-semibold">
              Contact us <IoCallSharp />
            </button>
          </div>

          <div data-aos="fade-up"
              data-aos-duration="500" className="ml-auto">
            <Image
              src={swiper2}
              alt="img"
              width={0}
              height={0}
              className="rounded-[30px] w-[90%]"
            />
          </div>

          <p className="absolute top-[22.5rem] left-[42rem] text-9xl font-bold"><LuBeer /></p>

            <ul className="absolute top-[34rem] left-[35rem] flex items-center gap-5 pb-4">
              <li
                onClick={handleSectionOne}
                className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"
              >
                <MdLooksOne />
              </li>
              <li
                onClick={handleSectionTwo}
                className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"
              >
                <PiNumberSquareTwoFill />
              </li>
              <li
                onClick={handleSectionThree}
                className="text-4xl cursor-pointer hover:transition-all hover:transform hover:ease-in-out hover:duration[0.5s] hover:scale-125"
              >
                <PiNumberSquareThreeFill />
              </li>
            </ul>

            <p className="text-5xl absolute top-[5rem] right-[1rem] "><GiMorgueFeet /></p>
            <p className="text-8xl absolute bottom-[4rem] left-[18rem]"><GiFootsteps /></p>
        </section>}




        {/* Section One B */}
        <section className="flex items-center px-[5rem] pt-20 pb-10 bg-red-50 mx-16 my-24 rounded-[28px]">
            <div className="flex flex-col gap-4">
                <h1 className="text-black text-6xl font-bold">Anomia Hash House Harriers present:-</h1>
                <p className="text-neutral-400 text-4xl">Hash Business Hub 1.0</p>
                <p className="flex items-center gap-1 text-neutral-400 text-xl">Drinking beer <span ><LuBeer/></span>and making money <span ><FaMoneyBillTrendUp /></span>.</p>

                <ul className="flex flex-col text-black font-semibold pt-8">
                    <li><span className="text-blue-700 text-[30px]"><FaRegCalendarDays /></span>Date: 6-8 September, 2024</li>
                    <li><span className="text-red-700 text-[30px]"><IoLocation /></span>Venue: Hotel Benizia, Asaba</li>
                    <li><span className="text-green-700 text-[30px]"><FaMoneyBillTrendUp /></span>Rego: N20,000</li>
                </ul>
            </div>

            <div data-aos="zoom-in-up" className="ml-auto">
                <Image src={greenguy} width={0} height={0} alt="img"/>
            </div>
        </section>



    </div>
    );


};

export default SectionOne;