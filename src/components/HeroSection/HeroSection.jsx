import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const HeroSection = ({ imgs }) => {
  return (
    <div className="carousel rounded-b-box">
      {imgs?.header_slider?.map((img, index) => (
        <div className="carousel-item w-full" key={index}>
          {/* <img src={img} className="object-cover w-screen h-screen" /> */}
          <LazyLoadImage
            className="object-cover w-screen h-screen"
            src={img}
            effect="blur"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
