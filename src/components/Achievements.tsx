"use client";
import { achievements } from "@/constants";
import Image from "next/image";
import { HeaderTitle } from "./HeaderTitle";

const Achievements = () => {
  return (
    <section className="container my-100 ">
      <HeaderTitle
        title=" Our Achievements"
        description="Our Achievements over the years"
      />

      <div className="grid grid-cols-1 md:grid-grid-cols-3 lg:grid-cols-4 gap-5 ">
        {achievements.map((achievement) => (
          <div
            className="p-3 md:p-5 rounded-lg shadow bg-white text-center text-gray-4 overflow-hidden duration-500 hover:text-primary achievement__box cursor-pointer"
            key={achievement.label}
          >
            <div className="h-20 w-20 mx-auto bg-[#d6e6f8] flex justify-center items-center rounded-full  cursor-pointer mb-5 duration-500 icon__box">
              <Image src={achievement.icon} height={50} width={50} alt="icon" />
            </div>
            <h1 className="text-3xl text-primary font-bold">
              {achievement.value}
            </h1>
            <p className="font-normal mt-5">{achievement.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
