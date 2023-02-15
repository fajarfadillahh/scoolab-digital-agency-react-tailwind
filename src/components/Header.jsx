import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// import header link data
import { HeaderLink } from "../Data";

const Header = () => {
  // menu open & sticky header state
  const [menuOpen, setMenuOpen] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    });
  });

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-400 ${
        stickyHeader ? "bg-gray-900/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between 2xl:relative">
        <Link
          to="/"
          className="font-title text-[20px] font-semibold text-white"
        >
          ScooLab<span className="text-blue-600">.</span>
        </Link>

        <div
          className={`fixed top-20 right-[6%] w-[260px] origin-top-right rounded-[2rem] bg-gray-800 py-8 px-6 transition-all duration-400 lg:static lg:inset-0 lg:flex lg:w-auto lg:scale-[auto] lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 ${
            menuOpen ? "scale-100" : "scale-0"
          }`}
        >
          <ul className="mb-6 flex flex-col lg:mb-0 lg:flex-row lg:gap-6 2xl:absolute 2xl:left-[50%] 2xl:-translate-x-[50%] 2xl:gap-8">
            {HeaderLink.map((link, index) => {
              return (
                <Link
                  key={index}
                  to={link.path}
                  className="flex h-[55px] items-center rounded-full px-4 text-white hover:bg-gray-700 lg:h-auto lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-600"
                >
                  {link.title}
                </Link>
              );
            })}
          </ul>

          <Link to="/" className="btn btn-fill flex">
            Let's talk
          </Link>
        </div>

        <div
          className="z-50 inline-flex cursor-pointer p-1 text-[1.3rem] text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </div>
      </div>
    </header>
  );
};

export default Header;
