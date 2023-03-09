import React from "react";
const FestCarousel = ({name,category,desc,link,img})=> {


  return (
    <>
      <div className=" w-[100vw]  h-[100vh] rounded-lg shadow-lg flex justify-center text-white  ">
        <div className=" bg-black lg:flex flex-cols-2 xl:max-w-full xl:h-full ">   
        <div className="lg:ml-6 xl:ml-12 lg:mx-8 mx-8 w-full md:my-0 flex flex-col justify-center lg:w-2/6 lg:h-[100vh] md:h-[45vh] sm:h-[50vh]">
          <div className=" title font-semibold text-xl md:text-3xl tracking-wide lg:my-0 md:my-0 my-2 ">
            Fests
          </div>
          <div className="category font-bold text-2xl md:text-4xl tracking-wide my-1">
            {name}
          </div>
          <div className="category text-lg md:text-3xl lg:text-2xl font-normal lg:my-2 my-2">
           {category}
          </div> 

          <p className="w-full flex justify-center  text-md lg:text-xl my-1 md:text-2xl">
            {desc}
          </p>
          <div className="flex items-center my-2">
            <button className="border lg:my-2 px-2 py-2 text-lg rounded-lg my-2  ">Know More
              {link}
            </button>
          </div>
        </div>
        <div className="xl:w-[92vw] lg:w-4/6 md:w-[98vw] lg:h-[100vh] md:h-[55vh]  mx-auto md:my-8">
          <img
            className="xl:h-full sm:h-[50vh]  md:h-full sm:w-[98vw]  lg:object-contain object-cover   "src={img}
            alt="img"
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default FestCarousel;