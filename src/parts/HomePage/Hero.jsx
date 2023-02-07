import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import images
import HeroImg1 from "../../assets/images/hero-img-1.png";

const Hero = () => {
  return (
    <section className="section relative">
      {/* gradient */}
      <div className="absolute -top-[15%] right-[40%] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-pink-600 to-yellow-200 blur-[100px]" />

      <div className="container relative grid gap-12">
        <div className="z-10 text-center">
          <h1 className="section-title text-[64px]">
            We're
            <br />
            <span className="relative">
              digital
              <div className="absolute bottom-3 left-0 -z-10 h-3 w-full rounded-full bg-blue-600" />
            </span>
            products
            <br />
            creators<span className="teblu6">.</span>
          </h1>
          <p className="section-text pb-8">
            Proper business solution for your business <br />
            strategy and corporation.
          </p>
          <Link to="/" className="btn btn-fill">
            Let's get started
            <RiArrowRightCircleLine className="btn-icon" />
          </Link>
        </div>

        <img src={HeroImg1} alt="hero img" className="justify-self-center" />
      </div>
    </section>
  );
};

export default Hero;
