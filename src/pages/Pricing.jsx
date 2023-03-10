import React from "react";

// import components
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import ScrollToTop from "../components/ScrollToTop";

// import parts
import Hero from "../parts/PricingPage/Hero";
import Plans from "../parts/PricingPage/Plans";
import Faq from "../parts/PricingPage/Faq";

const Pricing = () => {
  return (
    <>
      <div className="-z-50 mx-auto max-w-[1440px] overflow-hidden bg-gray-900">
        <Header />
        <Hero />
        <Plans />
        <Faq />
        <Subscribe />
        <Footer />
        <ScrollUp />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Pricing;
