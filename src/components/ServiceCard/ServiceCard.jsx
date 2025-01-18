// import React from "react";
import { useState } from "react";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ cardDirection = "right", inSlider = false }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => (inSlider ? "" : setIsActive(true))}
        onMouseLeave={() => (inSlider ? "" : setIsActive(false))}
        className={`${styles.serviceCard} ${
          isActive || inSlider ? "h-[30rem] pt-[17rem]" : "h-64"
        } text-center card card-side flex-col bg-base-100 shadow-xl overflow-hidden `}
      >
        <figure
          className={`absolute top-0 transition-all duration-700 ${
            isActive || inSlider ? "h-60" : ""
          } w-full h-72 rounded-none`}
        >
          <img
            className={`h-full rounded-none w-full object-cover absolute `}
            src="/service images/SOCIAL MEDIA MANAGEMENT.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body px-2 ">
          <h2 className="card-title mx-auto font-bold">
            SOCIAL MEDIA MANAGEMENT
          </h2>
          <p className="text-gray-500">
            create and manage strategies that connect your brand with the right
            audience.
          </p>
          <div className={`card-actions `}>
            <button className="btn main-btn tracking-widest mx-auto">
              Start!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

/*
  <>
      <div
        className={`${
          styles.serviceCard
        } card card-side bg-base-100 shadow-xl overflow-hidden ${
          cardDirection === "right" ? "rounded-e-full " : "rounded-s-full "
        }   ${cardDirection === "right" ? "flex-row-reverse" : ""}`}
      >
        <figure className="relative w-full md:w-1/2 h-72 rounded-none">
          <img
            className={`h-full rounded-none w-full object-cover absolute ${
              cardDirection === "right" ? "left-0" : "right-0"
            } ${
              cardDirection === "right" ? "rounded-tl-full" : "rounded-tr-full"
            }`}
            src="/service images/SOCIAL MEDIA MANAGEMENT.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body px-2 ">
          <h2 className="card-title">SOCIAL MEDIA MANAGEMENT</h2>
          <p>
            create and manage strategies that connect your brand with the right
            audience.
          </p>
          <div
            className={`card-actions  ${
              cardDirection === "right" ? "justify-start" : "justify-end"
            } `}
          >
            <button className="btn main-btn tracking-widest">Start!</button>
          </div>
        </div>
      </div>
    </>
*/
export default ServiceCard;
