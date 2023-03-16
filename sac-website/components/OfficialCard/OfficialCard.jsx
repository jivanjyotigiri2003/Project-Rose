import React from 'react'

export default function OfficialCard({data}) {
  


    return (
    <div className="">
      
        {data.map((item, index) => {
            return (
              <div
                key={index}
                className="h-[20rem]  mx-[2vw]  flex flex-col justify-center items-center  "
              >
                <div className="w-[15rem] h-[15rem]  rounded-[100%]  m-[1rem] drop-shadow-xl shadow-2xl">
                  <img
                    src={item.officialsImage}
                    alt="officialsImage"
                    className="w-[100%] h-[100%] rounded-[100%] object-cover"
                  />
                </div>

                <h2 className="font-bold text-lg">{item.name}</h2>
                <h5 className="text-lg">{item.designation}</h5>
              </div>
            );
          })}
       </div>   
    
  )
}
