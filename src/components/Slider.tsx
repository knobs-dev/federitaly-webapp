"use client";

import { Children, useState, type FC, type PropsWithChildren } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";

import "swiper/css";

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
  paginationClassName?: string;
};

const Slider: FC<PropsWithChildren<SliderProps>> = ({
  className,
  paginationClassName,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const numberOfSlides = Children.count(children);

  return (
    <Swiper
      initialSlide={currentSlide ?? 0}
      className={twMerge("w-full h-full", className)}
      onSlideChange={({ realIndex }) => {
        setCurrentSlide(realIndex);
      }}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide key={`slide-${index}`}>{child}</SwiperSlide>
      ))}
      <SliderPagination
        currentSlide={currentSlide}
        numberOfSlides={numberOfSlides}
        className={paginationClassName}
      />
    </Swiper>
  );
};

export default Slider;
