import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-16">
      {/* gradient */}
      <div className="absolute -top-[100px] -left-[250px] h-[500px] w-[500px] rounded-full bg-gradient-to-t from-pink-400 to-blue-400 blur-[130px] 2xl:-top-[50px] 2xl:h-[600px] 2xl:w-[600px]" />

      <div className="container relative 2xl:max-w-6xl">
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
