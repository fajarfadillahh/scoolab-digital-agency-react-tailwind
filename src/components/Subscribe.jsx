import React from "react";

// import icon
import SubscribeIcon from "../assets/images/icons/icon-postbox.png";

const Subscribe = () => {
  return (
    <section className="section relative">
      <div className="container grid gap-8">
        {/* subscribe data */}
        <div className="justify-self-center text-center">
          <img
            src={SubscribeIcon}
            alt="subscribe icon"
            className="mx-auto w-32 pb-4"
          />
          <p className="section-subtitle">Subscribe</p>
          <h1 className="section-title">
            Subscribe to get the latest news about us
            <span className="text-blue-600">.</span>
          </h1>
          <p className="section-text">
            We recommended you to subscribe to our newspaper, drop your email
            below to get daily update about us.
          </p>
        </div>

        {/* subscribe form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter email Address"
            className="h-[55px] rounded-full border-[1.5px] border-white/50 bg-transparent text-center font-semibold -tracking-[0.9px] text-white outline-none placeholder:font-medium placeholder:text-white/50"
          />
          <button className="btn btn-fill" onClick={(e) => e.preventDefault()}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
