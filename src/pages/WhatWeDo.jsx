import React from "react";

// import components
import Header from "../components/Header";
import Footer from "../components/Footer";

// import parts
import Hero from "../parts/WhatWeDoPage/Hero";

const WhatWeDo = () => {
  return (
    <>
      <div className="-z-50 mx-auto max-w-[1440px] overflow-hidden bg-gray-900">
        <Header />
        <Hero />
        <div className="h-[2000px]" />
        <Footer />
      </div>
    </>
  );
};

export default WhatWeDo;
