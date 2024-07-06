"use client";

import { trending1 } from "@/assets/images";
import { destinations, trending } from "@/constants";
import { DestinationsProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { FaStar, FaLocationDot } from "react-icons/fa6";

export const RecommendedDestinations = () => {
  const [selected, setSelected] = useState<string>("popular");
  return (
    <section className="mt-100 container">
      <h1 className="text-3xl text-gray-4 text-center font-semibold mb-10">
        Recommended Destination
      </h1>
      <div className="flex items-center justify-center">
        <button
          className={`${
            selected === "popular"
              ? "bg-white text-primary"
              : "bg-inherit text-gray-2"
          } text-lg font-medium py-2 px-5 hover:text-primary rounded-lg`}
          onClick={() => setSelected("popular")}
        >
          Popular
        </button>
        <button
          className={`${
            selected === "adventure"
              ? "bg-white text-primary"
              : "bg-inherit text-gray-2"
          } text-lg font-medium py-2 px-5 hover:text-primary rounded-lg`}
          onClick={() => setSelected("adventure")}
        >
          Adventure
        </button>
        <button
          className={`${
            selected === "calm"
              ? "bg-white text-primary"
              : "bg-inherit text-gray-2"
          } text-lg font-medium py-2 px-5 hover:text-primary rounded-lg`}
          onClick={() => setSelected("calm")}
        >
          Calm
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {destinations.map((item: DestinationsProps) =>
          item.type === selected ? (
            <div className="b p-2 rounded-2xl shadow bg-white" key={item.place}>
              <div className="relative rounded-2xl  overflow-hidden">
                <Image
                  src={item.img}
                  className="max-w-full duration-500 hover:scale-150 hover:rotate-[10deg] cursor-pointer"
                  alt={item.place}
                />
                <div className="absolute top-1 right-1 px-1 bg-white rounded-full flex items-center">
                  <FaStar className="text-[#FDCC0D]" />
                  <span className="text-gray-4 font-semibold">{item.rate}</span>
                </div>
              </div>
              <h1 className="text-xl text-gray-4 font-semibold line-clamp-1 mt-5 mb-3">
                {item.name}
              </h1>
              <div className="flex items-center gap-1">
                <FaLocationDot className="text-[#FD787B]" />

                <h4 className="text-black/75">{item.place}</h4>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </section>
  );
};

export const TrendingDestinations = () => {
  return (
    <section className="mt-100 container">
      <h1 className="text-3xl text-gray-4 text-center font-semibold mb-10">
        Trending Destination
      </h1>

      <div className="grid grid-cols-3 md:grid-cols-4 grid-flow-row md:grid-flow-row gap-2 md:gap-5 h-[600px] mt-10">
        <div
          className={`row-span-1 col-span-3 md:row-span-2 md:col-span-1 relative h-full w-full rounded-lg overflow-hidden`}
        >
          <Image
            src={trending1}
            fill
            sizes="100%"
            className="bg-cover bg-no-repeat object-cover duration-500 hover:scale-150  cursor-pointer"
            alt="merzouga"
          />
          <div className="absolute bottom-1 left-1 py-1 px-4  rounded-lg bg-white text-gray-4 font-bold ">
            Merzouga
          </div>
        </div>
        {trending.map((item) => (
          <div
            className={`${item.classes} relative h-full w-full rounded-lg overflow-hidden`}
            key={item.city}
          >
            <Image
              src={item.img}
              fill
              sizes="100%"
              className="bg-cover bg-no-repeat object-cover duration-500 hover:scale-150  cursor-pointer"
              alt={item.city}
            />
            <div className="absolute bottom-1 left-1 py-1 px-4  rounded-lg bg-white text-gray-4 font-bold ">
              {item.city}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
