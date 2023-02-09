import React from "react";

// import icon
import CommaIcon from "../assets/images/icons/icon-comma.png";

const TestimonialCard = ({ comment, profileImg, name, profession, rating }) => {
  return (
    <div className="grid gap-8">
      <div>
        <img src={CommaIcon} alt="comma icon" className="w-10 pb-2" />
        <p className="section-text">{comment}</p>
      </div>

      <div>
        <img src={profileImg} alt="profile img" className="w-16 pb-4" />
        <h3 className="section-title pb-1 text-[28px]">{name}</h3>
        <p className="section-text pb-4">{profession}</p>
        <div className="inline-flex items-center gap-1 text-[1.3rem] text-yellow-400">
          {rating}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
