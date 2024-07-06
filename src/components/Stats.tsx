import React from "react";
import { FaStar } from "react-icons/fa6";
import { GoComment, GoDotFill } from "react-icons/go";
import {
  PiCheckCircle,
  PiHandSoap,
  PiKey,
  PiMapPin,
  PiTag,
} from "react-icons/pi";

const stats = [
  { icon: <PiHandSoap className="mx-auto" />, name: "Cleanliness" },
  { icon: <PiCheckCircle className="mx-auto" />, name: "Accuracy" },
  { icon: <PiKey className="mx-auto" />, name: "Check-in" },
  { icon: <GoComment className="mx-auto" />, name: "Communication" },
  { icon: <PiMapPin className="mx-auto" />, name: "Location" },
  { icon: <PiTag className="mx-auto" />, name: "Value" },
];

export const ItemStats = ({ data }: { data: any }) => {
  return (
    <>
      <div className="flex items-center gap-2 text-3xl font-semibold text-gray-4 mb-5">
        <FaStar /> <span>{data.rate}</span>{" "}
        <GoDotFill className="text-[10px]" />
        <span>{data.reviews} reviews</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6  rounded-lg mb-10">
        {stats.map((stat, index) => (
          <div
            className={`w-full flex flex-col items-center mx-auto text-center gap-1 p-2 md:p-4   text-gray-4 text-5xl ${
              index !== 5 ? "border-e-1 border-gray-3" : ""
            }`}
            key={stat.name}
          >
            <div>
              <h1 className="text-xl font-medium">{stat.name}</h1>
              <h1 className="text-2xl font-semibold mb-5">
                {data.stats[index]}
              </h1>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
