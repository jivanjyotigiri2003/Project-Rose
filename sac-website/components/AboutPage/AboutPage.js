import React from "react";
// import { image } from "";
import DeanSpeaks from "../DeanSpeaks/DeanSpeaks";
import AboutNITR from "./AboutNITR";
import ContactCard from "../ContactPage/ContactCard";

const AboutPage = () => {
  const representative1 = [
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

  const representative2 = [
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
      <h1 className="w-[100%] text-3xl font-[600] p-4 text-center ">
        SAC Representatives
      </h1>
      <div
        className="grid grid-cols-[24vw_24vw] place-content-center gap-x-[10vw] pt-[2rem] gap-y-[10vh] pb-[1rem] max-[600px]:grid-cols-[80vw] "
        // style={{
        //   display: "grid",
        //   gridTemplateColumns: "24vw 24vw",
        //   placeContent: "center",
        //   columnGap: "10vw",
        //   paddingTop: "2rem",
        // }}
      >
        {representative1.map((item, index) => {
          return (
            <div key={index} className="">
              {/* <div className="w-[15rem] h-[15rem]  rounded-[100%]  m-[1rem] drop-shadow-xl shadow-2xl">
                <img
                  src={item.officialsImage}
                  alt="officialsImage"
                  className="w-[100%] h-[100%] rounded-[100%] object-cover"
                />
              </div>

              <h2 className="font-bold text-lg">{item.name}</h2>
              <h5 className="text-lg">{item.designation}</h5> */}
              <div
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContactCard
                  name="Prof. Poonam Singh"
                  designation="President SAC"
                  email="sdbjwbdhij@gmail.com"
                  color1="white"
                  color2="black"
                  color3="red"
                  // stroke={stroke}
                />
                {/* <ContactCard
                  name="Prof. Poonam Singh"
                  designation="President SAC"
                  email="sdbjwbdhij@gmail.com"
                  // color1={color1}
                  // color2={color2}
                  // color3={color3}
                  // stroke={stroke}
                /> */}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="w-[100%]  flex justify-center lg:justify-between items-center p-[2rem] lg:px-[12rem]  flex-wrap ">
        {representative2.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[20rem] m-[2rem] flex flex-col justify-center items-center "
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
      </div> */}
      {/* class  in society gallery.css */}
      <div className="grid grid-cols-[24vw_24vw_24vw] place-content-center gap-x-[10vw] pt-[2rem] gap-y-[10vh] pb-[2rem] max-[600px]:grid-cols-[80vw]">
        {representative2.map((item, index) => {
          return (
            <div key={index} className="">
              {/* <div className="w-[15rem] h-[15rem]  rounded-[100%]  m-[1rem] drop-shadow-xl shadow-2xl">
                <img
                  src={item.officialsImage}
                  alt="officialsImage"
                  className="w-[100%] h-[100%] rounded-[100%] object-cover"
                />
              </div>

              <h2 className="font-bold text-lg">{item.name}</h2>
              <h5 className="text-lg">{item.designation}</h5> */}
              <div
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ContactCard
                  name="Prof. Poonam Singh"
                  designation="President SAC"
                  email="sdbjwbdhij@gmail.com"
                  color1="white"
                  color2="black"
                  color3="red"
                  // stroke={stroke}
                />
                {/* <ContactCard
                  name="Prof. Poonam Singh"
                  designation="President SAC"
                  email="sdbjwbdhij@gmail.com"
                  // color1={color1}
                  // color2={color2}
                  // color3={color3}
                  // stroke={stroke}
                /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutPage;
