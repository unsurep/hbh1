'use client'




import React from "react"
import Image from "next/image"
import { mockData } from "./MockData";
import { FaStar } from "react-icons/fa";






const SectionThree=()=>{

    return(
        <div className="px-[5rem] py-20">
            <section>
                <div className="text-2xl">
                    <h1 className="text-black">New Arrival. <span className="text-neutral-500">Rey backpacks & bags</span></h1>
                </div>

                <div className="flex gap-5 pt-8 ">
                    {mockData.map((data)=>(
                        <div>
                            <div>
                                <Image src={data.Image} width={0} height={0} alt="image" className=""/>
                            </div>

                            {data?.id===2 && <ul className="flex items-center justify-center gap-8 pt-5">
                                <li className="bg-blue-400 h-3 w-8 rounded-full"></li>
                                <li className="bg-red-400 h-3 w-8 rounded-full"></li>
                                <li className="bg-green-400 h-3 w-8 rounded-full"></li>
                                <li className="bg-orange-400 h-3 w-8 rounded-full"></li>
                            </ul> }

                            

                            {data?.id===1 && <ul className="flex items-center justify-center gap-8 pt-5">
                                <li className="bg-pink-400 h-6 w-6 rounded-full"></li>
                                <li className="bg-purple-400 h-6 w-6 rounded-full"></li>
                                <li className="bg-lime-300 h-6 w-6 rounded-full"></li>
                                <li className="bg-rose-300 h-6 w-6 rounded-full"></li>
                            </ul> }
                            

                            <div className="pt-5">
                                <p className="text-red-900">{data.tag}</p>
                                <p className="text-black font-bold">{data.Name}</p>
                                <p className="text-neutral-400">{data.Description}</p>
                            </div>

                            <div className="flex pt-5">
                                <button className="text-green-700 border border-green-900 font-bold p-1 rounded-[8px]">{data.Price}</button>
                                {/* <button className="ml-auto">{data.rating}</button> */}
                                {data?.rating===4 && <ul className="text-yellow-600 flex gap-3 items-center ml-auto pt-5">
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                <li><FaStar /></li>
                                </ul>}

                                {data?.rating===5 && <ul className="text-yellow-600 flex gap-3 items-center ml-auto">
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                    <li><FaStar /></li>
                                </ul> }
                                
                            </div>

                        </div>
                    ))}

                </div>
            </section>
        </div>
    )
};

export default SectionThree;