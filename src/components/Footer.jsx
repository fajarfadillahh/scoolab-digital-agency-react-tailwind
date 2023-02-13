import React from "react";
import {
  RiGithubFill,
  RiInstagramFill,
  RiTwitchFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

// import footer data
import { FooterData } from "../Data";

const Footer = () => {
  return (
    <footer className="pt-24">
      <div className="bg-gray-800 pt-24 pb-8">
        <div className="container grid gap-32 2xl:max-w-6xl">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h1 className="pb-3 font-title text-[28px] font-semibold text-white">
                ScooLab<span className="text-blue-600">.</span>
              </h1>
              <p className="section-text max-w-[280px]">
                Scoolab is a digital agency that has evolved to meet the
                changing needs of marketing in the digital age.
              </p>
            </div>

            <div className="grid gap-12 sm:order-3 sm:col-span-2 sm:grid-cols-2 md:order-[0] lg:justify-items-center">
              {FooterData.map((item, index) => {
                // destructure item
                const { title, links } = item;
                return (
                  <div key={index}>
                    <h3 className="pb-3 font-title text-[28px] font-semibold text-white">
                      {title}
                      <span className="text-blue-600">.</span>
                    </h3>

                    <ul className="flex flex-col gap-3">
                      {links.map((link, index) => {
                        // destructure link
                        const { name, path } = link;

                        return (
                          <li key={index}>
                            <Link
                              to={path}
                              className="font-medium text-white hover:text-blue-600 hover:underline"
                            >
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div>
              <h1 className="pb-3 font-title text-[28px] font-semibold text-white">
                Get in touch<span className="text-blue-600">.</span>
              </h1>
              <p className="section-text w-[280px] pb-6">
                Question or feedback? <br />
                We'd love to hear from you.
              </p>
              <div className="inline-flex items-center gap-2">
                <Link to="/" className="inline-flex p-1">
                  <RiInstagramFill className="text-[1.8rem] text-white hover:text-blue-600" />
                </Link>
                <Link to="/" className="inline-flex p-1">
                  <RiTwitterFill className="text-[1.8rem] text-white hover:text-blue-600" />
                </Link>
                <Link to="/" className="inline-flex p-1">
                  <RiTwitchFill className="text-[1.8rem] text-white hover:text-blue-600" />
                </Link>
                <Link to="/" className="inline-flex p-1">
                  <RiYoutubeFill className="text-[1.8rem] text-white hover:text-blue-600" />
                </Link>
                <Link to="/" className="inline-flex p-1">
                  <RiGithubFill className="text-[1.8rem] text-white hover:text-blue-600" />
                </Link>
              </div>
            </div>
          </div>

          <p className="section-text pt-8 text-center">
            &copy; Copyrights 2023 - Scoolab.com, all rights reserved | Develop
            Fajar Fadillah A
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
