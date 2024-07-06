"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import RoomCard from "./RoomCard";
import { TeamCard } from "./TeamCard";
import { ReviewCard } from "./Reviews";

interface SliderProps {
  data: any;
  arrow?: boolean;
  type?: string;
}

const SimpleSlider = ({ data, type }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState(0);
  let sliderRef: any;

  useEffect(() => {
    sliderRef.slickGoTo(slideIndex);
  }, [slideIndex]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),

    responsive: [
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="h-full">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {data.map((item: any, index: number) =>
          type == "room" ? (
            <RoomCard item={item} key={index} />
          ) : type === "team" ? (
            <TeamCard member={item} key={index} />
          ) : type === "review" ? (
            <ReviewCard review={item} key={index} />
          ) : (
            ""
          )
        )}
      </Slider>
      <div className="h-10 w-full mt-10 flex justify-center items-center gap-4 text-gray-4 ">
        {data.map((e: any, index: number) => (
          <div
            className={`h-3 ${
              currentSlide === index
                ? "bg-primary w-14"
                : "w-3 bg-light-primary"
            }  rounded-full duration-300 hover:bg-primary hover:w-14 cursor-pointer `}
            key={index}
            onClick={() => setSlideIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SimpleSlider;
