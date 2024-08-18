'use client'
 

import Image from "next/image"
import { GiBeerStein } from "react-icons/gi";
import hero2 from '../Image/hero2.png'
import sdog from '../Image/sdog.webp'
import hero3 from '../Image/hero3.png'
import { FaRegNewspaper } from "react-icons/fa";
import f1 from '../Image/f1.jpg'
import f2 from '../Image/f2.jpg'
import f3 from '../Image/f3.jpg'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const SectionTwo=()=>{

    return (
      <div>

        {/* sec 1 */}

        <section className="pt-10 px-[5rem]">
            <h1 className="text-black text-3xl font-extrabold ">Hash Business Hub  Your One-Stop Shop for All Things Essential!!!</h1>

            <p className="pt-5 text-black">At Hash Business Hub, we bring the marketplace to you because we believe shopping should be effortless and enjoyable.That is why we've created a vibrant Business hub where you can find everything you need, from everyday essentials to rare and unique items. Whether you are looking for high-quality products, professional services, or exclusive deals, Hash Business Hub is your go-to destination.</p>

            <p className="pt-5 text-black">Our platform is designed with you in mind. We prioritize convenience, ensuring a seamless shopping experience from start to finish. With just a few clicks, you can browse an extensive range of categories, compare prices, and make secure purchases. Our user-friendly interface and dedicated customer support mean that shopping has never been easier or more reliable.</p>

            <p className="pt-5 text-black">But we are more than just a hub. we are a family in the hash community. At Hash Business Hub, we connect you with trusted sellers who share your values of quality, transparency, and customer satisfaction. We continuously strive to bring you the best products and services, tailored to your needs and delivered straight to your door.</p>

            <h1 className="pt-20 text-black text-3xl font-extrabold">Why Choose Hash Business Hub?</h1>

            <ul className="pt-5 flex flex-col gap-5">
                <li><b>Diverse Selection:</b> From groceries to gadgets, fashion to furniture, we offer a wide array of products and services, all in one place.</li>
                <li><b>Unbeatable Convenience:</b> Shop anytime, anywhere, with a platform that is accessible and easy to use.</li>
                <li><b>Quality You Can Trust:</b> We work with reputable sellers to ensure that every purchase meets your expectations.</li>
                <li><b>Customer-Centric Service:</b> Our support team is here to assist you every step of the way, ensuring your experience is nothing short of exceptional.</li>
            </ul>

            <p className="pt-5 text-neutral-400 italic">Join the growing community at Hash Business Hub and discover how we are revolutionizing the way you shop online. Experience the future of hash e-commerce. where your needs come first, and satisfaction is guaranteed.</p>
            
        </section>






        {/* sec 2*/}
        <section className="px-[5rem] pt-20">
          <div>
            <h1 className="flex items-center gap-1 text-black text-4xl font-extrabold">Shop with us<span><GiBeerStein /></span></h1>
          </div>

        <div className="flex gap-4 mt-20">
            {/* one */}
            <div className="bg-green-100 py-8 px-2 rounded-[12px] hover:bg-sky-200 cursor-pointer">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={hero2} width={0} height={0} alt="img" className="w-44" />
                    </div>

                    <ul className="flex flex-col  text-left text-black font-semibold">
                        <li>Hash handle:Unsure</li>
                        <li>Kennel: PH H3</li>
                        <li>Phone no: 080123456789</li>

                    </ul>
                </div>

              <ul className="flex w-64 gap-5 items-center">

                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>

              </ul>


            </div>


            {/* two */}
            <div className="bg-red-100 py-8 px-2 hover:bg-sky-200 cursor-pointer rounded-[12px]">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={hero3} width={0} height={0} alt="img" className="w-44" />
                    </div>

                    <ul className="flex flex-col  text-left text-black font-semibold">
                        <li>Hash handle:Unsure</li>
                        <li>Kennel: PH H3</li>
                        <li>Phone no: 080123456789</li>

                    </ul>
                </div>

              <ul className="flex w-64 gap-5 items-center">

                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>

              </ul>


            </div>
         
           

            {/* three */}
            <div className="bg-blue-100 py-8 px-2 hover:bg-sky-200 cursor-pointer rounded-[12px]">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={hero2} width={0} height={0} alt="img" className="w-44" />
                    </div>

                    <ul className="flex flex-col  text-left text-black font-semibold">
                        <li>Hash handle:Unsure</li>
                        <li>Kennel: PH H3</li>
                        <li>Phone no: 080123456789</li>

                    </ul>
                </div>

              <ul className="flex w-64 gap-5 items-center">

                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>

              </ul>


            </div>
            
        </div>


        <div className="flex gap-4 mt-20">

             {/* four */}
             <div className="bg-pink-100 py-8 px-2 hover:bg-sky-200 cursor-pointer rounded-[12px]">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={hero3} width={0} height={0} alt="img" className="w-44" />
                    </div>

                    <ul className="flex flex-col  text-left text-black font-semibold">
                        <li>Hash handle:Unsure</li>
                        <li>Kennel: PH H3</li>
                        <li>Phone no: 080123456789</li>

                    </ul>
                </div>

              <ul className="flex w-64 gap-5 items-center">

                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>

              </ul>


            </div>


            {/* five */}
            <div className="bg-purple-100 py-8 px-2 hover:bg-sky-200 cursor-pointer rounded-[12px]">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={hero2} width={0} height={0} alt="img" className="w-44" />
                    </div>

                    <ul className="flex flex-col  text-left text-black font-semibold">
                        <li>Hash handle:Unsure</li>
                        <li>Kennel: PH H3</li>
                        <li>Phone no: 080123456789</li>

                    </ul>
                </div>

              <ul className="flex w-64 gap-5 items-center">

                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>

              </ul>


            </div>

            {/* six */}
            <div className="bg-orange-100 py-8 px-2 hover:bg-sky-200 cursor-pointer rounded-[12px]">
                <div className="flex items-center justify-center">
                    <div>
                        <Image src={hero3} width={0} height={0} alt="img" className="w-44" />
                    </div>

                    <ul className="flex flex-col  text-left text-black font-semibold">
                        <li>Hash handle:Unsure</li>
                        <li>Kennel: PH H3</li>
                        <li>Phone no: 080123456789</li>

                    </ul>
                </div>

              <ul className="flex w-64 gap-5 items-center">

                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>
                <li><Image src={sdog} width={0} height={0} alt="img" /></li>

              </ul>


            </div>
        </div>




        </section>



        {/* sec 3 */}

    <section className="pb-20 px-[5rem]">

        <div className="pt-20">
            <h1 className="flex flex-col gap-1 items-center justify-center text-black text-5xl cursor-pointer">Business Hub update<span><FaRegNewspaper /></span></h1>
        </div>

        <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f1} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>



        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f2} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f3} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f2} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>



        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f1} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>



        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f3} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>


        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f1} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>



        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f2} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>



        <SwiperSlide>
            <div className="h-60 w-full overflow-hidden">
                <Image src={f3} width={0} height={0} alt="img" className="h-full w-full object-cover"/>
            </div>
        </SwiperSlide>



      </Swiper>
        </>


    </section>

        
        




      </div>
    );


};

export default SectionTwo;