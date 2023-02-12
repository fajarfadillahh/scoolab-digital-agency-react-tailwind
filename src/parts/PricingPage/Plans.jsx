import React from "react";

// import plan data
import { PlanList } from "../../Data";

// import plan card
import PlanCard from "../../components/PlanCard";

const Plans = () => {
  return (
    <section className="relative py-16">
      <div className="container 2xl:max-w-6xl">
        <div className="grid justify-center gap-12 md:grid-cols-[repeat(2,max-content)] 2xl:grid-cols-[repeat(3,max-content)]">
          {PlanList.map((item, index) => {
            // destructure item
            const { grade, price, description, list } = item;

            return (
              <PlanCard
                key={index}
                grade={grade}
                price={price}
                description={description}
                list={list}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;
