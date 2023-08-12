import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutNITR({ data = "About NITR", img, description }) {
  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className=" lg:flex lg:flex-row flex   md:flex-row flex-col-reverse ">
        <div className="flex flex-col  justify-center items-start md:w-[50vw] lg:w-[50%] p-[2rem] md:p-[2rem] lg:p-[1rem] lg:h-[75vh]  lg:pb-4  lg:pl-2.5 lg:pr-12 max-lg:h-[30vh]">
          <h1 className="transition ease-in-out delay-150  font-[500] lg:text-[2rem] max-lg:text-[1rem] tracking-wide pb-[1rem] md:pl-6">
            {data}
          </h1>
          <div className="lg:text-[1.2rem] max-lg:text-[0.93rem] md:pl-6">
            {description}
          </div>
        </div>
        <div>
          <LazyLoadImage
            src={img}
            alt="FAQ"
            height={"100"}
            className="w-[100vw]  clip-your-needful-style-down md:w-[50vw] h-[100%] md:clip-your-needful-style-right object-cover"
          />
        </div>
      </div>
    </Fade>
  );
}
