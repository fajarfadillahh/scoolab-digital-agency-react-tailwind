import React from "react";

// import team data
import { TeamData } from "../../Data";

// import team card
import TeamCard from "../../components/TeamCard";

const Hero = () => {
  return (
    <div className="section relative pt-40">
      <div className="container grid justify-center gap-32">
        <div className="text-center">
          <h1 className="section-title xs:text-[64px] lg:text-[72px]">
            Meet with our <br />
            awesome team<span className="text-blue-600">.</span>
          </h1>
          <p className="section-text mx-auto max-w-[425px]">
            A small team with unlimited creativity, we are continuously
            committed assisting you in developing your business.
          </p>
        </div>

        <div className="grid justify-center gap-8 sm:grid-cols-[repeat(2,max-content)] xl:grid-cols-[repeat(3,max-content)] xl:gap-y-16">
          {TeamData.map((item, index) => {
            // destructure item
            const { image, name, profession } = item;

            return (
              <TeamCard
                key={index}
                image={image}
                name={name}
                profession={profession}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
