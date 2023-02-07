import React from "react";

// import components
import Header from "../components/Header";

// import parts
import Hero from "../parts/HomePage/Hero";

const Home = () => {
  return (
    <>
      <div className="-z-50 overflow-hidden bg-gray-900">
        <Header />
        <Hero />

        <div className="h-[3000px]" />
      </div>
    </>
  );
};

export default Home;
