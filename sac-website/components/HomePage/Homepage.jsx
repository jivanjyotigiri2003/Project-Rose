import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeIcon from "./MarqueeIcon";
import Link from "next/link";

const Skew2 = () => {
  return (
    <div className="web-hide">
      <div className=" relative flex items-center  h-[100vh]  bg-[url('https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940')] bg-cover">
        <div className=" bg-black-100 w-[100%] h-[100%] pl-8 bg-[#A4161A]/70 ">
          <div className="relative top-[25%] xl:mt-12 lg:mt-6  ">
            <h1 className=" text-white text-4xl xl:text-6xl font-normal my-2  pl-[6rem] ">
              <span className="font-semibold text-7xl">S</span>tudent
            </h1>
            <h1 className=" text-white text-4xl xl:text-6xl font-normal my-2  pl-[6rem]">
            <span className="font-semibold text-7xl">A</span>ctivity
            </h1>
            <h1 className=" text-white text-4xl xl:text-6xl font-normal my-2  pl-[6rem]">
            <span className="font-semibold text-7xl">C</span>enter
            </h1>
            <h1 className=" text-white text-lg xl:text-xl my-8 xl:pl-[2rem] lg:pl-[1rem]">
              Explore the plethora of thrilling events, exciting <br /> fests,
              diverse clubs and other activities in the <br/> beautiful campus
              of NIT Rourkela.{" "}
            </h1>
          </div>
        </div>

        {/* The container for the image */}
        <div className=" absolute top-0 right-0 ml-10 max-w-6xl px-20 overflow-clip">
          <div className="flex ">
            {/* all images go inside the flex box */}

            <div className="ml-20 -skew-x-12 group relative h-[100vh] w-[13vw] cursor-pointer overflow-hidden transition-all duration-200 hover:w-[20vw]  shadow-[0_10px_20px_rgba(120,0,0,0.7)]">
            <div className="h-full">
            <img 
                className="h-full object-cover transition-all duration-200 group-hover:scale-125 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                src="https://ik.imagekit.io/tvfucug8t/fms_3.png?updatedAt=1678715231100"
                alt=""
              />
            


              </div>
              <div className=" invisible absolute inset-0 bg-gradient-to-b from-red-500/10 to-black group-hover:visible">
                <div className="p-5 insert-x-5 absolute bottom-6">
                  <div className="  flex gap-3 text-white"></div>
                  <div>
                    <p className="  text-xl font-semibold text-gray-100">
                      Film & Music Society
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="  group relative h-[100vh] w-[11vw] cursor-pointer overflow-hidden transition-all duration-200 hover:w-[20vw] shadow-[0_10px_20px_rgba(120,0,0,0.7)]">
              <div className="h-full">
                <img
                  className="h-full object-cover transition-all duration-200 group-hover:scale-125"
                  src="https://ik.imagekit.io/tvfucug8t/315944295_683489136672980_8046188745263207622_n_1.png?updatedAt=1678715474291"
                  alt=""
                />
              </div>
              <div className="invisible absolute inset-0 bg-gradient-to-b from-red-500/20 to-black group-hover:visible">
                <div className=" p-5 insert-x-5 absolute bottom-6">
                  <div>
                    <p className="text-xl font-semibold text-gray-100">
                      Technical Society
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="  group relative h-[100vh] w-[11vw] cursor-pointer overflow-hidden transition-all duration-200 hover:w-[20vw] shadow-[0_10px_20px_rgba(120,0,0,0.7)]">
              <div className="h-full">
                <img
                  className="h-full object-cover transition-all duration-200 group-hover:scale-125"
                  src="https://ik.imagekit.io/tvfucug8t/299931819_5474832855928681_3837718550837062886_n_2.png?updatedAt=1678715222688"
                  alt=""
                />
              </div>

              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className=" p-5 insert-x-5 absolute bottom-6">
                  <div>
                    <p className="text-xl font-semibold text-gray-100">
                      Literary & Culture Society
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="  -mr-28 group relative h-[100vh] w-[11vw] cursor-pointer overflow-hidden transition-all duration-200 hover:w-[20vw] shadow-[0_10px_20px_rgba(120,0,0,0.7)]">
              <div className="h-full">
                <img
                  className="h-full object-cover transition-all duration-200 group-hover:scale-125"
                  src="https://ik.imagekit.io/tvfucug8t/313401932_672173041137923_522549174449123500_n_1.png?updatedAt=1678715228859"
                  alt=""
                />
              </div>

              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className=" p-5 insert-x-5 absolute bottom-6">
                  <div>
                    <p className="text-xl font-semibold text-gray-100">
                      Games and Sports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] flex  justify-between flex-row whitespace-nowrap bg-red-500">
        <Marquee gradientWidth="100" speed="75">
          <MarqueeIcon />
        </Marquee>
      </div>
    </div>
  );
};

export default Skew2;
