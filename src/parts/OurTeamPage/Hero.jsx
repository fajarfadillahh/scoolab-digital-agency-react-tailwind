import React from "react";

// import team data
import { TeamData } from "../../Data";

// import team card
import TeamCard from "../../components/TeamCard";

const Hero = () => {
  return (
    <div className="section relative pt-40">
      {/* gradient */}
      <div className="absolute -top-[100px] -left-[250px] h-[500px] w-[500px] rounded-full bg-gradient-to-t from-pink-400 to-blue-400 blur-[130px] 2xl:-top-[50px] 2xl:h-[600px] 2xl:w-[600px]" />

      <div className="container relative grid justify-center gap-32">
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
