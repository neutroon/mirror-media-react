// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styel from "./VerticalSlider.module.css";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const VerticalSlider = ({ slideContent }) => {
  return (
    <>
      <Swiper
        height={450}
        autoHeight={true}
        // loop={true}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: true,
        // }}
        slidesPerView={1}
        direction={"vertical"}
        scrollbar={{ draggable: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`${styel.verticalSlider}`}
      >
        {slideContent.map((slide, index) => {
          return <SwiperSlide key={index}>{slide}</SwiperSlide>;
        })}
      </Swiper>
    </>
  );
};

export default VerticalSlider;
