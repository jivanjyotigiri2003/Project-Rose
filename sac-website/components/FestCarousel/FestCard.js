import React from "react";
const FestCarousel = ({ name, category, desc, link, img }) => {
  return (
    <div>
      <div className=" w-[100vw] rounded-lg shadow-lg flex justify-center text-white  ">
        <div className=" bg-black lg:flex flex-cols-2 xl:max-w-full xl:h-full ">
          <div className="  lg:mx-4 p-[1.4rem] w-full md:my-0 flex flex-col justify-center h-[50vh] lg:w-2/6 lg:h-[100vh] md:h-[45vh] sm:h-[50vh] my-4">
            <div className=" title font-semibold text-xl md:text-3xl tracking-wide lg:my-0 lg:text-2xl md:my-2 my-1 ">
              Fests
            </div>
            <div className="category font-bold text-2xl md:text-4xl lg:text-3xl tracking-wide my-1 md:my-2 lg:my-0">
              {name}
            </div>
            <div className="category text-lg md:text-3xl lg:text-2xl font-normal lg:my-2 md:my-2 my-1">
              {category}
            </div>

            <p className="w-full flex justify-center  text-md lg:text-lg xl:text-xl my-0 md:my-2 md:text-3xl ">
              {desc}
            </p>
            <div className="flex items-center my-2">
              <button className="border lg:my-2 px-2 py-2 text-lg rounded-lg my-2  ">
                Know More
                {link}
              </button>
            </div>
          </div>
          <div className="xl:w-[92vw] lg:w-4/6 md:w-[98vw] lg:h-[100vh] md:h-[55vh] h-[50vh] mx-auto md:my-8">
            <img
              className="xl:h-full sm:h-[50vh]  md:h-full sm:w-[98vw]  lg:object-contain  h-[50vh]   "
              src={img}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestCarousel;
