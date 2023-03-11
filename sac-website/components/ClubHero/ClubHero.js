import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { motion, useScroll } from "framer-motion";
import SocialsLink from "../SocialsLink/SocialsLink";

const ClubHero = () => {
  return (
    <div>
      <div className=" fixed right-2 top-[50%] -translate-y-[50%]">
        <SocialsLink />
      </div>

      <div
        className=" h-60vh w-100vw mr-0 overflow-hidden "
        onScroll={console.log("object")}
      >
        {/* banner image */}
        <div className=" bg-[url('https://res.cloudinary.com/dzbax077h/image/upload/v1665156071/nitr_o5jm74.jpg')]  bg-no-repeat w-screen bg-cover bg-center h-[35vh] "></div>
        {/*logo*/}
        <div className="relative round z-10 ml-16">
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
          <div className="w-[100vw]">
            <div className="relative w-fit ml-[20%] lg:mr[2%] -top-12">
              
                <h1 className="md:text-5xl text-3xl text-bold">WEBWIZ</h1>
               
                <div className="md:text-2xl text-xl text-semibold mt-5 w-max">
                  The web-development club
                </div>
             
            </div>
          </div>
        </div>
      </div>

     
        </div>
   
  );
};

export default ClubHero ;
