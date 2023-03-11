import React, { useState } from 'react'
import SocietyCarousel from './SocietyCarousel'
import data from './data'
import FestCarousel from './FestCarousel';


export default function Carousel() {
  const [carousel,setCarousel]=useState(data);

  
  
  return (
    // <div className='w-screen h-[100vh] max-[500px]:h-[65vh] test'>
        <SocietyCarousel>

       
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
         </SocietyCarousel>   
    // </div>
  )
}
