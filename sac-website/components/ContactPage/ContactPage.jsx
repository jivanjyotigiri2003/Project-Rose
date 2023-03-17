import React from "react";
import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import dean from "../../public/dean.jpg";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import SocietyContactCard from "./SocietyContactCard";

function ContactPage() {
  const stroke1= "w-[60%] mx-auto bg-gradient-to-r from-white via-[#A4161A] to-white h-0.5";
  const stroke2= "w-[60%] mx-auto bg-gradient-to-r from-[#A4161A] via-white to-[#A4161A] h-0.5"
  return (
    <div className="">
      {/* Sac management page */}
      <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1678430362/image_767_hnhpi2.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen overflow-x-hidden">
        <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center min-h-screen">
          <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center min-h-screen">
            <div className="flex justify-center items-center min-h-screen">
              <h1 className={" text-white font-bold text-5xl text-center"}>
                CONTACT
              </h1>
            </div>
          </div>
        </div>
      </div>

      

      {/* SOCIETIES */}
      <Fade direction="up" triggerOnce="true" delay="50">
        <div className="w-screen h-fit  bg-[#A4161A] px-4 pt-14 pb-[5vh]">
          <SocietyContactCard societyTitle="LCS Representatives" color1="#FFFFFF" color2="#000000" color3="#E5383B" stroke={stroke1}/>
          <div className=" flex flex-col mt-14 md:mt-32 items-center">
            <p className="text-white font-semibold text-xl">See More</p>
            <HiChevronDown className="text-white font-bold text-2xl" />
          </div>
        </div>
      </Fade>
      <Fade direction="up" triggerOnce="true" delay="50">
        <div className="w-screen h-fit bg-white px-4 pt-14 pb-[5vh]">
          <SocietyContactCard societyTitle="FMS Representatives" color1="#A4161A" color2="#FFFFFF" color3="#FFFFFF" stroke={stroke2} />
          <div className=" flex flex-col mt-14 md:mt-32 items-center">
            <p className="text-[#A4161A] font-semibold text-xl">See More</p>
            <HiChevronDown className="text-[#A4161A] font-bold text-2xl" />
          </div>
        </div>
      </Fade>
      <Fade direction="up" triggerOnce="true" delay="50">
        <div className="w-screen h-fit bg-[#A4161A] px-4 pt-14 pb-[5vh]">
          <SocietyContactCard societyTitle="Technical Representatives" color1="#FFFFFF" color2="#000000" color3="#E5383B" stroke={stroke1} />
          <div className=" flex flex-col mt-14 md:mt-32 items-center">
            <p className="text-white font-semibold text-xl">See More</p>
            <HiChevronDown className="text-white font-bold text-2xl" />
          </div>
        </div>
      </Fade>
      <Fade direction="up" triggerOnce="true" delay="50">
        <div className="w-screen h-fit bg-white px-4 pt-14 pb-[5vh]">
          <SocietyContactCard societyTitle="Games AND Sports Representatives" color1="#A4161A" color2="#FFFFFF" color3="#FFFFFF" stroke={stroke2}/>
          <div className=" flex flex-col mt-14 md:mt-32 items-center">
            <p className="text-[#A4161A] font-semibold text-xl">See More</p>
            <HiChevronDown className="text-[#A4161A] font-bold text-2xl" />
          </div>
        </div>
      </Fade>
      

      {/* sac address */}
      <Fade direction="up" triggerOnce="true" delay="50">
        <div className=" md:flex bg-[#A4161A]">
          <div>
            <Image
              src={dean}
              alt="FAQ"
              className="w-[100vw]  clip-your-needful-style-down md:w-[50vw] md:clip-your-needful-style h-[100%] "
            />
          </div>
          <div className="flex flex-col lg:my-auto justify-center lg:w-[50%] text-white p-[1rem] pb-4  pl-2.5 pr-12 h-[100%]">
            <h1 className="font-bold text-xl lg:text-5xl mb-10">
              SAC Office Address
            </h1>
            <h1 className=" text-md lg:text-3xl mb-1 lg:mb-2">
              Student Activity Center
            </h1>
            <h1 className=" text-md lg:text-3xl mb-1 lg:mb-2">
              National Institute of Technology Rourkela
            </h1>
            <h1 className=" text-md lg:text-3xl mb-1 lg:mb-2">
              Rourkela , Odisha - 769008
            </h1>
            <div className="bg-[#A4161A] rounded-md w-2/3  lg:mt-2   flex items-center">
              <IoCall className="text-[#FFFFFF] flex justify-center  mr-2 lg:mr-5 text-md lg:text-3xl" />
              <a
                href="tel:+4733378901"
                className="text-[#FFFFFF] text-md lg:text-3xl"
              >
                +4733378901
              </a>
            </div>
            <div className="bg-[#A4161A] rounded-md w-2/3  lg:my-2   flex items-center ">
              <BsFillEnvelopeFill className="text-[#FFFFFF] flex justify-center mr-2 lg:mr-5 text-md lg:text-3xl" />
              <a
                href="mailto:sdbjwbdhij@gmail.com"
                className="text-[#FFFFFF]  text-md lg:text-2xl"
              >
                sdbjwbij@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ContactPage;
