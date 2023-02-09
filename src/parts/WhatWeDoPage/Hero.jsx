import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine } from "react-icons/ri";

// import image
import HeroImg from "../../assets/images/hero-img-2.png";

const Hero = () => {
  return (
    <section className="section relative pt-40">
      <div className="container grid gap-12">
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
