import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-16">
      <div className="container 2xl:max-w-6xl">
        <div className="text-center">
          <h1 className="section-title xs:text-[64px] lg:text-[72px]">
            Pricing<span className="text-blue-600">.</span>
          </h1>
          <p className="section-text mx-auto max-w-[425px]">
            We can help you develop and execute a clear and strategic IT roadmap
            with priorities that are closely linked to business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
