import React from "react";
import Image from "next/image";
// import dean from "../../public/dean.jpg";
import { Fade } from "react-awesome-reveal";

function DeanSpeaks({ data = "Dean Speaks" }) {
  const dean =
    "https://ik.imagekit.io/gourab18/101717_Paul_McLoughlin_MDD_129853__1_.jpg?updatedAt=1678787663649";
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className=" lg:flex bg-[#A4161A]">
        <div>
          <img
            src={dean}
            alt="FAQ"
            className="w-[100vw]  clip-your-needful-style-down md:w-[50vw] md:clip-your-needful-style h-[100%] "
          />
        </div>
        <div className="flex flex-col  justify-center lg:w-[50%] text-white p-[1rem]   pl-[2.5rem] pr-12 h-[100%]">
          <h1 className="transition ease-in-out delay-150  font-[500] text-[2rem] tracking-wide pb-[2rem] hover:underline underline-offset-5 ">
            {data}
          </h1>
          <div className="text-[1.2rem] ">
            I would request the students to have a little patience. Staying at
            home might have gotten boring now but I hope that they don’t feel
            disturbed. Today’s young generation is very vibrant, and they do not
            want to be stuck within the same four walls. But, the situation
            doesn’t allow us to have all the flexibility which we wish to have.
            I hope after the pooja vacations things change and soon all the
            students will be asked to return to campus.
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default DeanSpeaks;
