import React from "react";
import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import faq from "../../public/faq.webp";
import ProfileCard from "../ProfileCard/ProfileCard";

function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Sac management page */}
      <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1678430362/image_767_hnhpi2.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen overflow-x-hidden">
        <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center min-h-screen">
          <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center min-h-screen">
            <div className="flex justify-center items-center min-h-screen">
              <h1 className={" text-white font-bold text-5xl text-center"}>
                SAC MANAGEMENT
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact details - Main*/}

      <div className="w-full min-h-screen relative">
        <div className="bg-[#A4161A] bg-no-repeat w-screen  bg-cover bg-center flex space-x-2 md:space-x-20 h-72 lg:h-[55vh]  lg:pt-[26vh]  px-[2vw] md:px-[20vw]">
          <ProfileCard designation={"President SAC"} />
          <ProfileCard designation={"Dean SW"} />
        </div>
        <div className="bg-[#FFFFFF] bg-no-repeat w-screen bg-cover bg-center h-[45vh]"></div>
      </div>

      {/* Lcs representatives */}
      <div className="w-full min-h-screen  relative">
        <div className="bg-[#A4161A] bg-no-repeat w-screen  bg-cover bg-center flex flex-col lg:h-[140rem] pt-[15vh]   ">
          <h1 className="text-white font-semibold text-center text-xl md:text-6xl pb-[10vh]">
            LCS Representatives
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[1.5rem] gap-y-[20rem] lg:gap-x-[4rem] lg:gap-y-[40rem] px-[1vw] lg:px-[5vw]">
            <ProfileCard designation={"Vice President"} />
            <ProfileCard designation={"Vice President"} />
            <ProfileCard designation={"Secretary"} />
            <ProfileCard designation={"Secretary"} />
            <ProfileCard designation={"Secretary"} />
            <ProfileCard designation={"Secretary"} />
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default ContactPage;
