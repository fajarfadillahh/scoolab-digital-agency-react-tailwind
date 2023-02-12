import React from "react";

// import image
import HeroImg from "../../assets/images/hero-img-4.png";

const Hero = () => {
  return (
    <section className="section relative pt-40">
      <div className="container relative grid justify-items-center gap-16 2xl:max-w-6xl">
        <div className="text-center">
          <h1 className="section-title xs:text-[64px] lg:text-[72px]">
            About us<span className="text-blue-600">.</span>
          </h1>
          <p className="section-text mx-auto max-w-xl">
            To help start-up validate business hypotheses. Rapidly but without
            quality loss. Be it a mobile app, web or desktop app idea - you can
            test this out by creating an MVP - the very first product version
            you can deliver to market.
          </p>
        </div>

        <img src={HeroImg} alt="hero img" />
      </div>
    </section>
  );
};

export default Hero;
