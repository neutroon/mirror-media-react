import React from "react";

const PageTitle = ({ title = "Test" }) => {
  return (
    <div className="text-center">
      <h1 className="text-primary font-extrabold text-[3rem] ">{title}</h1>
      <p className="text-gray-500 my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, officia?
        Quos tempora aperiam corporis obcaecati soluta? Ullam repudiandae, ipsa
        iure asperiores, id sed iste assumenda molestias magnam unde quaerat
        commodi?
      </p>
    </div>
  );
};

export default PageTitle;
