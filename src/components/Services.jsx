import React from "react";

// import service data
import { ServiceData } from "../Data";

// import service card
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="section relative">
      {/* gradient */}
      <div className="absolute top-[500px] -left-[250px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-yellow-300 to-green-400/90 blur-[130px]" />

      <div className="container relative grid gap-12">
        {/* service data */}
        <div className="justify-self-center text-center">
          <p className="section-subtitle">What we do?</p>
          <h1 className="section-title">
            We're a team of creatives who are excited about unique ideas
            <span className="text-blue-600">.</span>
          </h1>
        </div>

        {/* service group */}
        <div className="grid justify-center gap-8">
          {ServiceData.map((item, index) => {
            // destructure item
            const { icon, subtitle, title, text } = item;

            return (
              <ServiceCard
                key={index}
                icon={icon}
                subtitle={subtitle}
                title={title}
                text={text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
