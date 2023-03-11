import React from "react";

import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
import faq from "../../public/faq.webp";
import ProfileCard from "../ProfileCard/ProfileCard";

function ContactPage() {
  return ( 
    <div className="relative">
      {/* Sac management page */}
      <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1678430362/image_767_hnhpi2.png')] bg-no-repeat w-full bg-cover bg-center h-full">
        <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center h-full">
          <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center h-full">
            <div className="flex justify-center items-center h-screen">
              <h1
                className={
                 " text-white font-bold text-5xl text-center"
                }
              >
                SAC MANAGEMENT
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact details - Main*/}

      <div className="w-[100%] h-screen relative">
        <div className="bg-[#A4161A] bg-no-repeat w-screen  bg-cover bg-center flex space-x-2 md:space-x-20 h-[55vh]  pt-[26vh] px-[2vw] md:px-[20vw]">
          <ProfileCard />
          <ProfileCard />
        </div>
        <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]"></div>
      </div>

      {/* Lcs representatives */}
      <div className="w-[100%] h-screen relative">
        <div className="bg-[#A4161A] bg-no-repeat w-screen  bg-cover bg-center flex flex-col h-[55vh] pt-[15vh]   ">
          <h1
            className="text-white font-semibold text-center text-xl md:text-6xl pb-[10vh]"
            
          >
            LCS Representatives
          </h1>

          <div className="flex space-x-1 md:space-x-10 px-[2vw] md:px-[8vw]">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
        <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]"></div>
        <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]">
          <div className="flex space-x-9 px-[5%]">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
        <div className="bg-[#FFFFFF] bg-no-repeat w-screen flex flex-col justify-end items-center bg-cover bg-center h-[45vh]">
          <h1 className={ " text-[#A4161A]  font-semibold  text-xl"}>
            See More
          </h1>
          <BiChevronDown className="text-[#A4161A] text-2xl" />
        </div>

        {/* fms representatives */}
        <div className="w-[100%] h-screen relative">
          <div className="bg-[#A4161A] bg-no-repeat w-screen  bg-cover bg-center flex flex-col h-[55vh] pt-[15vh]   ">
            <h1
              className={
                
                " text-white font-semibold text-xl md:text-6xl pb-[10vh] text-center"
              }
            >
              FMS Representatives
            </h1>

            <div className="flex space-x-1 md:space-x-10 px-[2vw] md:px-[8vw]">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
          <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]"></div>
          <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]">
            <div className="flex space-x-9 px-[5%]">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
          <div className="bg-[#FFFFFF] bg-no-repeat w-screen flex flex-col justify-end items-center bg-cover bg-center h-[45vh]">
            <h1
              className={" text-[#A4161A]  font-semibold  text-xl"}
            >
              See More
            </h1>
            <BiChevronDown className="text-[#A4161A] text-2xl" />
          </div>

          {/* technical representatives */}
          <div className="w-[100%] h-screen relative">
            <div className="bg-[#A4161A] bg-no-repeat w-screen  bg-cover bg-center flex flex-col h-[55vh] pt-[15vh]   ">
              <h1
                className={
                  
                  " text-white font-semibold text-xl md:text-6xl pb-[10vh] text-center"
                }
              >
                Technical Representatives
              </h1>

              <div className="flex space-x-1 md:space-x-10 px-[2vw] md:px-[8vw]">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
              </div>
            </div>
            <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]"></div>
            <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]">
              <div className="flex space-x-9 px-[5%]">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
              </div>
            </div>
            <div className="bg-[#FFFFFF] bg-no-repeat w-screen flex flex-col justify-end items-center bg-cover bg-center h-[45vh]">
              <h1
                className={
                  " text-[#A4161A]  font-semibold  text-xl"
                }
              >
                See More
              </h1>
              <BiChevronDown className="text-[#A4161A] text-2xl" />
            </div>

            {/* games & sports representatives */}
            <div className="w-[100%] h-screen relative">
              <div className="bg-[#A4161A] bg-no-repeat w-screen  bg-cover bg-center flex flex-col h-[55vh] pt-[15vh]   ">
                <h1
                  className={
                 
                    " text-white font-semibold text-xl md:text-6xl pb-[10vh] text-center"
                  }
                >
                  Games & sports Representatives
                </h1>

                <div className="flex space-x-1 md:space-x-10 px-[2vw] md:px-[8vw]">
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                </div>
              </div>
              <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]"></div>
              <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]">
                <div className="flex space-x-9 px-[5%]">
                  <ProfileCard />
                  <ProfileCard />
                  <ProfileCard />
                </div>
              </div>
              <div className="bg-[#FFFFFF] bg-no-repeat w-screen flex flex-col justify-end items-center bg-cover bg-center h-[45vh]">
                <h1
                  className={
                    " text-[#A4161A]  font-semibold  text-xl"
                  }
                >
                  See More
                </h1>
                <BiChevronDown className="text-[#A4161A] text-2xl" />
              </div>
              {/* sac address */}
              <div className=" lg:flex bg-[#A4161A]">
                <div>
                  <Image
                    src={faq}
                    alt="FAQ"
                    className="w-[100vw] clip-your-needful-style-down md:w-[50vw] md:clip-your-needful-style"
                  />
                </div>
                <div className="flex flex-col  items-start justify-start lg:w-[50%] py-20 pl-2.5 pr-12">
                  <h1
                    className={
                     
                      " text-[#FFFFFF]  font-semibold text-3xl md:text-5xl mb-5 md:mb-10"
                    }
                  >
                    SAC Office Address
                  </h1>
                  <h1
                    className={
                     
                      " text-[#FFFFFF]   text-xl md:text-3xl mb-3 md:mb-7"
                    }
                  >
                    Student Activity Centre
                  </h1>
                  <h1
                    className={
                    
                      " text-[#FFFFFF]   text-xl md:text-3xl mb-3 md:mb-7"
                    }
                  >
                    National Institute of Technology
                  </h1>
                  <h1
                    className={
                  
                      " text-[#FFFFFF]   text-xl md:text-3xl mb-3 md:mb-7"
                    }
                  >
                    Rourkela, Odisha -760004
                  </h1>

                  <div className="flex justify-center items-center mb-3 md:mb-7">
                    <IoCall className="text-[#FFFFFF] mr-10 text-xl md:text-3xl" />
                    <a
                      href="tel:+4733378901"
                      className="text-[#FFFFFF]  text-xl md:text-3xl"
                    >
                      +4733378901
                    </a>
                  </div>

                  <div className="flex justify-center items-center">
                    <BsFillEnvelopeFill className="text-[#FFFFFF] mr-10 text-xl md:text-3xl" />
                    <a
                      href="mailto:sdbjwbdhij@gmail.com"
                      className="text-[#FFFFFF]  text-xl md:text-3xl"
                    >
                      sdbjwbij@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
