import React from "react";

// import components
import Header from "../components/Header";
import Experienced from "../components/Experienced";
import Testimonial from "../components/Testimonial";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import ScrollToTop from "../components/ScrollToTop";

// import parts
import Hero from "../parts/OurServices/Hero";
import Capabilities from "../parts/OurServices/Capabilities";

const OurServices = () => {
  return (
    <>
      <div className="-z-50 mx-auto max-w-[1440px] overflow-hidden bg-gray-900">
        <Header />
        <Hero />
        <Capabilities />
        <Experienced />
        <Testimonial />
        <Subscribe />
        <Footer />
        <ScrollUp />
        <ScrollToTop />
      </div>
    </>
  );
};

export default OurServices;
