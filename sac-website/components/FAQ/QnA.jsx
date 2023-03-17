import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const QnA = ({ question, answer, index }) => {
  const [isopen, setisopen] = useState(false);

  useEffect(() => {
    if (isopen) {
      setTimeout(() => {}, 10);
    } else {
      setTimeout(() => {}, 200);
    }
  }, [isopen]);
  return (
    <div key={index} className="shadow-xl m-3.5 flex-col text-white">
      <div
        className={`bg-[#850101] p-3.5 transition-all duration-200 hover: cursor-pointer ${
          isopen ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={() => {
          setisopen(!isopen);
        }}
      >
        <h3 className="flex justify-between">
          {question} &nbsp;
          {isopen && <IoIosArrowUp className="inline" color="white" />}
          {!isopen && <IoIosArrowDown className="inline" color="white" />}
        </h3>
      </div>
      {isopen && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.01, duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          className={`bg-[#e5383b] p-3.5 rounded-b-md transition-all duration-300 ease-out`}
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default QnA;
