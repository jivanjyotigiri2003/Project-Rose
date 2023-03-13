import React from 'react'
import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

function ProfileCard({designation}) {
  return (
          <div className="  w-[46vw] h-[18vh] lg:h-[20vh] md:w-[28vw]  bg-[#FFFCEB] rounded-md flex flex-col justify-center ">
            <h1
              className={
               
                " text-[#A4161A] mt-[-6vh] lg:mt-[-3vh] font-semibold mx-auto text-md lg:text-3xl"
              }
            >
              {designation}
            </h1>
    <div className="absolute h-[50vh] w-[42vw] lg:h-[53vh] lg:w-[22vw] rounded-md mt-[99%]  lg:mt-[32%] bg-[#A4161A] ml-[2%] lg:ml-[2.5%]">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                alt="..."
                class="shadow rounded-full w-[60%] mx-auto mt-9 h-auto align-middle border-none mb-3"
              />
              <span className=" ml-[20%] lg:ml-[33%]  text-white font-semibold  text-md md:text-2xl">
                RRocky Dj Don 
              </span>
              <div className="lg:h-[5vh] lg:w-[20vw] w-[95%] bg-[#FFFFFF] mx-auto rounded-md mt-5 mb-5 flex items-center">
                <IoCall className="text-[#A4161A]  mx-1 lg:mx-8 text-md lg:text-3xl" />
                <a href="tel:+4733378901" className="text-[#A4161A] ml-3 lg:ml-0 text-md lg:text-2xl">
                  +4733378901
                </a>
              </div>
              <div className="lg:h-[5vh] lg:w-[20vw] w-[95%] bg-[#FFFFFF] mx-auto rounded-md mt-5 mb-5  flex items-center">
                <BsFillEnvelopeFill className="text-[#A4161A] mx-1 lg:mx-8 text-md lg:text-3xl" />
                <a
                  href="mailto:sdbjwbdhij@gmail.com"
                  className="text-[#A4161A]  text-sm lg:text-2xl"
                >
                  sdbjwbij@gmail.com
                </a>
              </div>
            </div>
          </div>
  )

}

export default ProfileCard