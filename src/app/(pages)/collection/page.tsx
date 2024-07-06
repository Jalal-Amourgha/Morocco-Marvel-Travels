"use client";
import ItemCard from "@/components/ItemCard";
import SimpleSlider from "@/components/Slider";
import { data } from "@/constants/_data";
import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import React from "react";

const CollectionPage = () => {
  const { collection, setCollection } = useAppContext();
  const router = useRouter();

  return (
    <>
      <section className="container mx-auto mt-[50px]">
        <h1 className="text-2xl text-gray-4 font-semibold mb-10">
          Collection ({collection.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 lg:gap-x-5 lg:gap-y-10">
          {collection &&
            collection.map((item: any, index: number) => (
              <ItemCard item={item} key={index} />
            ))}
        </div>
      </section>

      {collection.length === 0 ? (
        <div className="h-[500px] w-full flex justify-center items-center flex-col gap-10">
          <h1 className="text-3xl text-gray-4 font-bold text-center">
            Currently, your Collection is empty. Go to Booking page and start
            adding items.
          </h1>
          <div className="w-full mx-auto text-center">
            <button
              className="bg-primary text-white text-lg font-semibold py-3 px-6 rounded-lg mx-auto"
              onClick={() => router.push("/booking")}
            >
              Book Now
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <section className="container mt-100">
        <h1 className="text-2xl text-gray-4 font-semibold mb-10">
          Based on your history
        </h1>
        <SimpleSlider data={data.filter((e, i) => i < 5)} type="room" />
      </section>
    </>
  );
};

export default CollectionPage;
