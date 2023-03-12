import React from "react";
import SocietyCarousel from "./SocietyCarouselMobile";
import { Fade } from "react-awesome-reveal";

export default function SocietyRepresentative() {
  const representative = [
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
  ];

  return (
    <div className="w-screen">
      <Fade direction="up" triggerOnce="true" delay="50">
        <h1 className="w-[100%] h-[7%] text-[2vw] font-[600] p-4">
          Sac Officials
        </h1>

        {/* For Desktop */}
        <div className="max-[500px]:hidden w-[100%] h-[90%] flex justify-center items-center p-[2rem] flex-wrap border-2  ">
          {representative.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[20rem] flex flex-col justify-center items-center "
              >
                <div className="w-[15rem] h-[15rem]  test rounded-[100%]  m-[1rem] drop-shadow-xl shadow-2xl">
                  <img
                    src={item.officialsImage}
                    alt="officialsImage"
                    className="w-[100%] h-[100%] rounded-[100%] object-cover"
                  />
                </div>

                <h2 className="font-bold text-[1.1vw]">{item.name}</h2>
                <h5 className="text-[.9vw]">{item.designation}</h5>
              </div>
            );
          })}
        </div>

        {/* For Mobile */}

        <div className="min-[500px]:hidden h-[95%] flex justify-center items-center p-[2rem] flex-wrap border-2 border-solid border-indigo-500">
          <SocietyCarousel>
            {representative.map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-[20rem]  flex flex-col justify-center items-center m-[2rem] border-2 border-solid border-indigo-500"
                >
                  <div className="w-[15rem] h-[15rem]   rounded-[100%]  mb-[1rem] drop-shadow-xl">
                    <img
                      src={item.officialsImage}
                      alt="officialsImage"
                      className="w-[100%] h-[100%] rounded-[100%] object-cover"
                    />
                  </div>

                  <h2 className="font-bold text-[2.7vh]">{item.name}</h2>
                  <h5 className="text-[2vh]">{item.designation}</h5>
                </div>
              );
            })}
          </SocietyCarousel>
        </div>
      </Fade>
    </div>
  );
}
