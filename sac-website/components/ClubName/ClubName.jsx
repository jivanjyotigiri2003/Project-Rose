import Link from 'next/link.js';
import React from 'react'
import clubData from '../../data/data.js';

export default function ClubName({socName}) {
 
    
  
   
    console.log(clubData);
  
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
          <div className="h-[5rem] w-[5rem] rounded-[100%]  ">
             <img src="https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940" className="h-[100%] w-[100%] rounded-[100%] object-cover" />

          </div>
        
          <div className="relative text-2xl  font-[600] w-[80%] flex items-center justify-center">
               {club.clubName}
          </div>
      </div>
     </Link>
       ))}
      
        
       </div>
       
   </div>
  )
}
