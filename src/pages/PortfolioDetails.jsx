import React from "react";

// import components
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import ScrollToTop from "../components/ScrollToTop";

// import parts
import Details from "../parts/PortfolioDetailsPage/Details";

const PortfolioDetails = () => {
  return (
    <>
      <div className="-z-50 mx-auto max-w-[1440px] overflow-hidden bg-gray-900">
        <Header />
        <Details />
        <Subscribe />
        <Footer />
        <ScrollUp />
        <ScrollToTop />
      </div>
    </>
  );
};

export default PortfolioDetails;
