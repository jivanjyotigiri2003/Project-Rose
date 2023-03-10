import React from 'react'
import { useState } from 'react';

import { BsArrowUpRight } from "react-icons/bs";

function EventPages({ color, img, content, i }) {
  console.log
  const [isHover, setIsHover] = useState({
    backgroundColor: color,
    zIndex: i + 1,
  });
  const handleMouseEnter = () => {
    setIsHover({
      backgroundColor: color,
      zIndex: i - 1
    });
  };

  const bgStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "35.33% auto",
    backgroundPosition: "left 0% bottom 0%",
    backgroundColor: color,
    zIndex: i,

  }

  const transition = {
    transition: "all 1s ease-in-out",
  }
  return (<>
    <div className="relative w-screen h-screen">
      <div className={`h-screen w-screen bg-no-repeat flex group absolute items-center`} style={bgStyle}>
        <h3 className='text-white pointer-events-none text-5xl font-semibold absolute left-[13%] top-[200px] opacity-0 group-hover:opacity-100 hidden lg:block lg:flex' style={transition}>
          {content}

          <BsArrowUpRight className='animate-bounce font-bold w-8 h-8 ml-4 mx-auto text-white' />
        </h3>
        <div className="lg:hidden left-[13%] absolute lg:text-[5em]  text-[2em] text-white font-semibold">
          <span className='flex justify-center items-center uppercase transition-all opacity-0 animate-[logo_3s_1_1s_linear_forwards]'>{content[0]}</span>
          <span className='flex justify-center items-center uppercase transition-all opacity-0 animate-[logo_3s_1_1.5s_linear_forwards]'>{content[1]}</span>
          <span className='flex justify-center items-center uppercase transition-all opacity-0 animate-[logo_3s_1_2s_linear_forwards]'>{content[2]}</span>
          <span className='flex justify-center items-center uppercase transition-all opacity-0 animate-[logo_3s_1_2.5s_linear_forwards]'>{content[3]}</span>
          <span className='flex justify-center items-center uppercase transition-all opacity-0 animate-[logo_3s_1_3s_linear_forwards]'>{content[4]}</span>
        </div>
      </div>
    </div>
  </>
  )
}

export default EventPages