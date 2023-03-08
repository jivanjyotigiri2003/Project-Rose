import React from "react";
const FestCarousel = ({name,category,desc,link,img})=> {


  return (
    <>
      <div className=" w-[100vw]  h-[100vh] rounded-lg shadow-lg flex justify-center text-white  ">
        <div className=" bg-black lg:flex flex-cols-2 xl:max-w-full  sm:h-full  lg:pl-8 ">   
        <div className="lg:ml-28 xl:ml-8 lg:mx-12 mx-8 w-full sm:my-0 flex flex-col justify-center lg:w-2/5 lg:h-[100vh] md:h-[40vh] sm:h-[50vh] h-[60vh]">
          <div className=" title font-semibold text-2xl xl:text-5xl lg:text-4xl sm:text-3xl md:text-4xl tracking-wide sm:my-3 md:my-6   ">
            Fests
          </div>
          <div className="category font-bold text-3xl xl:text-6xl md:text-4xl sm:text-3xl  tracking-wide lg:my-4 md:my-2">
            {name}
          </div>
          <div className="category text-xl sm:text-2xl xl:text-4xl md:text-4xl  font-semibold lg:my-4 my-2">
           {category}
          </div> 

          <p className="w-full flex justify-center  text-2xl xl:text-4xl sm:text-3xl my-4 md:text-5xl lg:text-3xl">
            {desc}
          </p>
          <div className="flex items-center my-2">
            <button className="border lg:my-3 md:px-4 py-4 text-lg xl:text-2xl sm:text-xl md:text-2xl rounded-lg my-3  ">Know More
              {link}
            </button>
          </div>
        </div>
        <div className="xl:w-[92vw] lg:w-[80vw] sm:w-[98vw] lg:h-[100vh] sm:h-[55vh] md:h-[60vh] mx-auto md:my-8 h-[40vh]">
          <img
            className="xl:h-full sm:h-[50vh] h-[40vh]  md:h-full sm:w-[98vw]  lg:object-contain object-cover   "src={img}
            alt="img"
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default FestCarousel;