import React from "react";
// import { IoCall } from "react-icons/io5";
import { Avatar } from "@mui/material";
import { BsFillEnvelopeFill } from "react-icons/bs";

const ClubCard = ({ name, designation, email, imgsrc }) => {
  return (
    <div
      className="w-[90%] md:w-[22vw] h-fit py-8  rounded-md"
      style={{
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        margin: "1rem",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        // src="https://res.cloudinary.com/webwiznitr/image/upload/v1694627760/manavatar_z7rrut.avif"
        src={`${imgsrc}`}
        sx={{ width: 170, height: 170 }}
        className="m-auto"
      />
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
      <a
        className="flex p-2 my-2 md:my-5 mx-auto w-[85%] rounded-lg h-fit  justify-center"
        style={{ backgroundColor: "red" }}
        href={`mailto:${email}`}
      >
        <BsFillEnvelopeFill className="mx-1 my-auto text-white text-xl" />
        {/* <IoCall className=" mr-3 lg:mt-1 -mt-0.5" style={{ color: "white" }} /> */}
        <div
          className=" text-[0.5rem] sm:text-xs lg:text-sm xl:text-base my-auto"
          style={{ color: "white" }}
        >
          {email}
        </div>
      </a>
    </div>
  );
};

export default ClubCard;
