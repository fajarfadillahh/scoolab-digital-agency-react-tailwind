import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import OurServices from "./pages/OurServices";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
