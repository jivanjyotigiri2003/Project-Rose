import React, { useState } from "react";
import FestCard from "./FestCard";
import data from "./data";
import FestCarousel from "./FestCarousel";
import { Fade } from "react-awesome-reveal";

export default function Carousel() {
  const [carousel, setCarousel] = useState(data);

  return (
    // <div className='w-screen h-[100vh] max-[500px]:h-[65vh] test'>
    <Fade direction="up" triggerOnce="true">
      <div className="flex flex-col w-full h-full">
      <div className=" title font-normal text-3xl md:text-5xl tracking-wide  lg:text-4xl   lg:px-10 px-6 p-12    w-full h-[4vh] bg-black text-white ">
              Fests
            </div>

     <div>
      <FestCarousel>
        {carousel.map((data) => {
          return (
            <div>
              <FestCard
                key={data.id}
                name={data.name}
                desc={data.desc}
                category={data.category}
                link={data.link}
                img={data.img}
              />
            </div>
          );
        })}
      </FestCarousel>
      </div>
      </div>
    </Fade>
     
  );
}
