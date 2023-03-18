import Link from 'next/link.js';
import React from 'react'
import clubData from '../../data/data.js';

export default function ClubName({socName}) {
 
    
  
   
  
    const clubSocData=clubData.filter((club)=>{
      return socName == club.clubSociety;
    })
    
   return (

   <div className="w-screen relative  p-[2rem] bg-red-700 text-white">
       <h1 className="text-center text-[3rem]">Clubs </h1>
       <div className=" flex lg:flex-row flex-col items-center justify-center flex-wrap  glass">
       {clubSocData.map
       ((club,index)=>(
         <Link key={index} href={`/societies/${club.clubSociety}/${club.clubName}`} passHref>
          <div className="h-[12vh] lg:w-[28vw] w-[88vw] text-center flex items-center  p-[1rem] lg:m-[1rem] mb-[1rem] bg-[#ffff] text-black shadow-lg rounded-[10px] cursor-pointer" key={index}>
          <div className="xl:h-[5rem] xl:w-[5rem] lg:h-[4rem] lg:w-[4rem] md:h-[6rem] md:w-[6rem] h-[3rem] w-[3rem] rounded-[100%]  ">
             <img src={club.clubLogo} className="h-[100%] w-[100%] rounded-[100%] object-cover" />

          </div>
        
          <div className="relative md:text-4xl lg:text-xl text-xl  font-[600] w-[80%] flex items-center justify-center">
               {club.clubName}
          </div>
      </div>
     </Link>
       ))}
      
        
       </div>
       
   </div>
  )
}
