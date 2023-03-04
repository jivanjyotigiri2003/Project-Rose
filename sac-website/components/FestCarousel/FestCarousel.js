import React from "react";
const FestCarousel = ({name,category,desc,link,img})=> {


  return (
    <>
      <div className=" bg-black xl:w-[1490px] w-[400px] xl:h-[696px] h-[900px] lg:h-[1100px] md:h-[1200px] sm:h-[900px]   rounded-lg shadow-lg flex justify-center    text-white xl:mr-6 xl:px-2 mx-1 carousel">
        <div className="xl:flex flex-cols-2 xl:max-w-full  xl:h-full ">   
        <div className="flex flex-col justify-center  w-full h-2/6 xl:my-52 my-16 lg:my-24 md:my-36 sm:my-24 sm:w-5/6 md:w-5/6  xl:w-2/5  mx-8 md:mx-auto xl:mx-2  pl-2 carousel ">
          <div className="title font-semibold text-xl md:text-2xl xl:text-3xl my-1 tracking-wide ">
            Fests
          </div>
          <div className="category font-bold text-2xl md:text-3xl xl:text-4xl tracking-wide my-1">
            {name}
          </div>
          <div className="category text-lg md:text-xl xl:text-2xl font-normal my-2">
           {category}
          </div>

          <p className="w-3/4 flex justify-center  text-md xl:text-xl my-1">
            {desc}
          </p>
          <div className="flex items-center my-2">
            <button className="border xl:my-2 my-1 px-2 py-2 text-lg rounded-lg mr-1 ">Know More
              {link}
            </button>
          </div>
        </div>
        <div className=" justify-center  items-start w-full  mx-auto ">
          <img
            className=" xl:w-full xl:h-full h-[460px] md:h-[500px] sm:h-[360px] w-full  object-cover  p-2"src={img}
            alt="img"
          />
        </div>
        </div>
      </div>
    </>
  );
}

export default FestCarousel;