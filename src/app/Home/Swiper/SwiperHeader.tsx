"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import classes from "./Swiper.module.css"

const swipers = [
  {
    img: "https://images.uzum.uz/ck05284vutvccfo20qvg/main_page_banner.jpg",
    url: "",
  },
  {
    img: "https://images.uzum.uz/cjvfoksvutv76hn0b7gg/main_page_banner.jpg",
    url: "",
  },
  {
    img: "https://images.uzum.uz/cjvldv4jvf2qegt3ans0/main_page_banner.jpg",
    url: "",
  },
  {
    img: "https://images.uzum.uz/ck051lsvutvccfo20qr0/main_page_banner.jpg",
    url: "",
  },
];

function SwiperHeader() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={`mySwiper ${classes.mySwiper}` }
    
    >
      {swipers.map((item, index) => (
        <SwiperSlide key={index} className={classes.Swiper_img}>
          <Image unoptimized  src={item.img} alt="" width={100} height={100} className={classes.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperHeader;
