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
      {/* gradient */}
      <div className="absolute top-[500px] -right-[250px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-yellow-300 to-green-300 blur-[130px] 2xl:top-[100px] 2xl:-right-[350px] 2xl:h-[600px] 2xl:w-[600px]" />

      <div className="container relative grid gap-12 2xl:max-w-6xl">
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
        <div className="grid justify-center gap-8 lg:mx-auto lg:max-w-4xl lg:grid-cols-2 2xl:max-w-max">
          {PortfolioData.map((portfolio, index) => {
            // destructure item
            return <PortfolioCard key={index} portfolio={portfolio} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
