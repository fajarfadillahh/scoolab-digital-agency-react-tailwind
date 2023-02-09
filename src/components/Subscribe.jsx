import React from "react";

// import icon
import SubscribeIcon from "../assets/images/icons/icon-postbox.png";

const Subscribe = () => {
  return (
    <section className="section relative">
      {/* gradient */}
      <div className="absolute top-[200px] -right-[250px] h-[400px] w-[400px] rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 blur-[130px]" />

      <div className="container relative grid gap-8 xs:max-w-md sm:max-w-lg">
        {/* subscribe data */}
        <div className="text-center">
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
          <p className="section-text sm:mx-auto sm:max-w-md">
            We recommended you to subscribe to our newspaper, drop your email
            below to get daily update about us.
          </p>
        </div>

        {/* subscribe form */}
        <form className="flex flex-col gap-4 xs:flex-row xs:items-center xs:rounded-full xs:border-[1.5px] xs:border-white/50 xs:p-2">
          <input
            type="email"
            placeholder="Enter email Address"
            className="h-[55px] rounded-full border-[1.5px] border-white/50 bg-transparent text-center font-semibold text-white outline-none placeholder:font-medium placeholder:text-white/50 xs:w-full xs:border-none xs:pl-4 xs:text-left"
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
