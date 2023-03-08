import React,{useState} from 'react'
import ImageSlider, { Slide } from "react-auto-image-slider";
import FestCarousel from './FestCarousel';

import data from './data';

const Carousel3 = () => {
    const [carousel,setCarousel]=useState(data)
  return (
    <div>    
        <ImageSlider effectDelay={1500} autoPlayDelay={4000}>
        
      {carousel.map((data)=>{
          return(
            <div>
               <FestCarousel
            key={data.id}
            name={data.name}
            desc={data.desc}
            category={data.category}
            link={data.link}
            img={data.img}
            />
            </div>        
          )
        })}    
      
    </ImageSlider>
  </div>
  )
}

export default Carousel3