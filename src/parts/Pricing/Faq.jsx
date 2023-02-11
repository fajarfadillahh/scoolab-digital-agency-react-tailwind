import React from "react";

// import accordion data
import { AccordionData } from "../../Data";

// import components
import Accordion from "../../components/Accordion";

const Faq = () => {
  return (
    <section className="section relative">
      <div className="container grid gap-12">
        <div className="text-center">
          <p className="section-subtitle">Quick answer</p>
          <h1 className="section-title pb-0">
            Frequently asked question<span className="text-blue-600">.</span>
          </h1>
        </div>

        <div className="grid gap-8">
          {AccordionData.map((accordion, index) => {
            // destructure accordion
            const { question, answer } = accordion;

            return (
              <Accordion key={index} question={question} answer={answer} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
