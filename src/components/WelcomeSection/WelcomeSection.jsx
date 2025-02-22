import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const WelcomeSection = ({ img = "" }) => {
  return (
    <>
      <h3 className="text-center py-4 text-primary tracking-[.3rem] font-bold text-3xl">
        WELCOME
      </h3>
      <h6 className="text-center text-2xl tracking-wider text-gray-700">
        <span className="font-bold">Our 10 years working experience to </span>
        take care of your business goal.
      </h6>
      {/* <img
        className="w-full object-cover rounded-2xl mt-5"
        src="/public/welcomeImg.jpg"
        alt="welcome image"
      /> */}
      <LazyLoadImage
        className="w-full object-cover rounded-2xl mt-5"
        src={img?.welcome_image}
        effect="blur"
        alt="welcome image"
      />

      <p className="mt-5 text-center text-lg  text-gray-500">
        <span className="font-bold">Driving Success Through Experience. </span>
        With a decade of expertise, we turn your business vision into reality by
        crafting innovative strategies tailored to your goals.
      </p>
    </>
  );
};

export default WelcomeSection;
