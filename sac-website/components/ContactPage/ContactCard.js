import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";

const ContactCard = ({
  designation,
  name,
  email,
  color1,
  color2,
  color3,
  stroke,
}) => {
  return (
    <div
      className="w-[90%] md:w-[22vw] h-fit py-8  rounded-md"
      style={{ backgroundColor: color1 }}
    >
      <img
        src="https://ik.imagekit.io/gourab18/ps.jpg?updatedAt=1678788056792"
        alt=""
        className="w-[50%] md:w-36 h-[50%] md:h-36 mb-5 rounded-full shadow-lg mx-auto"
      />

      <div
        className="text-center font-semibold text-base lg:text-xl "
        style={{ color: color2 }}
      >
        {name}
      </div>

      <div className="text-center  text-lg mb-3" style={{ color: color2 }}>
        {designation}
      </div>
      <div className={stroke}></div>
      <div
        className="flex p-2 my-5 mx-auto w-[85%] rounded-lg h-fit  justify-center"
        style={{ backgroundColor: color3 }}
      >
        <BsFillEnvelopeFill
          className=" mr-3 lg:mt-1 -mt-0.5"
          style={{ color: color1 }}
        ></BsFillEnvelopeFill>
        <a
          href="mailto:sdbjwbdhij@gmail.com"
          className=" text-[0.5rem] sm:text-xs lg:text-sm xl:text-base"
          style={{ color: color1 }}
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
