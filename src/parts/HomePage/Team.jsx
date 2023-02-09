import React from "react";

// import team data
import { TeamData } from "../../Data";

// import team card
import TeamCard from "./TeamCard";

// import icon
import TeamIcon from "../../assets/images/icons/icon-color-palette.png";

const Team = () => {
  return (
    <section className="section relative">
      {/* gradient */}
      <div className="absolute top-[500px] -left-[250px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-purple-500 to-blue-300 blur-[130px] 2xl:top-[100px] 2xl:-left-[350px] 2xl:h-[600px] 2xl:w-[600px]" />

      <div className="container relative grid gap-12 2xl:max-w-6xl">
        {/* team data */}
        <div className="justify-self-center text-center">
          <img src={TeamIcon} alt="team icon" className="mx-auto w-20 pb-4" />
          <p className="section-subtitle">Our team</p>
          <h1 className="section-title">
            Meet with our
            <br />
            awesome team<span className="text-blue-600">.</span>
          </h1>
        </div>

        {/* team group */}
        <div className="grid justify-center gap-8 sm:grid-cols-[repeat(2,max-content)] xl:grid-cols-[repeat(3,max-content)] 2xl:grid-cols-[repeat(4,max-content)]">
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
    </section>
  );
};

export default Team;
