import React from "react";
import { Collapse } from "react-collapse";
import { RiArrowUpCircleLine } from "react-icons/ri";

const Accordion = ({ open, toggle, question, answer }) => {
  return (
    <div
      className="cursor-pointer rounded-[1.2rem] border-[1.5px] border-white/50 p-6"
      onClick={toggle}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-title text-[18px] font-semibold text-white sm:text-[24px] xl:text-[30px]">
          {question}
        </h3>
        <div
          className={`inline-flex text-[1.8rem] text-white transition-all duration-400 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          <RiArrowUpCircleLine />
        </div>
      </div>

      <Collapse isOpened={open}>
        <p className="section-text pt-6 text-[14px] sm:text-[16px] xl:max-w-3xl">
          {answer}
        </p>
      </Collapse>
    </div>
  );
};

export default Accordion;
