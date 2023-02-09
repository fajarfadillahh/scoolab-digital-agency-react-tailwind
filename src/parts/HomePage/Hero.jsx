import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import images
import HeroImg1 from "../../assets/images/hero-img-1.png";

const Hero = () => {
  return (
    <section className="section relative pt-32 lg:pt-40">
      {/* gradient */}
      <div className="absolute -top-[100px] -left-[250px] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-pink-600 to-yellow-200 blur-[130px] 2xl:-top-[50px] 2xl:h-[600px] 2xl:w-[600px]" />
      <div className="absolute -bottom-[80px] -right-[250px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-pink-600 to-green-400 blur-[130px] 2xl:-bottom-[30px] 2xl:h-[600px] 2xl:w-[600px]" />

      <div className="container relative grid gap-12 sm:mx-auto sm:max-w-2xl lg:max-w-4xl 2xl:max-w-6xl">
        <div className="z-10 text-center">
          <h1 className="section-title text-[64px] lg:text-[72px]">
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

        <img
          src={HeroImg1}
          alt="hero img"
          className="justify-self-center 2xl:w-[1152px]"
        />
      </div>
    </section>
  );
};

export default Hero;
