// import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
      <div className="carousel  rounded-b-box">
        {imgs.map((img, index) => {
          return (
            <div className="carousel-item w-full" key={index}>
              <LazyLoadImage
                className="object-cover w-screen h-screen"
                src={img.src}
                effect="blur"
              />
              {/* <img className="object-cover w-full" src={img.src} /> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroSection;
