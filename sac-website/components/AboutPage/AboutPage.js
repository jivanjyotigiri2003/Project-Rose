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
      <h1 className="w-[100%] text-3xl font-[600] p-4 text-center ">
        Executive Body
      </h1>
      <div className="grid grid-cols-[24vw_24vw] place-content-center gap-x-[10vw] pt-[2rem] gap-y-[10vh] pb-[1rem] max-[600px]:grid-cols-[80vw] ">
        {representative1.map((item, index) => {
          return (
            <div key={index} className="">
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
                  image="https://res.cloudinary.com/webwiznitr/image/upload/v1679067314/SacOfficials/_SMX0028_cenbfl.jpg"
                  // stroke={stroke}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* class  in society gallery.css */}
      <div className="grid grid-cols-[24vw_24vw_24vw] place-content-center gap-x-[10vw] pt-[2rem] gap-y-[10vh] pb-[2rem] max-[600px]:grid-cols-[80vw]">
        {representative2.map((item, index) => {
          return (
            <div key={index} className="">
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
                  image="https://res.cloudinary.com/webwiznitr/image/upload/v1679067314/SacOfficials/_SMX0028_cenbfl.jpg"
                  // stroke={stroke}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Group Photo */}

      <div className=" w-[100vw] h-[60vh] lg:h-[100vh] bg-[url('https://ik.imagekit.io/tvfucug8t/Screenshot_2023-03-18_at_4.40.06_AM.png?updatedAt=1679094625940')] ">
        <div className="absolute bg-gradient-to-b from-[#850101cc] to-[#8501011a] w-[100vw] h-[60vh] lg:h-[100vh] flex items-center justify-center  ">
          <div className="aspect-sqaure lg:h-[85vh] lg:w-[85vw]  rounded-[10px]">
            <img
              src="https://ik.imagekit.io/tvfucug8t/_SMX0035__1_.jpg?updatedAt=1679092223529"
              className="w-[100%] h-[100%] rounded-[10px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
