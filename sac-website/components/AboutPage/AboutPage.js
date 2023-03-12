import React from "react";
// import { image } from "";
import DeanSpeaks from "../DeanSpeaks/DeanSpeaks";
import AboutNITR from "./AboutNITR";

const AboutPage = () => {
  return (
    <div>
      <div>
        <div className="h-[100vh] w-[100vw] relative justify-center align-middle flex flex-col pb-4">
          <div className=" text-center tracking-wide text-6xl font-bold  text-white z-50 saturate-100 bg-cover top-0 left-0 ">
            About SAC
            <p className="  pt-10 text-xl font-semibold tracking-wide ">
              THE TECHNICAL SOCIETY OF STUDENT ACTIVITY CENTRE, NIT
              <br />
              ROURKELA IS PROUD TO PRESENT ITS WORKING AND
              <br />
              ENTOURAGE TO ALL THE TECHNOCRATS AND INNOVATORS OF
              <br />
              MODERN ERA.
            </p>
          </div>
          <div className="absolute z-10 saturate-100 bg-cover top-0 left-0 h-[100%] w-[100%] bg-[url('../public/heroimg.png')]"></div>
          <div className="absolute z-20 opacity-30 h-[100%] top-0 left-0 w-[100%] bg-[#0B0B0B]"></div>
          <div className="absolute z-40 opacity-30 h-[100%] top-0 left-0 w-[100%] bg-gradient-to-b from-[rgba(133,1,1,94)] to-[rgb(133,1,1)] "></div>
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
