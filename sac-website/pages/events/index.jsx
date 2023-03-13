import React from 'react'
import SocietyCarousel from '../../components/SocietyRepresentative/SocietyCarouselMobile';



export default function Events() {
  
  const representative = [
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
    },
    {
      officialsImage:
        "https://ik.imagekit.io/tvfucug8t/offimg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678449462704",
      name: "John Doe",
      designation: "President",
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


      {/* Cards Section */}

      <div className=" h-[80vh] flex justify-center items-center px-[2rem] flex-wrap ">
        <div className="absolute h-[40%] w-screen test -z-50 bg-red-600 self-start"></div>
        <SocietyCarousel>
            {representative.map((item, index) => {
              return (
                <div
                  key={index}
                  className="h-[50vh]  mx-[5.2vw] shadow-lg  flex flex-col  items-center bg-[#FFFCEB] p-[.8vw] rounded-[10px]"
                >
                  <div className="w-[20vw] h-[60%]  test   flex items-center justify-center ">
                    <img
                      src={item.officialsImage}
                      alt="officialsImage"
                      className="w-[100%] h-[100%]  object-cover"
                    />
                  </div>
                 <div className="h-[40%] w-[100%] flex flex-col items-center justify-center test bg-red-600 text-white">

                 <h2 className="font-bold text-[2.5vh] h-[20%] test">{item.name}</h2>
                  <h5 className="text-[2vh] h-[70%] test text-center text-[1vw] "> Lorem ipsum dolor sit amet. Rem reprehenderit itaque aut dolore tempora eum nihil  </h5>
                  <div className="h-[10%] text-[.8vw]  ">
                     {/* <span className="">15th June 2003</span> */}
                     <span>Read More {'>'}</span>
                  </div>
                 </div>

               
                </div>
              );
            })}
          </SocietyCarousel>
        </div>
      
    </div>
  )
}
