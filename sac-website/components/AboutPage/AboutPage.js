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
      <DeanSpeaks
        data="About SAC"
        img="https://res.cloudinary.com/webwiznitr/image/upload/v1679159649/SAC_NITR_wkte8l.jpg"
        description="Along with academic excellence, NIT Rourkela promotes extra-curricular activities to ensure all-round development of personality. The Student Activity Centre (SAC) is the central hub for student activities, student organizations, programming, events, sports, recreation and fun at the institute campus. The Student Activity Centre is organized into four primary societies and a host of satellite clubs. Besides, every society has satellite clubs that have their management under the overall supervision of SAC. The facility is devoted to student recreation and socialization to serve students, faculty, staff, alumni, and guests."
      />
      <AboutNITR
        img="https://i0.wp.com/orissadiary.com/wp-content/uploads/2022/07/NITR-Image.jpg?fit=1920%2C750&ssl=1"
        description="National Institute of Technology, Rourkela (NITR) embellishes a sound unit of consistency and diligence to emerge as one of the country's most flourishing educational organisations.
The institute takes pleasure in being the third-best National Institute of Technology, with rankings of 15th in the Engineering sector and 24th in the RnD domain among all participating colleges in NIRF 2022.
Since abiding the identification of NIT in 2002, we have worked to attain our full potential in every conceivable subject and domain. Our institute, owning the maximum number of branches by any NIT, features a student body of close to 6000 people passionate about their careers.
Diverse research shows that the NITR student community is continually engaged and focused on ways to develop improved and beneficial technology for the country and humanity."
      />
      {/* <DeanSpeaks data="Vision" /> */}

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
