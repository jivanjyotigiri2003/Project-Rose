import React from "react";
import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import dean from "../../public/dean.jpg";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import SocietyContactCard from "./SocietyContactCard";

function ContactPage() {
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

      {/* Contact details - Main*/}

      <div className="w-full h-[50vh] bg-[#A4161A] flex space-x-4 px-4 justify-around pt-[25vh] md:pt-[20vh] pb-[5vh]">
        <div className="w-[50%] md:w-[30%] pt-4 pb-24 bg-white rounded-md">
          <div className="text-red-600 text-center font-semibold text-xl">
            President SAC
          </div>
          <div className="bg-[#A4161A] w-[80%] h-64 md:h-80 mx-auto mt-3 rounded-md p-2">
            <img
              src="https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792"
              alt=""
              className="w-28 md:w-36 h-28 md:h-36 mb-3 rounded-full shadow-lg mx-auto"
            />
            <div className="text-center text-base lg:text-xl text-white">
              Prof. Poonam Singh
            </div>
            <div className="flex pt-5 justify-center">
              <BsFillEnvelopeFill className="text-white mr-0.5 mt-1"></BsFillEnvelopeFill>
              <a
                href="mailto:sdbjwbdhij@gmail.com"
                className="text-white text-[0.5rem] sm:text-xs lg:text-sm xl:text-base"
              >
                sdbjwbdhij@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* sfdsfsfsfsf*/}
        <div className="w-[50%] md:w-[30%] pt-4 pb-24 bg-white rounded-md">
          <div className="text-red-600 text-center font-semibold text-xl">
            President SAC
          </div>
          <div className="bg-[#A4161A] w-[80%] h-64 md:h-80 mx-auto mt-3 rounded-md p-2">
            <img
              src="https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792"
              alt=""
              className="w-28 md:w-36 h-28 md:h-36 mb-3 rounded-full shadow-lg mx-auto"
            />
            <div className="text-center text-base lg:text-xl text-white">
              Prof. Poonam Singh
            </div>
            <div className="flex pt-5 justify-center">
              <BsFillEnvelopeFill className="text-white mr-0.5 mt-1"></BsFillEnvelopeFill>
              <a
                href="mailto:sdbjwbdhij@gmail.com"
                className="text-white text-[0.5rem] sm:text-xs lg:text-sm xl:text-base"
              >
                sdbjwbdhij@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:h-[40vh] h-[30vh]"></div>

      {/* SOCIETIES */}
      <Fade direction="up" triggerOnce="true" delay="50">
        <SocietyContactCard societyTitle="LCS REPRESENTATIIVES" />
      </Fade>
      <Fade direction="up" triggerOnce="true" delay="50">
        <SocietyContactCard societyTitle="FMS REPRESENTATIIVES" />
      </Fade>
      <Fade direction="up" triggerOnce="true" delay="50">
        <SocietyContactCard societyTitle="TECHNICAL REPRESENTATIIVES" />
      </Fade>
      <Fade direction="up" triggerOnce="true" delay="50">
        <SocietyContactCard societyTitle="GAMES AND SPORTS REPRESENTATIIVES" />
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
          <div className="flex flex-col lg:mt-48 justify-center lg:w-[50%] text-white p-[1rem] pb-4  pl-2.5 pr-12 h-[100%]">
            <h1 className="font-bold text-xl lg:text-6xl mb-8">
              SAC Office Address
            </h1>
            <h1 className=" text-md lg:text-3xl mb-1 lg:mb-3">
              Student Activity Center
            </h1>
            <h1 className=" text-md lg:text-3xl mb-1 lg:mb-3">
              National Institute of Technology Rourkela
            </h1>
            <h1 className=" text-md lg:text-3xl mb-1 lg:mb-3">
              Rourkela , Odisha - 769008
            </h1>
            <div className="bg-[#A4161A] rounded-md w-2/3  lg:mt-3   flex items-center">
              <IoCall className="text-[#FFFFFF] flex justify-center  mr-2 lg:mr-5 text-md lg:text-3xl" />
              <a
                href="tel:+4733378901"
                className="text-[#FFFFFF] text-md lg:text-3xl"
              >
                +4733378901
              </a>
            </div>
            <div className="bg-[#A4161A] rounded-md w-2/3  lg:my-5   flex items-center ">
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
