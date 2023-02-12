import React, { useState } from "react";

// import accordion data
import { AccordionData } from "../../Data";

// import components
import Accordion from "../../components/Accordion";

const Faq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <section className="section relative">
      {/* gradient */}
      <div className="absolute top-1/2 -left-[150px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-green-500 to-yellow-300 blur-[130px] 2xl:-bottom-[30px]" />

      <div className="container relative grid justify-items-center gap-12 2xl:max-w-6xl">
        <div className="text-center sm:max-w-lg">
          <p className="section-subtitle">Quick answer</p>
          <h1 className="section-title pb-0">
            Frequently asked question<span className="text-blue-600">.</span>
          </h1>
        </div>

        <div className="grid gap-8 sm:max-w-xl xl:max-w-4xl 2xl:max-w-full">
          {AccordionData.map((accordion, index) => {
            // destructure accordion
            const { question, answer } = accordion;

            return (
              <Accordion
                key={index}
                question={question}
                answer={answer}
                open={index === open}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
