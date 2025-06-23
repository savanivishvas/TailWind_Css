import { FaAnglesRight, FaArrowRight, FaChevronDown, FaFacebook, FaHeadset, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6"
import { commonData } from "../Data/commonData";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";

export const Footer = () => {

  
  return (
    <div className="bg-[#172134] text-white py-12 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 ">

        <div>
          <ul>
            <li className="font-bold mb-2 uppercase">Quick Links</li>
        
            {commonData.footerData1.map((text, index) => (
              <li
                key={index}
                className="group flex items-center transform transition duration-500 delay-300 hover:translate-x-2 cursor-pointer"
              >
                {text}
                <FaArrowRight className="ml-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </li>
            ))}
          </ul>
          <hr  className="w-full bg-[#FFFFFF26] mt-8"/>
        </div>
        

         <div>
          <ul>
            <li className="font-bold mb-2 uppercase">categoriers</li>
        
            {commonData.footerData2.map((text, index) => (
              <li
                key={index}
                className="group flex items-center transform transition duration-500 delay-300 hover:translate-x-2 cursor-pointer"
              >
                {text}
                <FaArrowRight className="ml-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </li>
            ))}
          </ul>
          <hr  className="w-full bg-[#FFFFFF26] mt-8"/>
        </div>

        <div>
          <ul>
            <li className="font-bold mb-2 uppercase">contacts</li>
            <li className="flex items-center">
              <div>
                <IoHomeOutline className="-mt-[1.2rem] size-5"/>
              </div>
              <div className="ml-4">
                <p>97845 Baker st. 567</p>
                <p>Los Angeles - US</p>
              </div>
            </li>
            <li className="flex items-center mt-2">
              <FaHeadset />
              <p className="ml-4">+94 423-23-221</p>
            </li>
             <li className="flex items-center mt-2">
              <MdOutlineMail />
              <p className="ml-4">info@allaia.com</p>
            </li>
          </ul>
          <hr  className="w-full bg-[#FFFFFF26] mt-16"/>
        </div>

        <div>

          <p className="uppercase font-bold">keep in touch</p>

          <div className="flex mt-4 items-center">
          
            <input
              type="text"
              placeholder="Enter Email"
              className="bg-[#FFFFFF0D] text-white placeholder-white px-4 py-2 outline-none rounded-l-md w-full"
            />

            <button className="bg-[#004DDA] p-3 rounded-r-md flex items-center justify-center">
              <FaAnglesRight className="text-white text-lg" />
            </button>
          </div>

          <div className="mt-4">
            <div>
              <p>Follow us</p>
            </div>
            <div className="flex gap-4 mt-2">
              <FaFacebook />
              <FaXTwitter />
              <FaInstagram />
              <GiLoveSong />
              <FaWhatsapp />
            </div>
          </div>

          <hr  className="w-full bg-[#FFFFFF26] mt-[3.9rem]"/>

        </div>
  
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 mt-12 mb-8">
        
        <div className="flex items-center justify-between">

          <div className="flex gap-4 items-center justify-between">

            <div className="flex items-center justify-between bg-[#FFFFFF0D] p-2">
              <p>English</p>
              <TbWorld className="text-white ml-2" />
            </div>

            <div className="flex items-center justify-between bg-[#FFFFFF0D] p-2">
              <p>Us  Dollers</p>
              <FaChevronDown className="text-white ml-2" />
            </div>

            <div>
              <img src="\public\images\visa.svg" alt="" />
            </div>

          </div>
  
          <div className="flex items-center justify-between gap-4 ">
            <p className="pr-4 border-r border-gray-300">Terms and conditions</p>
            <p className="pr-4 border-r border-gray-300">Privacy</p>
            <p>@ 2024 Allaia</p>
          </div>

        </div>

      </div>


    </div>

  )
}
