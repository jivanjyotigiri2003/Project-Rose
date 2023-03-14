import React from "react";
import { IoCall } from "react-icons/io5";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import faq from "../../public/faq.webp";
import ProfileCard from "../ProfileCard/ProfileCard";
import dean from "../../public/dean.jpg";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

function ContactPage() {
  return (
    <div className="">
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
      <div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1000px] 2xl:h-[1200px] bg-[#FFFFFF] -z-10">
        <div className=" relative">
          <div className="bg-[#A4161A]  absolute top-0 right-0 left-0 h-[45vh] md:h-[50vh] w-full">
            <div className=" mt-40  md:mt-72 lg:mt-32 grid grid-cols-2 md:mx-12 lg:mx-44 xl:mx-56 mx-4 relative">
              <ProfileCard designation={"President SAC"} />
              <ProfileCard designation={"Dean SW"} />
            </div>
          </div>
        </div>
      </div>

      {/* Lcs representatives */}
 <div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1950px] xl:h-[2080px] bg-[#FFFFFF] -z-10">
 <div className=" relative">
   <div className="bg-[#A4161A] absolute top-0 right-0 left-0 h-[50vh] w-full   ">
     <h1 className="text-white font-semibold text-center text-xl md:text-3xl mt-20  lg:text-4xl ">
       LCS Representatives
     </h1>

     <div className="grid grid-cols-2 lg:grid-cols-3 mx-1 md:mx-14 lg:mx-8 xl:mx-28 mt-24 lg:mt-32 xl:mt-12 gap-10  relative">
       <ProfileCard designation={"Vice President"} />
       <ProfileCard designation={"Vice President"} />
       <ProfileCard designation={"Secretary"} />
       <ProfileCard designation={"Secretary"} />
       <ProfileCard designation={"Secretary"} />
       <ProfileCard designation={"Secretary"} />
     </div>

     <div className="w-full flex mt-7 lg:mt-14 justify-center items-center">
       <button className="flex flex-col items-center justify-center ">
         <h1 className={" text-[#A4161A]  font-semibold  text-xl"}>
           See More
         </h1>
         <BiChevronDown className="text-[#A4161A] text-2xl" />
       </button>
     </div>
   </div>
 </div>
</div>
  
  
      
    </div>
  );
}

export default ContactPage;
