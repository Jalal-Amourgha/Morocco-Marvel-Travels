"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
export const UpButton = () => {
  const [showBtn, setShowBtn] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 400) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const scrollBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        showBtn ? "" : "hidden"
      } fixed bottom-10 right-4 h-14 w-14 flex justify-center items-center bg-primary text-white text-3xl rounded-full cursor-pointer`}
      onClick={scrollBack}
    >
      <FaArrowUp />
    </div>
  );
};
