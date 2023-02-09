import React from "react";

// import components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";

// import part
import NotFoundMessage from "../parts/NotFoundPage/NotFoundMessage";

const NotFound = () => {
  return (
    <>
      <div className="-z-50 mx-auto max-w-[1440px] overflow-hidden bg-gray-900">
        <Header />
        <NotFoundMessage />
        <Footer />
        <ScrollUp />
      </div>
    </>
  );
};

export default NotFound;
