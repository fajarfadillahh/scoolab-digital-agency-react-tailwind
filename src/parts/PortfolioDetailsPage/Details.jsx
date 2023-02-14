import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// import portfolio context
import { PortfolioContext } from "../../context/PortfolioContext";

const Details = () => {
  const { portfolios } = useContext(PortfolioContext);
  const { id } = useParams();

  // get portfolio by id
  const portfolio = portfolios.find((portfolio) => {
    return portfolio.id === Number(id);
  });

  // destructure portfolio
  const { image, subtitle, title, description, technologies } = portfolio;

  return (
    <section className="section relative pt-40">
      <div className="container relative grid justify-items-center gap-24 2xl:max-w-4xl">
        <div className="text-center xs:max-w-md sm:max-w-xl lg:max-w-3xl 2xl:max-w-full">
          <p className="section-subtitle">{subtitle}</p>
          <h1 className="section-title pb-8 text-[38px] xs:text-[48px] lg:pb-12 lg:text-[62px]">
            {title}
            <span className="text-blue-600">.</span>
          </h1>
          <img
            src={image}
            alt="portfolio img"
            className="mx-auto w-[56rem] rounded-xl 2xl:rounded-[1.5rem]"
          />
        </div>

        <div className="text-center xs:max-w-md sm:max-w-2xl">
          <h1 className="section-title pb-4 text-[32px] xs:text-[42px] lg:text-[52px]">
            Overview<span className="text-blue-600">.</span>
          </h1>
          <p className="section-text pb-20">{description}</p>
          <h1 className="section-title pb-6 text-[20px] xs:text-[28px]">
            Featured technologies used:
          </h1>
          <div className="grid grid-cols-6 justify-items-center gap-4">
            {technologies.map((tech, index) => {
              return (
                <img
                  src={tech}
                  key={index}
                  alt="tech icon"
                  className="w-8 xs:w-12 md:w-16"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
