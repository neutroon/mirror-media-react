// import React from "react";

const HeroSection = () => {
  const imgs = [
    {
      src: "/slider images/slide1.jpg",
    },
    {
      src: "/slider images/slide2.jpg",
    },
  ];

  return (
    <>
      <div className="carousel max-h-screen rounded-b-box">
        {imgs.map((img, index) => {
          return (
            <div className="carousel-item w-full" key={index}>
              <img className="object-cover w-full" src={img.src} alt="Pizza" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroSection;
