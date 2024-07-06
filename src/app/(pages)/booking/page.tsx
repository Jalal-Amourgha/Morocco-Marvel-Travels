"use client";

import { FilteringBar, ItemCard, SearchBar } from "@/components";
import { useAppContext } from "@/context";

const BookingPage = () => {
  const { itemsToShow } = useAppContext();

  return (
    <>
      <SearchBar />
      <section className="container grid grid-cols-1 lg:grid-cols-3 lg:gap-10 ">
        <div className="col-span-3 ">
          <FilteringBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-5 lg:gap-x-5 lg:gap-y-10">
            {itemsToShow &&
              itemsToShow.map((item: any, index: number) => (
                <ItemCard item={item} key={index} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
