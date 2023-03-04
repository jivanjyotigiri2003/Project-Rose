import Image from 'next/image';
import React, { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import faq from '../../public/faq.webp';

const FAQ = () => {
  {/* quesion is the question and ans is the answer to the question itself*/}
  {/* Similarly more and more can be added and removed*/}
  const questions = [
    { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.' },
    { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.' },
    { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.' },
    { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.' },
    { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.' },
    { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.' },
  ];
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const handleQuestionClick = (index) => {
    if (index === openQuestionIndex) {
      // if the clicked question is already open, close it
      setOpenQuestionIndex(null);
    } else {
      // otherwise, open the clicked question and close any others
      setOpenQuestionIndex(index);
    }
  };

  return (
    <div className="flex justify-between">
      <Image
        src={faq}
        alt="FAQ"
        className='h-screen w-6/12 clip-your-needful-style'
      />
      <div className='flex flex-col justify-center items-center w-full'>

        <h1
          className='text-3xl font-bold flex items-start w-4/5 m-3.5 mb-10 ml-10'
        >FAQs</h1>

        <div className='w-4/5'>
          {questions.map((q, index) => (
            <div key={index} className="shadow-xl m-3.5 flex-col text-white">
              <div className={`bg-[#850101] transition p-3.5 ${index === openQuestionIndex ? "rounded-t-md" : "rounded-md"}`} onClick={() => handleQuestionClick(index)}>
                <h3 className='flex justify-between'>{q.question} &nbsp;
                {index === openQuestionIndex && <IoIosArrowUp className='inline' color='white' />}
                {index !== openQuestionIndex && <IoIosArrowDown className='inline' color='white' />}
                </h3>
              </div>
              {index === openQuestionIndex && <div className={`bg-[#e5383b] p-3.5 rounded-b-md transition`}>{q.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ