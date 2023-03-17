import React from "react";
import Image from "next/image";
import dean from "../../public/dean.jpg";
import { Fade } from "react-awesome-reveal";

export default function AboutNITR({ data = "About NITR" }) {
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className=" lg:flex lg:flex-row flex md:flex-row flex-col-reverse ">
        <div className="flex flex-col  items-start md:w-[50vw] lg:w-[50%] p-[1rem] md:p-[2rem] lg:p-[3rem]  lg:pb-4  lg:pl-2.5 lg:pr-12">
          <h1 className="transition ease-in-out delay-150  font-[500] lg:text-[2rem] tracking-wide pb-[3rem] hover:underline underline-offset-5 ">
           {data}
          </h1>
          <div className="lg:text-[1.2rem] ">
          I would request the students to have a little patience. Staying at
            home might have gotten boring now but I hope that they don’t feel
            disturbed. Today’s young generation is very vibrant, and they do not
            want to be stuck within the same four walls. But, the situation
            doesn’t allow us to have all the flexibility which we wish to have.
            I hope after the pooja vacations things change and soon all the
            students will be asked to return to campus.
          </div>
        </div>
        <div>
          <Image
            src={dean}
            alt="FAQ"
            className="w-[100vw]  clip-your-needful-style-down md:w-[50vw] h-[100%] md:clip-your-needful-style-right"
          />
        </div>
      </div>
    </Fade>
  );
}
