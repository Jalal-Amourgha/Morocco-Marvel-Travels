import { reviews } from "@/constants";
import Image from "next/image";
import React from "react";
import { Rating } from "./Rating";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export const CustomerReviews = () => {
  return (
    <div className="my-100">
      <h1 className="text-2xl text-gray-4 font-bold mb-10">Customer Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 ">
        {reviews.map((review) => (
          <div key={review.name}>
            <div className="flex items-center gap-5 mb-5">
              <div>
                <Image
                  src={review.icon}
                  height={80}
                  width={80}
                  className="rounded-full"
                  alt="icon"
                />
              </div>
              <div className="text-gray-4">
                <h1 className="text-xl font-semibold">{review.name}</h1>
                <p>{review.location}</p>

                <Rating rate={review.rate} />
              </div>
            </div>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="mx-2">
      <div className="relative z-10">
        <Image
          src={review.icon}
          height={80}
          width={80}
          className="rounded-full shadow ml-4"
          alt="icon"
        />
      </div>

      <div className="bg-white shadow p-4 rounded-lg mt-[-40px]">
        <div className="flex justify-end text-4xl text-light-primary">
          <FaQuoteRight />
        </div>
        <p className="text-gray-4 my-5">{review.review}</p>
        <div className="h-[1px] w-full bg-gray-3"></div>
        <div className="flex justify-between items-center mt-5  text-primary">
          <h1 className="font-semibold">{review.name}</h1>
          <div className="flex items-center gap-1">
            <FaStar /> <span>{review.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
