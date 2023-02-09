import React from "react";
import { Link } from "react-router-dom";

const NotFoundMessage = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      {/* gradient */}
      <div className="absolute -top-[100px] -left-[250px] h-[500px] w-[500px] rounded-full bg-gradient-to-t from-pink-400 to-blue-400 blur-[130px] 2xl:-top-[50px] 2xl:h-[600px] 2xl:w-[600px]" />

      <div className="container text-center xs:w-max">
        <h1 className="section-title">
          404 Not Found<span className="text-blue-600">.</span>
        </h1>
        <p className="section-text mx-auto max-w-sm pb-8">
          Ooppsss... The page you're looking for was not found. Please check the
          URL again.
        </p>
        <Link to="/" className="btn btn-fill">
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundMessage;
