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
  image,
}) => {
  return (
    <div
      className="w-[90%] md:w-[22vw] py-8 max-md:h-fit rounded-md px-1.5"
      style={{ backgroundColor: color1 }}
    >
      <div className="w-40 md:w-36 h-40 md:h-36 mb-5 rounded-full shadow-lg mx-auto ">
        <img
          src={image}
          alt=""
          className="h-[100%] w-[100%] rounded-full object-cover"
        />
      </div>

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
      <a
          href="mailto:sdbjwbdhij@gmail.com" target="_blank"
          className=" text-[0.5rem] sm:text-xs lg:text-sm xl:text-base"
          style={{ color: color1 }}
        >
      <div
        className="flex p-2 my-5 mx-auto w-[85%] rounded-lg h-fit  justify-center"
        style={{ backgroundColor: color3 }}
      >
        <BsFillEnvelopeFill
          className=" mr-3 lg:mt-1 -mt-0.5"
          style={{ color: color1 }}
        ></BsFillEnvelopeFill>
       
          {email}
       
      </div>
      </a>
    </div>
  );
};

export default ContactCard;
