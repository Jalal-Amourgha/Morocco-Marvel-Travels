"use client";

import React from "react";
import { Ri24HoursLine } from "react-icons/ri";
import { FaMountainSun, FaHotel, FaPassport, FaTicket } from "react-icons/fa6";
import { AiOutlineSafety } from "react-icons/ai";
import { MdCurrencyExchange } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { HeaderTitle } from "./HeaderTitle";

const services = [
  {
    icon: <TbWorld />,
    name: "Online Booking",
    label: "Convenient and secure online booking for all your travel needs.",
  },
  {
    icon: <FaMountainSun />,
    name: "Wonderful Adventures",
    label: "Exciting and memorable adventures tailored to your preferences.",
  },
  {
    icon: <FaTicket />,
    name: "Flight Booking",
    label: "Easy and hassle-free flight bookings at competitive prices.",
  },
  {
    icon: <AiOutlineSafety />,
    name: "Travel Insurance",
    label: "Comprehensive travel insurance plans for your peace of mind.",
  },
  {
    icon: <FaPassport />,
    name: "Visa Assistance",
    label: "Expert assistance with visa applications and requirements.",
  },
  {
    icon: <MdCurrencyExchange />,
    name: "Currency Exchange",
    label: "Reliable and efficient currency exchange services.",
  },
  {
    icon: <FaHotel />,
    name: "Hotel Reservations",
    label: "Comfortable and affordable hotel reservations worldwide.",
  },
  {
    icon: <Ri24HoursLine />,
    name: "24H Support",
    label: "Around-the-clock customer support for all your travel inquiries.",
  },
];

const Services = () => {
  return (
    <section className="my-100 container">
      <HeaderTitle
        title="Our Services"
        description=" Unlock Your Adventures: Explore Our Premier Travel Services."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5">
        {services.map((service) => (
          <div className="text-center" key={service.name}>
            <div className="h-20 w-20 mx-auto bg-light-primary hover:bg-primary hover:text-white duration-300 flex justify-center items-center rounded-lg text-4xl text-primary cursor-pointer">
              {service.icon}
            </div>
            <h1 className="text-xl text-gray-4 font-semibold mt-5 mb-3">
              {service.name}
            </h1>
            <p className="text-gray-4 font-norma">{service.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
