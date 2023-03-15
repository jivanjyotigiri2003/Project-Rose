// import ClubHero2 from "@/components/ClubHero/ClubHero2";

// import { Fade } from "react-awesome-reveal";
// import AboutNITR from "@/components/AboutPage/AboutNITR";
// import SocietyGallery from "../../components/SocietyGallery/SocietyGallery";


//       {/* <Footer/> */}
//     </div>
//   );
// }
import React, { useState } from "react";
//import SocialsLink from "../SocialsLink/SocialsLink";
import clubData from "../../data/data.js";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const Club = ({ name, tagline }) => {
  const [category, setCategory] = useState("");
  return (
    <div className="w-full h-[100vh] bg-[#a4161a] ">
      <div
        className="w-full md:h-full mt-0 absolute overflow-y-auto  
		"
      >
        <div class="w-full h-[18vh] flex rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto  justify-evenly "></div>
        <div className="m-6">
          <div className=" grid gap-4 lg:gap-10 grid-cols-2 lg:grid-cols-4">
            <button
              className="bg-slate-300 hover:bg-opacity-50 rounded-xl p-3"
              onClick={() => setCategory("")}
            >
              All Societies
            </button>
            <button
              className="bg-slate-300 hover:bg-opacity-50 rounded-xl p-3"
              onClick={() => setCategory("Technical Society")}
            >
              Technical Society
            </button>
            <button
              className="bg-slate-300 hover:bg-opacity-50 rounded-xl p-3"
              onClick={() => setCategory("Literary and Cultural Society")}
            >
              Literary and Cultural Society
            </button>
            <button
              className="bg-slate-300 hover:bg-opacity-50 rounded-xl p-3"
              onClick={() => setCategory("Film and Music Society")}
            >
              Film and Music Society
            </button>
            <button className="bg-slate-300 hover:bg-opacity-50 rounded-xl p-3">
              Games and Sports Society
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4  pt-4 mr-4">
            {category === "" &&
              clubData
                .sort((a, b) =>
                  a.name > b.name ? 1 : b.clubName > a.clubName ? -1 : 0
                )
                .map((club) => {
                  return (
                    <div className="flex flex-col justify-center items-center  p-3 text-center rounded-md bg-white shadow-2xl">
                      <div className="w-[15rem] h-[15rem] rounded-full">
                        <img
                          className="h-[100%] w-[100%] object-cover rounded-full test"
                          src="https://res.cloudinary.com/dzbax077h/image/upload/v1677689847/WEBWIZ_BLACK_BACKGROUD_LOGO_1_cjuiib.png"
                          alt=""
                        />
                      </div>
                      <div className="text-xl text-center mt-2">
                        {club.clubName}
                      </div>
                    </div>
                  );
                })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4  pt-4 mr-4">
            {category !== "" &&
              clubData
                .filter((club) => club.clubSociety === category)
                .sort((a, b) =>
                  a.name > b.name ? 1 : b.clubName > a.clubName ? -1 : 0
                )
                .map((club) => {
                  return (
                    <div className="flex flex-col justify-center items-center text-center p-3 rounded-md  bg-white shadow-2xl">
                      <div className="w-[15rem] h-[15rem] rounded-full">
                        <img
                          className="h-[100%] w-[100%] object-cover rounded-full test"
                          src="https://res.cloudinary.com/dzbax077h/image/upload/v1677689847/WEBWIZ_BLACK_BACKGROUD_LOGO_1_cjuiib.png"
                          alt=""
                        />
                      </div>
                      <div className="text-xl mt-2 text-center">
                        {club.clubName}
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
