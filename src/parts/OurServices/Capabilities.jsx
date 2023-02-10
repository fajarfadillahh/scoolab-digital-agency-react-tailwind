import React from "react";

// import capabilities data
import { CapabilitiesData } from "../../Data";

const Capabilities = () => {
  return (
    <section className="section relative">
      <div className="container">
        <div className="grid grid-cols-[280px] justify-center gap-8">
          {CapabilitiesData.map((item, index) => {
            // destructure item
            const { subtitle, title, text } = item;

            return (
              <div key={index}>
                <p className="section-subtitle">{subtitle}</p>
                <h1 className="section-title pb-6 text-[38px]">
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
