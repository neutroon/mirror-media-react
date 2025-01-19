import PageTitle from "../components/PageTitle/PageTitle";
import ServiceCard from "../components/ServiceCard/ServiceCard";

// import React from "react";

const Services = () => {
  return (
    <>
      <div className="text-[3rem]">
        <PageTitle title="Services" />
      </div>
      <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="my-10">
          <ServiceCard cardDirection="right" />
        </div>

        <div className="my-10">
          <ServiceCard cardDirection="left" />
        </div>

        <div className="my-10">
          <ServiceCard cardDirection="right" />
        </div>

        <div className="my-10">
          <ServiceCard cardDirection="left" />
        </div>

        <div className="my-10">
          <ServiceCard cardDirection="right" />
        </div>

        <div className="my-10">
          <ServiceCard cardDirection="left" />
        </div>

        <div className="my-10">
          <ServiceCard cardDirection="right" />
        </div>

        <div className="my-10">
          <ServiceCard cardDirection="left" />
        </div>
      </div>
    </>
  );
};

export default Services;
