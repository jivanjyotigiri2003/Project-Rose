import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { motion, useScroll } from "framer-motion";
import SocialsLink from "../SocialsLink/SocialsLink";

const ClubHero = () => {
  return (
    <div className="xl:h-[70vh] lg:h-[60vh] md:h-[55vh] h-[50vh] w-full ">
      <div className=" fixed right-0 top-[50%] -translate-y-[50%] border-2 p-3 r bg-[white] z-[999] shadow-xl rounded-l-lg  ">
        <SocialsLink />
      </div>

      <div
        className=" h-60vh w-100vw mr-0 overflow-hidden "
        onScroll={console.log("object")}
      >
        {/* banner image */}
        <div className=" bg-[url('https://res.cloudinary.com/dzbax077h/image/upload/v1665156071/nitr_o5jm74.jpg')]  bg-no-repeat w-screen bg-cover bg-center md:h-[35vh] h-[30vh] "></div>
        {/*logo*/}
        <div className="relative round z-10 lg:ml-16 mx-auto  ">
          <Image
            src="https://res.cloudinary.com/dzbax077h/image/upload/v1677689847/WEBWIZ_BLACK_BACKGROUD_LOGO_1_cjuiib.png"
            width={400}
            height={400}
            className="round"
          />
          <style js>{`
        .round {
          border-radius: 100%;
          height:40vh;
          width: 40vh;
          // left:8rem;
          top:-20vh;
        }
        @media only screen and (max-width: 1250px) {
          .round{
            height:25vh;
            width: 25vh;
            top:-16vh;
          }
          @media only screen and (max-width: 900px) {
            .round{
              height:20vh;
              width: 20vh;
              top:-10vh;
            }
        }
        `}</style>
          <div className="w-[100vw] flex ">
            <div className="relative w-[40vw] lg:ml-[20%] xl:ml-[25%] md:-ml-[8rem] mt-2 -ml-24 lg:-mt-[1.5rem]  ">
              
                <h1 className="xl:text-4xl md:text-4xl text-lg text-bold bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 md:px-4 px-3 md:py-2 py-1 inline-flex text-white font-normal">WEBWIZ</h1>
               
                <div className="xl:text-2xl md:text-2xl lg:text-xl text-xs text-semibold md:mt-5 mt-1 ">
                  The development Society
                </div>
            </div>
            <div className="relative w-[45vw] lg:mr-[20%] xl:mr-[5%] md:ml-[6rem] mt-2 ml-4 lg:-mt-[1.5rem]  ">
              
                <h1 className="xl:text-4xl md:text-3xl text-lg text-bold">Founded in 2019</h1>
               
                <div className="md:text-2xl lg:text-xl xl:text-2xl text-xs  md:mt-5 mt-1 font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 md:px-4 px-3 md:py-2 py-1 inline-flex">
                  Active Members : 50
                </div>
            </div>
          </div>
        </div>
      </div>

     
        </div>
   
  );
};

export default ClubHero ;
