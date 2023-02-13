import React from "react";

const TeamCard = ({ image, name, profession }) => {
  return (
    <div className="grid gap-6">
      <img
        src={image}
        alt="team profile img"
        className="mx-auto max-w-[250px]"
      />

      <div className="text-center">
        <h3 className="section-title pb-2 text-[32px]">
          {name}
          <span className="text-blue-600">.</span>
        </h3>
        <p className="section-text">{profession}</p>
      </div>
    </div>
  );
};

export default TeamCard;
