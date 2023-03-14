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
                CONTACT
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact details - Main*/}
      <div className="w-screen h-[500px] md:h-[900px] lg:h-[900px]  bg-[#FFFFFF] -z-10">
        <div className=" relative">
          <div className="bg-[#A4161A]  absolute top-0 right-0 left-0 h-[35vh] md:h-[45vh] lg:h-[55vh] w-full">
            <div className=" mt-24 md:mt-56 lg:mt-16 xl:mt-44 grid grid-cols-2 ml-4 md:ml-12 lg:ml-32 xl:ml-64  relative">
              {/* card 1 */}
              <div className=" w-[165px] md:w-[320px] lg:w-[350px]  h-[360px] md:h-[600px] lg:h-[700px]  rounded-md overflow-hidden flex flex-col ">
                <div className="bg-[#fffceb] h-[30%] rounded-xl flex items-center justify-center">
                  <h1
                    className={
                      " text-[#A4161A] font-bold -mt-12 text-md md:text-4xl"
                    }
                  >
                    President Sac
                  </h1>
                </div>
                <div className="rounded-xl  h-[70%] bg-[#A4161A] mx-2 -mt-16">
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                    alt="..."
                    class="shadow rounded-full w-28 md:w-44 lg:w-48 mx-auto mt-6 lg:mt-9 align-middle border-none mb-3 md:mb-8"
                  />
                  <p className="flex justify-center  lg:my-8 text-white font-semibold  text-md md:text-2xl">
                    RRocky Dj Don
                  </p>
                  <div className="bg-[#FFFFFF] rounded-md my-2 md:my-5 lg:my-7 mx-1 lg:mx-2 lg:p-3 flex items-center">
                    <IoCall className="text-[#A4161A]  mx-1 2xl:mx-8 text-xs md:text-3xl" />
                    <a
                      href="tel:+4733378901"
                      className="text-[#A4161A] text-xs md:text-3xl"
                    >
                      +4733378901
                    </a>
                  </div>
                  <div className="bg-[#FFFFFF] rounded-md  mx-1 lg:my-5 lg:p-3 2xl:mx-5 flex items-center justify-evenly">
                    <BsFillEnvelopeFill className="text-[#A4161A] flex justify-center text-md md:text-3xl" />
                    <a
                      href="mailto:sdbjwbdhij@gmail.com"
                      className="text-[#A4161A]  text-xs md:text-2xl"
                    >
                      sdbjwj@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* card 2  */}
              <div className=" w-[165px] md:w-[320px] lg:w-[350px]  h-[360px] md:h-[600px] lg:h-[700px]  rounded-md overflow-hidden flex flex-col ">
                <div className="bg-[#fffceb] h-[30%] rounded-xl flex items-center justify-center">
                  <h1
                    className={
                      " text-[#A4161A] font-bold -mt-12 text-md md:text-4xl"
                    }
                  >
                    Dean SW
                  </h1>
                </div>
                <div className="rounded-xl  h-[70%] bg-[#A4161A] mx-2 -mt-16">
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                    alt="..."
                    class="shadow rounded-full w-28 md:w-44 lg:w-48 mx-auto mt-6 lg:mt-9 align-middle border-none mb-3 md:mb-8"
                  />
                  <p className="flex justify-center  lg:my-8 text-white font-semibold  text-md md:text-2xl">
                    RRocky Dj Don
                  </p>
                  <div className="bg-[#FFFFFF] rounded-md my-2 md:my-5 lg:my-7 mx-1 lg:mx-2 lg:p-3 flex items-center">
                    <IoCall className="text-[#A4161A]  mx-1 2xl:mx-8 text-xs md:text-3xl" />
                    <a
                      href="tel:+4733378901"
                      className="text-[#A4161A] text-xs md:text-3xl"
                    >
                      +4733378901
                    </a>
                  </div>
                  <div className="bg-[#FFFFFF] rounded-md  mx-1 lg:my-5 lg:p-3 2xl:mx-5 flex items-center justify-evenly">
                    <BsFillEnvelopeFill className="text-[#A4161A] flex justify-center text-md md:text-3xl" />
                    <a
                      href="mailto:sdbjwbdhij@gmail.com"
                      className="text-[#A4161A]  text-xs md:text-2xl"
                    >
                      sdbjwj@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lcs representatives */}
      <div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1720px] xl:h-[1850px] bg-[#FFFFFF] -z-10">
        <div className=" relative">
          <div className="bg-[#A4161A] absolute top-0 right-0 left-0 h-[50vh] lg:h-[65vh] w-full   ">
            <h1 className="text-white font-semibold text-center text-xl md:text-3xl mt-20 lg:mt-16 xl:mt-28 lg:text-4xl ">
              LCS Representatives
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-3 mx-1 md:mx-14 lg:ml-20 xl:ml-28 mt-24 lg:mt-16 xl:mt-32 gap-10  relative">
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

      {/* fms representatives */}
      <div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1720px] xl:h-[1850px] bg-[#FFFFFF] -z-10">
        <div className=" relative">
          <div className="bg-[#A4161A] absolute top-0 right-0 left-0 h-[50vh] lg:h-[65vh] w-full   ">
            <h1 className="text-white font-semibold text-center text-xl md:text-3xl mt-20 lg:mt-16 xl:mt-28 lg:text-4xl ">
              FMS Representatives
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-3 mx-1 md:mx-14 lg:ml-9 xl:ml-28 mt-24 lg:mt-16 xl:mt-32 gap-10  relative">
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

      {/* Technical representatives */}
      <div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1720px] xl:h-[1850px] bg-[#FFFFFF] -z-10">
        <div className=" relative">
          <div className="bg-[#A4161A] absolute top-0 right-0 left-0 h-[50vh] lg:h-[65vh] w-full   ">
            <h1 className="text-white font-semibold text-center text-xl md:text-3xl mt-20 lg:mt-16 xl:mt-28 lg:text-4xl ">
              Technical Representatives
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-3 mx-1 md:mx-14 lg:ml-9 xl:ml-28 mt-24 lg:mt-16 xl:mt-32 gap-10  relative">
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
      <div className="w-screen h-[1450px] md:h-[2200px] lg:h-[1720px] xl:h-[1850px] bg-[#FFFFFF] -z-10">
        <div className=" relative">
          <div className="bg-[#A4161A] absolute top-0 right-0 left-0 h-[50vh] lg:h-[65vh] w-full   ">
            <h1 className="text-white font-semibold text-center text-xl md:text-3xl mt-20 lg:mt-16 xl:mt-28 lg:text-4xl ">
              Games & Sports Representatives
            </h1>

            <div className="grid grid-cols-2 lg:grid-cols-3 mx-1 md:mx-14 lg:ml-9 xl:ml-28 mt-24 lg:mt-16 xl:mt-32 gap-10  relative">
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
    </div>
  );
}

export default ContactPage;
