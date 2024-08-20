'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"


const AboutSectionOne=()=>{
    const url = 'https://fakestoreapi.com/products'
    const[products, setProducts]=useState([])

    const fetchProducts = async (products) => {
        const response = await fetch(url,{
            method:'GET',
            headers :{
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        setProducts(data)
    }

    useEffect(()=>{
        fetchProducts()

    },[])

    









    return(
        <div className="px-[5rem] py-20">
            <section>
                <div>
                    <h1 className="text-black text-3xl font-bold">FETCHING FAKE API PRODUCTS</h1>
                </div>


                <div>
                    {products.map((product)=>{
                        <div>
                            <div>
                                <Image className="w-[30%]" src={product.image} width={0} height={0} alt="image"/>
                            </div>

                            <ul>
                                <li>{product.title}</li>
                                <li>{product.description}</li>
                                <li>{product.price}</li>
                            </ul>
                        </div>
                    })}
                </div>
            </section>
        </div>
    )
};

export default AboutSectionOne;