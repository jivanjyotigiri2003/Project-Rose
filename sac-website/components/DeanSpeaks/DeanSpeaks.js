import React from "react";
import Image from "next/image";
// import dean from "../../public/dean.jpg";
import { Fade } from "react-awesome-reveal";

function DeanSpeaks({
  data = "Dean Speaks",
  description,
  image = "https://res.cloudinary.com/webwiznitr/image/upload/f_auto,q_70/v1679159649/SAC_NITR_wkte8l.jpg",
}) {
  const dean =
    "https://ik.imagekit.io/gourab18/101717_Paul_McLoughlin_MDD_129853__1_.jpg?updatedAt=1678787663649";
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className=" md:flex justify-center items-center bg-[#A4161A]">
        <div>
          <img
            src={image}
            alt="FAQ"
            className="w-[100vw]  clip-your-needful-style-down md:w-[50vw] md:clip-your-needful-style h-[100%] object-cover shadow-2xl"
          />
        </div>
        <div className="flex flex-col  justify-center md:w-[50vw] lg:w-[50%] text-white   p-[1.5rem]   lg:pl-[2.5rem] lg:pr-12 h-[100%] ">
          <h1 className="transition ease-in-out delay-150  font-[500] text-[1rem] lg:text-[2rem] tracking-wide pb-[2rem]">
            {data}
          </h1>
          <div className="lg:text-[1.2rem] ">{description}</div>
        </div>
      </div>
    </Fade>
  );
}

export default DeanSpeaks;
