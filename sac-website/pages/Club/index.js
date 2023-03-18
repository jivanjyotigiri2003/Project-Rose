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
import Link from "next/link";

const Club = ({ name, tagline }) => {
  const [category, setCategory] = useState("");
  const [active,setActive]=useState(0);
  return (
    <div className="w-full h-[100vh] bg-[#BA181B] ">
      <div
        className="w-full  h-full mt-0 absolute overflow-y-auto 
		"
      >
        <div class="w-full h-[10vh] flex rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto  justify-evenly "></div>
        <div className="m-6">
          <div className="flex flex-col my-2 ">
            <button
              className="shadow-xl  rounded-xl md:py-5 xl:py-3 md:px-24  my-8 p-6  bg-white hover:bg-red-600 hover:text-white mx-auto hover:scale-105 hover:transition duration-200"
              onClick={() => (setCategory(""))}
            >
              All Societies
            </button>

            <div className=" grid gap-4 lg:gap-10 grid-cols-2  lg:grid-cols-4  mx-4">
              <button
                className={`${active==1 ? "shadow-xl rounded-xl p-3 hover:bg-white hover:text-black bg-red-600 text-white" : "shadow-xl rounded-xl p-3 bg-white hover:bg-red-600 hover:text-black hover:scale-105 hover:transition duration-200"}`}
                onClick={() => {
                  setCategory("Technical Society")
                  setActive(1)
                }}

              >
                Technical Society
              </button>
              <button
                className={`${active==2 ? "shadow-xl rounded-xl p-3 hover:bg-white hover:text-black bg-red-600 text-white" : "shadow-xl rounded-xl p-3 bg-white hover:bg-red-600 hover:text-black hover:scale-105 hover:transition duration-200"}`}
                onClick={() =>{
                  setCategory("Literary and Cultural Society")
                  setActive(2)
                } 
              }
              >
                Literary and Cultural Society
              </button>
              <button
                className={`${active==3 ? "shadow-xl rounded-xl p-3 hover:bg-white hover:text-black bg-red-600 text-white" : "shadow-xl rounded-xl p-3 bg-white hover:bg-red-600 hover:text-black hover:scale-105 hover:transition duration-200"}`}
                onClick={() =>{
                  setCategory("Film and Music Society")
                  setActive(3)
                }  }
              >
                Film and Music Society
              </button>
              <button className={`${active==4 ? "shadow-xl rounded-xl p-3 hover:bg-white hover:text-black bg-red-600 text-white" : "shadow-xl rounded-xl p-3 bg-white hover:bg-red-600 hover:text-black hover:scale-105 hover:transition duration-200"}`}
                 onClick={() =>{
                  setCategory("Games and Sports Society")
                  setActive(4)
                }  }
              >
                Games and Sports Society
              </button>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4  pt-4 mr-4 glass"></div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4  pt-4 mr-4 glass mt-8">
            {category === "" &&
              clubData
                .sort((a, b) =>
                  a.name > b.name ? 1 : b.clubName > a.clubName ? -1 : 0
                )
                .map((club) => {
                  return (
                    <div className="flex flex-col items-center  px-3 py-12 text-center rounded-md bg-white shadow-2xl glow hover:scale-105 hover:transition duration-200">
                      <Link
                        href={`/societies/${club.clubSociety}/${club.clubName}`}
                        passHref
                      >
                        <div className="xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem] w-[14rem] h-[14rem] p-2   rounded-full">
                          <img
                            className="h-[100%] w-[100%] object-cover rounded-full "
                            src={club.clubLogo}
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link
                        href={`/societies/${club.clubSociety}/${club.clubName}`}
                        passHref
                      >
                        <div className="text-xl text-center mt-2 font-semibold">
                          {club.clubName}
                        </div>
                      </Link>

                      <div className="text-md text-center mt-2 font-normal px-4">
                        {club.clubTagline}
                      </div>
                    </div>
                  );
                })}
            {category !== "" &&
              clubData
                .filter((club) => club.clubSociety === category)
                .sort((a, b) =>
                  a.name > b.name ? 1 : b.clubName > a.clubName ? -1 : 0
                )
                .map((club) => {
                  return (
                    <div className="flex flex-col  items-center  px-3 py-12 text-center rounded-md bg-white shadow-2xl glow hover:scale-105 hover:transition duration-200">
                      <Link
                        href={`/societies/${club.clubSociety}/${club.clubName}`}
                        passHref
                      >
                        <div className="xl:w-[15rem] xl:h-[15rem] lg:w-[10rem] lg:h-[10rem] w-[14rem] h-[14rem] p-2   rounded-full">
                          <img
                            className="h-[100%] w-[100%] object-cover rounded-full "
                            src={club.clubLogo}
                            alt=""
                          />
                        </div>
                      </Link>
                      <Link
                        href={`/societies/${club.clubSociety}/${club.clubName}`}
                        passHref
                      >
                        <div className="text-xl text-center mt-2 font-semibold ">
                          {club.clubName}
                        </div>
                      </Link>

                      <div className="text-md text-center mt-2 font-normal px-4">
                        {club.clubTagline}
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