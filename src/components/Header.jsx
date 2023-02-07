import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// import header link data
import { HeaderLink } from "../Data";

const Header = () => {
  // menu open state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="font-title text-[20px] font-semibold text-white"
        >
          ScooLab<span className="text-blue-600">.</span>
        </Link>

        <div
          className={`fixed top-20 right-[6%] w-[250px] origin-top-right rounded-[2rem] bg-gray-800 p-6 transition-all duration-400 lg:static lg:top-0 lg:left-0 lg:flex lg:w-auto lg:scale-110 lg:items-center lg:gap-6 lg:bg-transparent lg:p-0  ${
            menuOpen ? "scale-110" : "scale-0"
          }`}
        >
          <ul className="mb-6 flex flex-col lg:mb-0 lg:flex-row lg:gap-6">
            {HeaderLink.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className="flex h-[55px] items-center rounded-full px-4 font-medium text-white hover:bg-gray-700 lg:h-auto lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-600"
                >
                  {item.title}
                </Link>
              );
            })}
          </ul>

          <Link to="/" className="btn btn-fill flex">
            Let's talk
          </Link>
        </div>

        <div
          className="inline-flex cursor-pointer p-1 text-[1.3rem] text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </div>
      </div>
    </header>
  );
};

export default Header;
