import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);
import data from "./data";
 
 
import React,{useState} from 'react'
import FestCarousel from './FestCarousel';


const Carousel2 = () => {
    const [carousel,setCarousel]=useState(data)
    return (
      
  
      <AutoplaySlider
      fillParent={true}
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
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
     
  </AutoplaySlider>
  )
}

export default Carousel2
  
