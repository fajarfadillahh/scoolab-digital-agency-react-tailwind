import React from "react";

// import testimonial data & card
import { TestimonialData } from "../Data";
import TestimoniaCard from "./TestimonialCard";

// import icon
import TestimonialIcon from "../assets/images/icons/icon-falling-star.png";

const Testimonial = () => {
  return (
    <section className="section relative">
      <div className="container grid gap-12">
        {/* testimonial data */}
        <div className="justify-self-center text-center">
          <img
            src={TestimonialIcon}
            alt="testimonial icon"
            className="mx-auto w-20 pb-4"
          />
          <p className="section-subtitle">Testimonials</p>
          <h1 className="section-title pb-0">
            What our
            <br />
            clients say <br />
            about us<span className="text-blue-600">.</span>
          </h1>
        </div>

        {/* testimonial group */}
        <div className="grid grid-cols-[280px] justify-center gap-8">
          {TestimonialData.slice(0, 2).map((item, index) => {
            // destructure item
            const { comment, profileImg, name, profession, rating } = item;

            return (
              <TestimoniaCard
                key={index}
                comment={comment}
                profileImg={profileImg}
                name={name}
                profession={profession}
                rating={rating}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
