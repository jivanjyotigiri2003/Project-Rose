import React from "react";
import Image from "next/image";
import dean from "../../public/dean.jpg";
import { Fade } from "react-awesome-reveal";

function DeanSpeaks() {
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className=" lg:flex bg-[#A4161A]">
        <div>
          <Image
            src={dean}
            alt="FAQ"
            className="w-[100vw]  clip-your-needful-style-down md:w-[50vw] md:clip-your-needful-style h-[100%] "
          />
        </div>
        <div className="flex flex-col  justify-center lg:w-[50%] text-white p-[1rem] pb-4  pl-2.5 pr-12 h-[100%]">
          <h1 className="transition ease-in-out delay-150  font-[500] text-[2rem] tracking-wide pb-[1rem] hover:underline underline-offset-5 ">
            Dean Speaks
          </h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default DeanSpeaks;
