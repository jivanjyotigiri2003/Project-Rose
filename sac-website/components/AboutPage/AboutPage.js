import React from "react";
// import { image } from "";
import DeanSpeaks from "../DeanSpeaks/DeanSpeaks";
import AboutNITR from "./AboutNITR";

const AboutPage = () => {
  return (
    <div>
          <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1678430362/image_767_hnhpi2.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen overflow-x-hidden">
        <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center min-h-screen">
          <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center min-h-screen">
            <div className="flex justify-center items-center min-h-screen">
              <h1 className={" text-white font-bold text-5xl text-center"}>
                About SAC 
              </h1>
              
            </div>
          </div>
        </div>
      </div>
      <DeanSpeaks />
      <AboutNITR />
      <DeanSpeaks />
      <AboutNITR />
    </div>
  );
};

export default AboutPage;





 {/* Fms representatives */}
 <div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1950px] 2xl:h-[2080px] bg-[#FFFFFF] -z-10">
 <div className=" relative">
   <div className="bg-[#A4161A] absolute top-0 right-0 left-0 h-[50vh] w-full   ">
     <h1 className="text-white font-semibold text-center text-xl md:text-3xl mt-20 lg:mt-25 lg:text-6xl ">
       FMS Representatives
     </h1>

     <div className="grid grid-cols-2 lg:grid-cols-3 mx-1 md:mx-14 lg:mx-8 2xl:mx-28 mt-24 lg:mt-64 2xl:mt-40 gap-10  relative">
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

{/* technical representatives */}
<div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1950px] 2xl:h-[2080px] bg-[#FFFFFF] -z-10">
 <div className=" relative">
   <div className="bg-[#A4161A] absolute top-0 right-0 left-0 h-[50vh] w-full   ">
     <h1 className="text-white font-semibold text-center text-xl md:text-3xl mt-20 lg:mt-25 lg:text-6xl ">
       Technical Representatives
     </h1>

     <div className="grid grid-cols-2 lg:grid-cols-3 mx-1 md:mx-14 lg:mx-8 2xl:mx-28 mt-24 lg:mt-64 2xl:mt-40 gap-10  relative">
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

{/* g&s representatives */}
<div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1950px] 2xl:h-[2080px] bg-[#FFFFFF] -z-10">
 <div className=" relative">
   <div className="bg-[#A4161A] absolute top-0 right-0 left-0 h-[50vh] w-full   ">
     <h1 className="text-white font-semibold text-center text-xl md:text-3xl mt-20 lg:mt-25 lg:text-6xl ">
       Games & Sports Representatives
     </h1>

     <div className="grid grid-cols-2 lg:grid-cols-3 mx-1 md:mx-14 lg:mx-8 2xl:mx-28 mt-24 lg:mt-64 2xl:mt-40 gap-10  relative">
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