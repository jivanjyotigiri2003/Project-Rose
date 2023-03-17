import React from "react";
import SocialsLink from "../SocialsLink/SocialsLink";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import DeanSpeaks from "../DeanSpeaks/DeanSpeaks";
const ClubHero2 = ({ name, tagline,logo }) => {
  return (
    <div className="w-full h-[100vh]  ">
      {/* <div className=" fixed right-0 top-[50%] -translate-y-[50%] border-2 p-3 r bg-[white] z-[999] shadow-xl rounded-l-lg  "> 
        <SocialsLink />
      </div> */}
      <div className="fixed right-0 top-[50%] -translate-y-[50%] border-2 p-3 r bg-[white]  z-[999] shadow-xl rounded-l-lg ">
        <a href="https://www.facebook.com/sac.nitr/" target="_blank">
          <FaFacebook size={32} color={"black"} className="mb-2 " />
        </a>
        <a href="https://www.instagram.com/nitrourkela1961/" target="_blank">
          <FaInstagram size={32} color={"black"} className="my-2" />
        </a>
        <a href="https://twitter.com/nitrourkela?lang=en" target="_blank">
          <FaTwitter size={32} color={"black"} className="my-2" />
        </a>
        <a
          href="https://www.linkedin.com/school/national-institute-of-technology-rourkela/"
          target="_blank"
        >
          <FaLinkedin size={32} color={"black"} className="mt-2" />
        </a>
      </div>
      <div
        className="w-full md:h-full mt-0 absolute   
		bg-no-repeat bg-cover bg-center
		bg-[url('https://res.cloudinary.com/dnqipwdsl/image/upload/v1678682263/webwiz_zgemsm.jpg')]"
      >
        <div class="w-full h-[33vh] max-w-sm  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto md:my-[30vh] my-[34vh]  ">
          <div class="flex flex-col items-center ">
            <img
              class="lg:w-52 lg:h-52 md:w-64 md:h-64 w-32 h-32 lg:mb-3 md:mb-5 mb-6 rounded-full shadow-lg  border-4"
              src={logo}
              alt="Bonnie image"
            />
            <h5 class="lg:my-2 md:my-4 my- md:text-4xl lg:text-3xl font-bold tracking-widest text-white ">
              {name}
            </h5>
            <span class="lg:text-sm xl:text-xl md:text-xl text-gray-300 text-center md:w-[50vw] lg:w-[36vw] w-[80vw] my-2 ">
              {tagline}{" "}
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubHero2;
