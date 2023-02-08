import React from "react";

const ServiceCard = ({ icon, subtitle, title, text }) => {
  return (
    <div className="grid justify-items-center gap-4">
      <img src={icon} alt="service icon" className="w-20" />

      <div className="max-w-[250px] text-center">
        <p className="section-subtitle">{subtitle}</p>
        <h1 className="section-title text-[38px]">
          {title}
          <span className="text-blue-600">.</span>
        </h1>
        <p className="section-text mx-auto max-w-[190px]">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
