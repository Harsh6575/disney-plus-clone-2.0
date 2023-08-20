import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ImgSlider = () => {
  const SliderDetails = [
    {
      src: "/images/slider-badging.jpg",
      alt: "Slider Badging",
    },
    {
      src: "/images/slider-badag.jpg",
      alt: "Slider Badag",
    },
    {
      src: "/images/slider-scale.jpg",
      alt: "Slider Scale",
    },
    {
      src: "/images/slider-scales.jpg",
      alt: "Slider Scales",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      className="mt-[20px]"
    >
      {SliderDetails.map((slide) => (
        <SwiperSlide key={slide.src}>
          <img
            src={slide.src}
            alt={slide.alt}
            className="relative overflow-hidden border-4 border-solid border-transparent rounded-md w-full h-full shadow-md hover:border-[rgba(249,249,249,0.8)] transition duration-300 ease-in-out"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImgSlider;
