import React, { useState } from "react";
import { RiArrowUpCircleLine } from "react-icons/ri";

const Accordion = ({ question, answer }) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div
      className="cursor-pointer rounded-[1.5rem] border-[1.5px] border-white/50 p-6"
      onClick={() => setisOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-title text-[18px] font-semibold text-white">
          {question}
        </h3>
        <div
          className={`inline-flex text-[1.8rem] text-white transition-all duration-400 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <RiArrowUpCircleLine />
        </div>
      </div>

      <div
        className={`max-h-0 overflow-hidden transition-all duration-400 ${
          isOpen ? "mt-6 min-h-[100px]" : "mt-0 min-h-0"
        }`}
      >
        <p className="section-text text-[14px]">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
