import React from "react";

const PageTitle = ({ title = "Test", description = "" }) => {
  return (
    <div className="text-center">
      <h1 className="text-primary font-extrabold">{title}</h1>
      <p className="text-gray-500 my-5">{description}</p>
    </div>
  );
};

export default PageTitle;
