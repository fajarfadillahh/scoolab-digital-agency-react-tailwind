import React from "react";

// import capabilities data
import { CapabilitiesData } from "../../Data";

const Capabilities = () => {
  return (
    <section className="section relative">
      {/* gradient */}
      <div className="absolute -bottom-[50px] -right-[150px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-blue-500 to-purple-500 blur-[130px] 2xl:-bottom-[30px] 2xl:h-[500px] 2xl:w-[500px]" />

      <div className="container relative">
        <div className="grid grid-cols-[280px] justify-center gap-8 sm:mx-auto sm:max-w-xl sm:grid-cols-2 xl:max-w-4xl xl:grid-cols-3 2xl:max-w-6xl 2xl:grid-cols-4">
          {CapabilitiesData.map((item, index) => {
            // destructure item
            const { subtitle, title, text } = item;

            return (
              <div key={index} className="h-max">
                <p className="section-subtitle">{subtitle}</p>
                <h1 className="section-title pb-6 text-[28px]">
                  {title}
                  <span className="text-blue-600">.</span>
                </h1>
                <p className="section-text">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
