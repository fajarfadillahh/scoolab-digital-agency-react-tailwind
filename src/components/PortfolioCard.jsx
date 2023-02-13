import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ portfolio }) => {
  // destructure portfolio
  const { id, image, title, subtitle } = portfolio;

  return (
    <Link to={`/portfolio/${id}`}>
      <div className="group grid cursor-pointer gap-4">
        <div className="overflow-hidden rounded-xl">
          <img
            src={image}
            alt="portfolio img"
            className="h-full w-full object-cover object-center transition-all duration-400 group-hover:scale-110"
          />
        </div>

        <div className="p-1">
          <p className="section-subtitle pb-1">{subtitle}</p>
          <h1 className="section-title pb-0 text-[38px]">
            {title}
            <span className="text-blue-600">.</span>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
