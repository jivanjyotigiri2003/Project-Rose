import React from 'react'
import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

function ProfileCard() {
  return (
          <div className="  w-[50vw] h-[18vh] md:h-[20vh] md:w-[28vw]  bg-[#FFFCEB] rounded-md flex flex-col justify-center ">
            <h1
              className={
               
                " text-[#A4161A] mt-[-6vh] md:mt-[-3vh] font-semibold mx-auto text-md md:text-3xl"
              }
            >
              President SAC
            </h1>
    <div className="absolute h-[50vh] w-[44vw] md:h-[53vh] md:w-[22vw] rounded-md mt-[99%]  md:mt-[32%] bg-[#A4161A] ml-[2%] md:ml-[2.5%]">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt="..."
                class="shadow rounded-full w-[60%] mx-auto mt-9 h-auto align-middle border-none mb-3"
              />
              <span className=" ml-[20%] md:ml-[33%]  text-white font-semibold  text-md md:text-2xl">
                RRocky Dj Don 
              </span>
              <div className="md:h-[5vh] md:w-[20vw] w-[95%] bg-[#FFFFFF] mx-auto rounded-md mt-5 mb-5 flex items-center">
                <IoCall className="text-[#A4161A]  mx-1 md:mx-8 text-md md:text-3xl" />
                <a href="tel:+4733378901" className="text-[#A4161A] ml-3 md:ml-0 text-md md:text-2xl">
                  +4733378901
                </a>
              </div>
              <div className="md:h-[5vh] md:w-[20vw] w-[95%] bg-[#FFFFFF] mx-auto rounded-md mt-5 mb-5  flex items-center">
                <BsFillEnvelopeFill className="text-[#A4161A] mx-1 md:mx-8 text-md md:text-3xl" />
                <a
                  href="mailto:sdbjwbdhij@gmail.com"
                  className="text-[#A4161A]  text-sm md:text-2xl"
                >
                  sdbjwbij@gmail.com
                </a>
              </div>
            </div>
          </div>
  )

}

export default ProfileCard