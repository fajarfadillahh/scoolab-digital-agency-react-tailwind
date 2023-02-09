import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine } from "react-icons/ri";

// import image
import HeroImg from "../../assets/images/hero-img-2.png";

const Hero = () => {
  return (
    <section className="section relative pt-40">
      {/* gradient */}
      <div className="absolute -top-[40px] -right-[150px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-pink-600 to-green-400 blur-[130px] 2xl:-bottom-[30px] 2xl:h-[600px] 2xl:w-[600px]" />

      <div className="container relative grid gap-12">
        <div className="text-center">
          <h1 className="section-title">
            We make strategies, design & development
            <span className="text-blue-600">.</span>
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

        <img src={HeroImg} alt="hero img" />
      </div>
    </section>
  );
};

export default Hero;
