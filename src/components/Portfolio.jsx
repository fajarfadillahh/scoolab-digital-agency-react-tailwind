import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine } from "react-icons/ri";

// import portfolio data
import { PortfolioData } from "../Data";

// import portfolio card
import PortfolioCard from "./PortfolioCard";

// import icon
import PortfolioIcon from "../assets/images/icons/icon-web-design.png";

const Portfolio = () => {
  return (
    <section className="section relative">
      <div className="container grid gap-12">
        {/* portfolio data */}
        <div className="justify-self-center text-center">
          <img
            src={PortfolioIcon}
            alt="experience icon"
            className="mx-auto w-20 pb-4"
          />
          <p className="section-subtitle">Our portfolio</p>
          <h1 className="section-title pb-8">
            Check our <br />
            awesome portfolio<span className="text-blue-600">.</span>
          </h1>
          <Link to="/" className="btn btn-outline">
            Explore all projects
            <RiArrowRightCircleLine className="btn-icon" />
          </Link>
        </div>

        {/* portfolio group */}
        <div className="grid justify-center gap-8">
          {PortfolioData.map((item, index) => {
            // destructure item
            const { image, subtitle, title } = item;

            return (
              <PortfolioCard
                key={index}
                image={image}
                subtitle={subtitle}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
