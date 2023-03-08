import FestCarousel from "./FestCarousel";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel() {

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
      <div id="content" className="carousel  flex  items-center justify-start overflow-x-auto scroll-smooth p-4 scrollbar-hide scrollbar-width:none">

        {/* <div>
          <FestCarousel />
        </div>
        <div>
          <FestCarousel />
        </div>
        <div>
          <FestCarousel />  
        </div>
        <div>
          <FestCarousel />
        </div> */}
      </div>
    </div>
  );
      } 

export default Carousel;