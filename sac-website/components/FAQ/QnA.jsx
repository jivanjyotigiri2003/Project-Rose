import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";


const QnA = ({question, answer, index}) => {
    const [isopen,setisopen]=useState(false);
  return (
      <div key={index} className="shadow-xl m-3.5 flex-col text-white">
          <div className={`bg-[#850101] p-3.5 transition-all duration-200 hover: cursor-pointer ${isopen ? "rounded-t-md" : "rounded-md"}`} onClick={() => setisopen(!isopen)}>
              <h3 className="flex justify-between">
                  {question} &nbsp;
                  {isopen && (
                      <IoIosArrowUp className="inline" color="white" />
                  )}
                  {!isopen && (
                      <IoIosArrowDown className="inline" color="white" />
                  )}
              </h3>
          </div>
          {isopen && (
              <div className={`bg-[#e5383b] p-3.5 rounded-b-md transition`}>
                  {answer}
              </div>
          )}
      </div>
  )
}

export default QnA