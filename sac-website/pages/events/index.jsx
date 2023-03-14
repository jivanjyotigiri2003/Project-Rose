import React from 'react'
import SocietyCarousel from '../../components/SocietyRepresentative/SocietyCarouselMobile';



export default function Events() {
  
  const eventData = [
    {
      image:
        "https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
     title: "Noteworthy technology acquisitions 2021",
      description:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image:
        "https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
     title: "Noteworthy technology acquisitions 2021",
      description:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image:
        "https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
     title: "Noteworthy technology acquisitions 2021",
      description:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image:
        "https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
     title: "Noteworthy technology acquisitions 2021",
      description:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      image:
        "https://ik.imagekit.io/tvfucug8t/image_766.png?updatedAt=1678715230940",
     title: "Noteworthy technology acquisitions 2021",
      description:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
 
  ];

  
  
  
  
  return (
    <div>
      {/* Events Hero */}
      <div className="bg-[url('https://res.cloudinary.com/dkqxnquga/image/upload/v1678430362/image_767_hnhpi2.png')] bg-no-repeat w-full bg-cover bg-center h-full">
        <div className="  bg-gradient-to-b from-[#850101cc] to-[#8501011a] bg-no-repeat w-full bg-cover bg-center h-full">
          <div className="bg-[#00000073] bg-no-repeat w-full bg-cover bg-center h-full">
            <div className="flex justify-center items-center h-screen">
              <h1
                className={
                 " text-white font-bold text-5xl text-center"
                }
              >
                EVENTS
              </h1>
            </div>
          </div>
        </div>
      </div>


     <div className="flex  items-center justify-center">

     <div className="grid grid-cols-3 space-y-5 place-content-center  ">
      {eventData.map((event,index)=>(
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-[1rem]" key={index}>
          <a href="#">
              <img class="rounded-t-lg" src={event.image} alt="" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{event.description}</p>
             
              <button type="button" class="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                  Webwiz
              </button>
      
       <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
           </div>
      )
      
        

        )
            
        
      }

     </div>
     
    

    
        
        
              </div>
        
      
    </div>
  )
}
