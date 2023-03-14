import React from "react";
import SocietyCarousel from "./SocietyCarouselMobile";
import { Fade } from "react-awesome-reveal";

export default function SocietyRepresentative({data='SAC Officials'}) {
  const representative = [
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
  ];

  return (

    <div className="w-screen ">

      <Fade direction="up" triggerOnce="true" delay="50">
        <h1 className="w-[100%] text-3xl font-[600] p-4 text-center ">{data}</h1>

        {/* For Desktop */}
        <div className="w-[100%]  flex justify-center items-center p-[2rem] flex-wrap">
          {representative.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[20rem] flex flex-col justify-center items-center "
              >
                <div className="w-[15rem] h-[15rem]  rounded-[100%]  m-[1rem] drop-shadow-xl shadow-2xl">
                  <img
                    src={item.officialsImage}
                    alt="officialsImage"
                    className="w-[100%] h-[100%] rounded-[100%] object-cover"
                  />
                </div>

                <h2 className="font-bold text-lg">{item.name}</h2>
                <h5 className="text-lg">{item.designation}</h5>
              </div>
            );
          })}
        </div>


      
      </Fade>
    </div>
  );
}
