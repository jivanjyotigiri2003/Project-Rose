import FestCarousel from "./FestCarousel";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import { useState,useEffect,useRef } from "react"; 




const Carousel=()=>{
  const [carousel,setCarousel]=useState(data)
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 1540;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 1540;
}
  


  return (
    <div className="relative">
      <div className="absolute hidden xl:flex   space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div id="content" className="carousel  flex  items-center justify-start overflow-x-auto scroll-smooth p-4 scrollbar-hide scrollbar-width:none  ">
        {carousel.map((data)=>{
          return(
            <div>
               <FestCarousel
            key={data.id}
            name={data.name}
            desc={data.desc}
            link={data.link}
            img={data.img}
            />

            </div>
           
          )
        })}
        <div className="absolute w-full top-1/2 transform -translate-y-1/2  hidden xl:flex justify-between items-center">
        <button
          className="bg-black text-white p-1   rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={scrollLeft}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 mr-2  rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={scrollRight}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
      </div>
    </div>
  );
      } 

export default Carousel;