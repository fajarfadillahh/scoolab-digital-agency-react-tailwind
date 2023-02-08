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
      <div className="container grid gap-12">
        {/* team data */}
        <div className="justify-self-center text-center">
          <img src={TeamIcon} alt="team icon" className="mx-auto w-20 pb-4" />
          <p className="section-subtitle">Our team</p>
          <h1 className="section-title pb-8">
            Meet with our
            <br />
            awesome team<span className="text-blue-600">.</span>
          </h1>
        </div>

        {/* team group */}
        <div className="grid justify-center gap-8">
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
