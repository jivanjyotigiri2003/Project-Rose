import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import QnA from "./QnA";

const FAQ = () => {
  {
    /* quesion is the question and ans is the answer to the question itself*/
  }
  {
    /* Similarly more and more can be added and removed*/
  }
  const questions = [
    {
      question: "Who is SAC?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "What SAC does?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Why to we need SAC?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic soluta, fuga temporibus voluptate velit fugiat rerum? Temporibus sunt necessitatibus quam.",
    },
  ];

  return (
    <Fade direction="up" triggerOnce="true" delay="50">
      <div className="flex flex-col-reverse justify-between md:flex-row overflow-hidden w-full">
        <div className="flex flex-col justify-center items-center w-full ">
          <h1 className="text-3xl font-bold flex items-center md:p-2 md:pt-4">
            FAQs
          </h1>

          <div className="w-full md:w-3/5 ">
            {questions.map((q, index) => (
              <QnA question={q.question} answer={q.answer} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default FAQ;
