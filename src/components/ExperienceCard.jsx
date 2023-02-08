import React from "react";

const ExperienceCard = ({ number, title, text }) => {
  return (
    <div className="grid gap-2 text-center">
      <h1 className="section-title text-blue-600">{number}</h1>

      <div>
        <h3 className="section-title text-[32px]">{title}</h3>
        <p className="section-text mx-auto max-w-[220px]">{text}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
