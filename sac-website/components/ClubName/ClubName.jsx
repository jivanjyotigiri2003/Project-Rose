import React from 'react'

export default function ClubName() {
 
     const clubData=[
          {
              image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
              clubName:"Webwiz",
          },
          {
               image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
               clubName:"Webwiz",
           },
           {
               image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
               clubName:"Webwiz",
           },
           {
               image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
               clubName:"Webwiz",
           },
           {
               image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
               clubName:"Webwiz",
           },
           {
               image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
               clubName:"Webwiz",
           },
           {
               image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
               clubName:"Webwiz",
           },
           {
               image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
               clubName:"Webwiz",
           },
           {
               image:"https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
               clubName:"Webwiz",
           },
     ]
  

return (

   <div className="w-screen relative  p-[2rem] bg-red-700 text-white">
       <h1 className="text-center text-[3rem]">Clubs </h1>
       <div className=" flex lg:flex-row flex-col items-center justify-center flex-wrap  ">
       {clubData.map
       ((club,index)=>(
          <div className="h-[12vh] lg:w-[28vw] w-[100%]  flex items-center  p-[1rem] lg:m-[1rem] mb-[1rem] bg-[#ffff] text-black shadow-lg rounded-[10px]" key={index}>
          <div className="h-[5rem] w-[5rem] rounded-[100%]  ">
             <img src={club.image} className="h-[100%] w-[100%] rounded-[100%] object-cover" />

          </div>
        
          <div className="relative text-2xl  font-[600] w-[80%] flex items-center justify-center">
               {club.clubName}
          </div>
      </div>
     
       ))}
      
        
       </div>
       
   </div>
  )
}
