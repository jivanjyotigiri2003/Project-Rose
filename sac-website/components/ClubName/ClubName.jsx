import Link from "next/link.js";
import React from "react";
import clubData from "../../data/data.js";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ClubName({ socName }) {
  const clubSocData = clubData.filter((club) => {
    return socName == club.clubSociety;
  });

  return (
    <div
      className="w-screen relative bg-red-700 text-white ml-1 mr-1 "
      style={{
        margin: "auto",
      }}
    >
      <h1 className="text-center text-[3rem]">Clubs </h1>
      <div className=" flex lg:flex-row flex-col items-center justify-center flex-wrap pt-5 glass">
        {clubSocData.map((club, index) => (
          <Link
            key={index}
            href={`/societies/${club.clubSociety}/${club.clubName}`}
            passHref
          >
            <div
              className="h-[12vh] lg:w-[28vw] w-[88vw] text-center flex items-center  p-[1rem] lg:m-[1rem] mb-[1rem] bg-[#ffff] text-black shadow-lg rounded-[10px] cursor-pointer"
              key={index}
            >
              <div className="xl:h-[5rem] xl:w-[5rem] lg:h-[3rem] lg:w-[3rem] md:h-[6rem] md:w-[6rem] h-[3rem] w-[3rem] rounded-[100%]  ">
                <LazyLoadImage
                  src={club.clubLogo}
                  className="h-[90%] w-[90%] rounded-[100%] object-cover flex items-center mt-1"
                />
              </div>

              <div className="relative md:text-4xl lg:text-xl text-xl  font-[600] w-[80%] flex items-center justify-center">
                {club.clubName}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
