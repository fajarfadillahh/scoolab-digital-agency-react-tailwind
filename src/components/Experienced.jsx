import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine } from "react-icons/ri";

// import experience data
import { ExperienceData } from "../Data";

// import experience card
import ExperienceCard from "./ExperienceCard";

// import icon
import ExperienceIcon from "../assets/images/icons/icon-idea-bulb.png";

const Experienced = () => {
  return (
    <div className="section relative">
      {/* gradient */}
      <div className="absolute top-[500px] -left-[250px] h-[400px] w-[400px] rounded-full bg-gradient-to-r from-pink-600 to-yellow-200 blur-[130px]" />

      <div className="container relative grid gap-12">
        {/* experience data */}
        <div className="justify-self-center text-center">
          <img
            src={ExperienceIcon}
            alt="experience icon"
            className="mx-auto w-20 pb-4"
          />
          <p className="section-subtitle">Why choose us?</p>
          <h1 className="section-title">
            Experienced, creative, and helpful
            <span className="text-blue-600">.</span>
          </h1>
          <p className="section-text pb-8">
            We are digital agency located in LA. We focus on creating responsive
            websites, web design, SEO service, UI/UX design, website with all
            over maintenance, hosting, domain name registration, graphic design,
            and visual identities for your business.
          </p>
          <Link to="/" className="btn btn-outline">
            Know more
            <RiArrowRightCircleLine className="btn-icon" />
          </Link>
        </div>

        {/* experience group */}
        <div className="grid justify-center gap-8">
          {ExperienceData.map((item, index) => {
            // destructure item
            const { number, title, text } = item;

            return (
              <ExperienceCard
                key={index}
                number={number}
                title={title}
                text={text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experienced;
