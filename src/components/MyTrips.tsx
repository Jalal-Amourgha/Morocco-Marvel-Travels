"use client";

import Image from "next/image";
import { format } from "date-fns";

const MyTrips = ({ data }: { data: any }) => {
  return (
    <div className="p-5">
      <h1 className="text-gray-4 font-bold text-2xl mb-10">My Trips</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data.length > 0 ? (
          data.map((item: any, index: number) => (
            <div key={index}>
              <div className="w-full relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={item.img}
                  fill
                  sizes="100%"
                  className="object-cover hover:scale-110 duration-300 cursor-pointer"
                  alt="img"
                />
              </div>
              <h1 className="text-xl font-semibold line-clamp-1 text-gray-4 hover:text-primary mt-2 mb-1 cursor-pointer">
                {item.name}
              </h1>

              <div className="flex flex-col gap-1 text-[15px] text-gray-2">
                <p className="text-red-400">Non Refundable</p>

                <p>Check in : {format(new Date(item.checkIn), "yyyy-MM-d")}</p>

                <p>
                  Check out :
                  {format(new Date(item.checkOut), "eee, d  MMM yyyy")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-2xl text-gray-4 font-semibold text-center mt-5">
            Currently, your Bookign History is empty.
          </h1>
        )}
      </div>
    </div>
  );
};

export default MyTrips;
