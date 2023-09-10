"use client";

import { Children, useState, type FC, type PropsWithChildren } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

import "swiper/css";
import "swiper/css/free-mode";

type SliderPaginationProps = {
  currentSlide: number;
  numberOfSlides: number;
  className?: string;
};

const SliderPagination: FC<SliderPaginationProps> = ({
  currentSlide,
  numberOfSlides,
  className,
}) => (
  <div
    className={twMerge(
      "absolute bottom-0 left-0 flex items-center space-x-2",
      className,
    )}
  >
    {Array.from({ length: numberOfSlides }, (_, index) => (
      <span
        key={`custom-pagination-${index}`}
        className={`h-1 w-6 rounded-full ${
          currentSlide === index ? "bg-[#83C7ED]" : "bg-[#FFFFFF59]"
        }`}
      />
    ))}
  </div>
);

type SliderProps = {
  className?: string;
  withPagination?: boolean;
  paginationClassName?: string;
  freeMode?: boolean;
};

const Slider: FC<PropsWithChildren<SliderProps>> = ({
  className,
  withPagination,
  paginationClassName,
  children,
  freeMode,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const numberOfSlides = Children.count(children);

  return (
    <Swiper
      initialSlide={currentSlide ?? 0}
      slidesPerView={freeMode ? "auto" : 1}
      freeMode={freeMode}
      modules={[FreeMode]}
      onSlideChange={({ realIndex }) => {
        setCurrentSlide(realIndex);
      }}
      className={twMerge("w-full h-full", className)}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide
          key={`slide-${index}`}
          className={freeMode ? "!w-auto" : "w-full"}
        >
          {child}
        </SwiperSlide>
      ))}
      {withPagination && (
        <SliderPagination
          currentSlide={currentSlide}
          numberOfSlides={numberOfSlides}
          className={paginationClassName}
        />
      )}
    </Swiper>
  );
};

export default Slider;
