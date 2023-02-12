import React from "react";

// import image
import HeroImg from "../../assets/images/hero-img-4.png";

const Hero = () => {
  return (
    <section className="section relative pt-40">
      {/* gradients */}
      <div className="absolute -top-[40px] -right-[150px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-pink-600 to-green-400 blur-[130px] 2xl:-bottom-[30px] 2xl:h-[600px] 2xl:w-[600px]" />

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
