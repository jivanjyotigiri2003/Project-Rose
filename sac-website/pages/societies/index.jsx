import React from 'react'
import Link from 'next/link'
import {useRouter}  from 'next/router';
export default function societies() {
  const router = useRouter();
  const {socID} = router.query;
    const socData=[
        {
            name:"Technical",
            image:"https://ik.imagekit.io/tvfucug8t/315944295_683489136672980_8046188745263207622_n_1.png?updatedAt=1678715474291",
        },
        {
            name:"Film & Music",
            image:"https://ik.imagekit.io/tvfucug8t/fms_3.png?updatedAt=1678715231100"
        },
        {
            name:"Literary & Culture",
            image:"https://ik.imagekit.io/tvfucug8t/299931819_5474832855928681_3837718550837062886_n_2.png?updatedAt=1678715222688",
        },
        {
            name:"Games & Sports",
            image:"https://ik.imagekit.io/tvfucug8t/313401932_672173041137923_522549174449123500_n_1.png?updatedAt=1678715228859"
        }
    ]
  
  
    return (
    <div className="h-screen w-screen flex ">
        <div className="absolute h-screen w-screen z-999 bg-black-500/[.8]"></div>
      {socData.map((soc,index)=>(
       
            <div className="w-[25%]  h:text-[5vw] h:shadow-lg" key={index}>
             <Link href={`/societies/${index+1}`}><h1 className="absolute h-[100%] w-[25%] p-[1rem] top-[40%] text-[3vw] text-vertical z-100 text-white text-center h:text-underline " >{soc.name} </h1> 
            </Link>
            <img src={soc.image} className="h-[100%] w-[100%] object-cover -z-10"/>
            </div>
       
      ))}
        
           
       

    </div>
  )
}
