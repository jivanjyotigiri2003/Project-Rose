import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";

const ContactCard = ({ designation, name, email }) => {
  return (
    <div className="w-[40vw] md:w-[30vw] pt-4 pb-24 h-48 bg-white rounded-md">
      <div className="text-red-600 text-center font-semibold text-xl">
        {designation}
      </div>
      <div className="bg-[#A4161A] w-[80%] h-64 md:h-80 mx-auto mt-3 rounded-md p-2">
        <img
          src="https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792"
          alt=""
          className="w-28 md:w-36 h-28 md:h-36 mb-3 rounded-full shadow-lg mx-auto"
        />
        <div className="text-center text-base lg:text-xl text-white">
          {name}
        </div>
        <div className="flex pt-5 justify-center">
          <BsFillEnvelopeFill className="text-white mr-0.5 lg:mt-1 -mt-0.5"></BsFillEnvelopeFill>
          <a
            href="mailto:sdbjwbdhij@gmail.com"
            className="text-white text-[0.5rem] sm:text-xs lg:text-sm xl:text-base"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
