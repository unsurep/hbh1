'use client'


import { BsFacebook } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";








const Footer=()=>{

     return(
          <div>
               <footer className="px-[6rem] pt-20">
                    <div className="flex  ">
                         <p>Connect with us</p>
                         <p>Trending now</p>
                         <p></p>
                    </div>

                    <div className="flex  justify-between">
                         <ul className="flex gap-1">
                              <li><BsFacebook /></li>
                              <li><FaSquareInstagram /></li>
                              <li><FaXTwitter /></li>
                              <li><IoLogoYoutube /></li>
                              <li><IoLogoTiktok /></li>
                         </ul>

                         <ul>
                              <li>Hash Business Run 1.0</li>
                              <li>Friday Girls Prostate Awareness Run</li>
                              <li>Thursday Boys Trilogy Run</li>
                              <li>Akwa Ibom 3rd Anniversary Run</li>
                              <li>Ja'Pa Run (Ikeja x Apapa)</li>
                         </ul>

                         <ul>
                              <li>Meet an Admin</li>
                              <li>Terms & Condition</li>
                              <li></li>
                              <li></li>
                              <li></li>
                         </ul>
                    </div>

                    <hr />



                    <div>
                         <ul className="flex justify-between">
                              <li>Know Your Vendor</li>
                              <li>About</li>
                              <li>Help</li>
                         </ul>
                        
                        <div className="flex ">
                        <ul>
                              <li>vendor 1</li>
                              <li>vendor 2</li>
                              <li>vendor 3</li>
                              <li>vendor 4</li>
                              <li>vendor 5</li>
                              <li>vendor 6</li>
                         </ul>

                         <ul>
                              <li>vendor 1</li>
                              <li>vendor 2</li>
                              <li>vendor 3</li>
                              <li>vendor 4</li>
                              <li>vendor 5</li>
                              <li>vendor 6</li>
                         </ul>

                         <ul>
                              <li>vendor 1</li>
                              <li>vendor 2</li>
                              <li>vendor 3</li>
                              <li>vendor 4</li>
                              <li>vendor 5</li>
                              <li>vendor 6</li>
                         </ul>
                        </div>
                    </div>

                 
               </footer>
               
















          </div>
     )



};

export default Footer;