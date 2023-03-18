import React from "react";
import { IoCall } from "react-icons/io5";

const ClubCard = ({ name, designation, phone }) => {
  return (
    <div
      className="w-[90%] md:w-[22vw] h-fit py-8  rounded-md"
      style={{
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: "1rem",
      }}
    >
      <div
        className="text-center font-semibold text-base lg:text-xl "
        style={{ color: "black" }}
      >
        {name}
      </div>

      <div className="text-center  text-lg mb-3" style={{ color: "black" }}>
        {designation}
      </div>
      {/* <div className={stroke}></div> */}
      <div
        className="flex p-2 my-5 mx-auto w-[85%] rounded-lg h-fit  justify-center"
        style={{ backgroundColor: "red" }}
      >
        <IoCall className=" mr-3 lg:mt-1 -mt-0.5" style={{ color: "white" }} />
        <a
          href="mailto:sdbjwbdhij@gmail.com"
          className=" text-[0.5rem] sm:text-xs lg:text-sm xl:text-base"
          style={{ color: "white" }}
        >
          {phone}
        </a>
      </div>
    </div>
  );
};

export default ClubCard;
