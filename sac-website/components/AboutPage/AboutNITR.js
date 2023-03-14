import React from "react";
import Image from "next/image";
import dean from "../../public/dean.jpg";
import { Fade } from "react-awesome-reveal";

export default function AboutNITR() {
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className=" lg:flex flex flex-col-reverse ">
        <div className="flex flex-col  items-start  lg:w-[50%] text-sm p-[3rem] pb-4  pl-2.5 pr-12">
        <h1 className="transition ease-in-out delay-150  font-[500] text-[2rem] tracking-wide pb-[3rem] hover:underline underline-offset-5 ">
           About NITR
          </h1>
          <div className="text-[1.2rem] leading-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. 
          </div>
        </div>
        <div>
          <Image
            src={dean}
            alt="FAQ"
            className="w-[100vw]  clip-your-needful-style-down md:w-[50vw] md:clip-your-needful-style-right"
          />
        </div>
      </div>

    </Fade>
  );
}









