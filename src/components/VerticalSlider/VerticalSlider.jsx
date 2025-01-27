import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import styel from "./VerticalSlider.module.css";
import React from "react";

const VerticalSlider = ({ children }) => {
  return (
    <>
      <Swiper
        height={450}
        autoHeight={true}
        slidesPerView={1}
        direction={"vertical"}
        scrollbar={{ draggable: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`${styel.verticalSlider}`}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VerticalSlider;
