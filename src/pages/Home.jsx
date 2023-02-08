import React from "react";

// import components
import Header from "../components/Header";
import Services from "../components/Services";
import Experienced from "../components/Experienced";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

// import parts
import Hero from "../parts/HomePage/Hero";
import About from "../parts/HomePage/About";
import Team from "../parts/HomePage/Team";

const Home = () => {
  return (
    <>
      <div className="-z-50 overflow-hidden bg-gray-900">
        <Header />
        <Hero />
        <Services />
        <About />
        <Experienced />
        <Portfolio />
        <Team />
        <Testimonial />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
