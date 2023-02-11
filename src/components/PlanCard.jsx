import React from "react";
import { RiArrowRightCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

const PlanCard = ({ grade, price, description, list }) => {
  return (
    <div className="group grid max-w-[350px] gap-8 rounded-[2rem] border-[1.5px] border-white/50 p-8 transition-all duration-400 hover:border-blue-600 hover:bg-blue-600">
      <div>
        <p className="section-subtitle transition-all duration-400 group-hover:text-white">
          {grade}
        </p>
        <div className="inline-flex items-center gap-2 pb-3">
          <h3 className="section-title pb-0">{price}</h3>
          <p className="section-text">/ Month</p>
        </div>
        <p className="section-text">{description}</p>
      </div>

      <div className="flex flex-col gap-4">
        {list.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-3">
              <RiCheckboxCircleLine className="inline-flex text-[1.8rem] text-white" />
              <p className="section-text">{item.name}</p>
            </div>
          );
        })}
      </div>

      <button
        className="btn btn-fill transition-all duration-400 group-hover:bg-white group-hover:text-blue-600"
        onClick={(e) => e.preventDefault()}
      >
        Choose plan
        <RiArrowRightCircleLine className="btn-icon" />
      </button>
    </div>
  );
};

export default PlanCard;
