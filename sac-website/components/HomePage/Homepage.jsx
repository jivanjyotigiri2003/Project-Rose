import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeIcon from "./MarqueeIcon";

const Skew2 = () => {
  return (
    <div>
      <div className=" relative flex  h-[90vh] items-center  bg-[url('../public/img1.jpg')] bg-cover">
        <div className=" bg-black-100 w-[100%] h-[100%] pl-8 bg-[#A4161A]/70">
          <div className="pt-48">
            <p className=" text-white pb-5 text-3xl xl:text-4xl font-normal">
              welcome to student activity centre!
            </p>
            <p className="text-white text-5xl xl:text-7xl pb-4 font-medium ">
              Creative caliber <br /> at it's best
            </p>
            <p className=" text-white text-lg xl:text-xl">
              Explore the plethora of thrilling events, exciting <br /> fests,
              diverse clubs and other activities in the <br /> beautiful campus
              of NIT Rourkela.{" "}
            </p>
          </div>

          {/* <div className=" bg-orange-100 w-32 mt-10 rounded-md p-3">
            <p>whnt to know more</p>
          </div>
          <div className=" bg-orange-100 w-52 mt-3 rounded-md p-3">
            <p>scroll down to explore more</p>
          </div> */}

          {/* section for teh SVG ICON */}
          {/* <div className=" pt-3 cursor-pointer bg-slate-700 w-fit h-fit rounded-full">
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_63_2)">
                <circle cx="36" cy="32" r="32" fill="#E5383B" />
              </g>
              <path
                d="M37.0898 17.6184C37.0898 18.363 36.486 18.9665 35.7415 18.9665C34.9969 18.9665 34.3931 18.363 34.3931 17.6184C34.3931 16.8736 34.9969 16.27 35.7415 16.27C36.486 16.27 37.0898 16.8735 37.0898 17.6184Z"
                fill="white"
              />
              <path
                d="M35.7413 12.0003C32.0184 12.0003 29 15.019 29 18.7428V29.9767C29 33.7002 32.0184 36.7189 35.7413 36.7189C39.4643 36.7189 42.4827 33.7002 42.4827 29.9764V18.7425C42.4827 15.019 39.4643 12 35.7413 12V12.0003ZM41.5841 29.9768C41.5841 33.1986 38.9629 35.8203 35.7413 35.8203C32.5198 35.8203 29.8986 33.1989 29.8986 29.9768V18.7429C29.8986 15.5211 32.5198 12.8994 35.7413 12.8994C38.9629 12.8994 41.5841 15.5208 41.5841 18.7429V29.9768Z"
                fill="white"
              />
              <path
                d="M41.7156 38.6484L35.7414 44.6226L29.7672 38.6484C29.5915 38.4727 29.3073 38.4727 29.1318 38.6484C28.9561 38.8242 28.9561 39.1083 29.1318 39.2838L35.4237 45.5757C35.5112 45.6634 35.6263 45.7075 35.7414 45.7075C35.8565 45.7075 35.9716 45.6634 36.0591 45.5757L42.3509 39.2838C42.5267 39.1081 42.5267 38.8239 42.3509 38.6484C42.1754 38.4727 41.8913 38.4727 41.7155 38.6484H41.7156Z"
                fill="white"
              />
              <path
                d="M41.7156 44.9404L35.7414 50.9146L29.7672 44.9404C29.5915 44.7646 29.3073 44.7646 29.1318 44.9404C28.9561 45.1162 28.9561 45.4003 29.1318 45.5758L35.4237 51.8677C35.5112 51.9554 35.6263 51.9997 35.7414 51.9997C35.8565 51.9997 35.9716 51.9557 36.0591 51.868L42.3509 45.5761C42.5267 45.4003 42.5267 45.1162 42.3509 44.9407C42.1754 44.7646 41.8913 44.7646 41.7155 44.9404H41.7156Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_63_2"
                  x="0"
                  y="0"
                  width="72"
                  height="72"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_63_2"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_63_2"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div> */}
        </div>

        {/* The container for the image */}
        <div className=" absolute top-0 right-0 ml-10 max-w-6xl px-6 overflow-clip">
          <div className="flex ">
            {/* all images go inside the flex box */}
            <div className="ml-20 -skew-x-12 group relative h-[90vh] w-[13vw] cursor-pointer overflow-hidden transition-all duration-200 hover:w-[20vw]  shadow-[0_10px_20px_rgba(120,0,0,0.7)]">
              <img
                className="h-full object-cover transition-all duration-200 group-hover:scale-125 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg"
                alt=""
              />
              <div className=" invisible absolute inset-0 bg-gradient-to-b from-red-500/10 to-black group-hover:visible">
                <div className="p-5 insert-x-5 absolute bottom-6">
                  <div className="  flex gap-3 text-white"></div>
                  <div>
                    <p className="  text-xl font-semibold text-gray-100">
                      SAC Website
                    </p>
                    <p className=" text-gray-300">welcome to sac</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" -skew-x-12 group relative h-[90vh] w-[13vw] cursor-pointer overflow-hidden transition-all duration-200 hover:w-[20vw] shadow-[0_10px_20px_rgba(120,0,0,0.7)]">
              <img
                className="h-full object-cover transition-all duration-200 group-hover:scale-125"
                src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg"
                alt=""
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-red-500/20 to-black group-hover:visible">
                <div className=" p-5 insert-x-5 absolute bottom-6">
                  <div className="flex gap-3 text-white">
                    //we will have our svg links here
                  </div>
                  1
                  <div>
                    <p className="text-xl font-semibold text-gray-100">
                      Beyond Builder
                    </p>
                    <p className="text-gray-300">Better Design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" -skew-x-12 group relative h-[90vh] w-[13vw] cursor-pointer overflow-hidden transition-all duration-200 hover:w-[20vw] shadow-[0_10px_20px_rgba(120,0,0,0.7)]">
              <img
                className="h-full object-cover transition-all duration-200 group-hover:scale-125"
                src="http://thecodeplayer.com/uploads/media/00kih8g.jpg"
                alt=""
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className=" p-5 insert-x-5 absolute bottom-6">
                  <div className="flex gap-3 text-white">
                    //we will have our svg links here
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-100">
                      Beyond Builder
                    </p>
                    <p className="text-gray-300">Better Design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" -skew-x-12 -mr-28 group relative h-[90vh] w-[13vw] cursor-pointer overflow-hidden transition-all duration-200 hover:w-[20vw] shadow-[0_10px_20px_rgba(120,0,0,0.7)]">
              <img
                className="h-full object-cover transition-all duration-200 group-hover:scale-125"
                src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg"
                alt=""
              />
              <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                <div className=" p-5 insert-x-5 absolute bottom-6">
                  <div className="flex gap-3 text-white">
                    //we will have our svg links here
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-100">
                      Beyond Builder
                    </p>
                    <p className="text-gray-300">Better Design</p>
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
