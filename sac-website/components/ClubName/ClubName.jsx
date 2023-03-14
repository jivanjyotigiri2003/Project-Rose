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

   <div className="w-screen relative test p-[2rem] bg-red-700 text-white">
       <h1 className="text-center text-[3rem]">Clubs </h1>
       <div className=" flex  items-center justify-center flex-wrap test">
       {clubData.map
       ((club,index)=>(
          <div className="h-[10vh] w-[28vw] test flex  items-center p-[1rem] m-[1rem] bg-[#ffff] text-black shadow-lg rounded-[10px]" key={index}>
          <div className="h-[5rem] w-[5rem] rounded-[100%] mr-[4rem]">
             <img src={club.image} className="h-[100%] w-[100%] rounded-[100%] object-cover" />

          </div>
        
          <div className=" text-xl font-[600] ">
               {club.clubName}
          </div>
      </div>
     
       ))}
      
        
       </div>
       
   </div>
  )
}
