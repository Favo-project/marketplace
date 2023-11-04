"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
import classes from "./slider.module.css";

export default function slider() {
  return (
    <div className={classes.sliderItem}>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src="/assets/img/sliders/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/assets/img/sliders/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/assets/img/sliders/2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/assets/img/sliders/2.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
