import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [scrollVisible, setScrollVisible] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    });
  });

  const handleScrollVisible = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-6 z-50 inline-flex cursor-pointer rounded-xl bg-blue-600 p-3 text-[1.5rem] text-white transition-all duration-400 hover:bg-blue-700 2xl:right-10 ${
        scrollVisible ? "bottom-12" : "-bottom-full"
      }`}
      onClick={handleScrollVisible}
    >
      <RiArrowUpLine />
    </div>
  );
};

export default ScrollToTop;
