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
    </Fade>
  );
}
