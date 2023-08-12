import React from "react";
import SocietyCarousel from "./SocietyCarouselMobile";
import { Fade } from "react-awesome-reveal";

export default function SocietyRepresentative({ data = "SAC Officials" }) {
  const representative1 = [
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067314/SacOfficials/_SMX0028_cenbfl.jpg",
      name: "Prof. Poonam Singh",
      designation: "President",
    },
    // {
    //   officialsImage:
    //     "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
    //   name: "Prof. Poonam Singh",
    //   designation: "President",
    // },
    // {
    //   officialsImage:
    //     "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
    //   name: "Prof. Poonam Singh",
    //   designation: "President",
    // },
  ];
  const representative2 = [
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067307/SacOfficials/_SMX0005_zusai0.jpg",
      name: "Kaustav Chaudhury",
      designation: "Vice-President, Technical Society",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067310/SacOfficials/_SMX0008_olkbzm.jpg",
      name: "Prasun Chongder",
      designation: "Vice-President, Technical Society",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067300/SacOfficials/_SMX0031_d5jege.jpg",
      name: "Ramesh Kumar Mohapatra",
      designation: "Vice-President, Games and Sports Society",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067309/SacOfficials/_SMX0058_zr1azz.jpg",
      name: "Mayank Yadav",
      designation: "Vice-President, Games and Sports Society",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067300/SacOfficials/_SMX0025_tkytpq.jpg",
      name: "Winny Routray",
      designation: "Vice-President, Literary and Cultural Society",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067300/SacOfficials/_SMX0024_faohbx.jpg",
      name: "Sivaraman J.",
      designation: "Vice-President, Literary and Cultural Society",
    },

    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067308/SacOfficials/_SMX0013_aoss2e.jpg",
      name: "Balaji P.S.",
      designation: "Vice-President, Film and Music Society",
    },
    {
      officialsImage:
        "https://res.cloudinary.com/webwiznitr/image/upload/v1679067310/SacOfficials/_SMX0019_enah3a.jpg",
      name: "Binod Bihari Sahu",
      designation: "Vice-President, Film and Music Society",
    },
  ];

  const representative3 = [
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Rajendra Kar",
      designation: "SAS Officer",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "Nalini Nihar Nayak",
      designation: "SAS Officer",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792",
      name: "T R Pattnaik",
      designation: "SAS Officer",
    },
  ];

  return (
    <div className="w-screen ">
      <Fade direction="up" triggerOnce="true" delay="50">
        <h1 className="w-[100%] text-3xl font-[600] p-4 text-center ">
          {data}
        </h1>

        {/* For Desktop */}

        <div className="w-[100%]  flex justify-evenly items-center flex-wrap">
          {representative1.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[20rem]  flex flex-col justify-center items-center "
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

        <div className="w-[100%]  grid grid-cols-[22vw_22vw_22vw_22vw] gap-x-[3vw] place-content-center max-[950px]:grid-cols-[80vw]">
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

                <h2 className="font-bold text-lg text-center">{item.name}</h2>
                <h5 className="text-lg text-center">{item.designation}</h5>
              </div>
            );
          })}
        </div>

        <div className="w-[100%]  grid grid-cols-[22vw_22vw_22vw] gap-x-[8vw] place-content-center max-[950px]:grid-cols-[80vw]">
          {representative3.map((item, index) => {
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
        </div>
      </Fade>
    </div>
  );
}
