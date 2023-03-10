import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightCircleLine } from "react-icons/ri";

// import images & icon
import AboutImg from "../../assets/images/about-img.png";
import AboutIcon from "../../assets/images/icons/icon-color-palette.png";

const About = () => {
  return (
    <section className="section relative">
      {/* gradient */}
      <div className="absolute top-[400px] -right-[250px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-pink-300 to-purple-400 blur-[130px] 2xl:top-[100px] 2xl:-right-[350px] 2xl:h-[600px] 2xl:w-[600px]" />

      <div className="container relative grid justify-items-center gap-12 sm:mx-auto sm:max-w-xl xl:max-w-4xl xl:grid-cols-2 xl:items-center 2xl:max-w-6xl">
        <img src={AboutImg} alt="about img" />

        <div className="text-center xs:max-w-md xl:text-left">
          <img
            src={AboutIcon}
            alt="about icon"
            className="mx-auto w-20 pb-4 xl:m-0"
          />
          <p className="section-subtitle">Our team</p>
          <h1 className="section-title">
            Know more about team ScooLab<span className="text-blue-600">.</span>
          </h1>
          <p className="section-text pb-8">
            Our team of digital product creations in tech and design bring
            skills above and beyond the ordinary to every project. User
            experience, Social media marketing, Content management system, and
            Email marketing.
          </p>
          <Link to="/" className="btn btn-outline">
            Know more
            <RiArrowRightCircleLine className="btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
