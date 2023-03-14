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
      <DeanSpeaks data="About SAC" />
      <AboutNITR />
      <DeanSpeaks data="Vision" />
      <AboutNITR />
    </div>
  );
};

export default AboutPage;





