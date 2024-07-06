"use client";

import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";
import { Rating } from "./Rating";
import { useRouter } from "next/navigation";

interface RoomCardprops {
  item: any;
  middle?: boolean;
}

const RoomCard = ({ item, middle }: RoomCardprops) => {
  const router = useRouter();
  return (
    <div
      className={`border-1 border-gray-3 rounded-lg overflow-hidden 
      mx-2
       `}
    >
      <div className="relative h-[230px] w-full">
        <Image
          src={item.images[0]}
          fill
          sizes="100%"
          className="object-cover bg-cover bg-center"
          alt="image"
        />
      </div>
      <div className="bg-white p-3">
        <h1 className="text-xl text-gray-4 font-medium mb-3 line-clamp-1">
          {item.name}
        </h1>
        <div className="flex items-center gap-2 text-gray-2 mb-5">
          <FaLocationDot className="text-xl text-primary" />
          <p>{item.city}</p>
          <span>|</span>
          <div className="flex items-center gap-1 ">
            <span>{item.rate}</span>
            <Rating rate={item.rate} />
          </div>
        </div>

        <div className="flex-flex-col gap-2 text-gray-2 text-lg mb-5">
          <div className="flex items-center gap-1">
            <RiUserLine className="text-xl" /> <p>{item.guests} Guests</p>
          </div>
          <div className="flex items-center gap-1">
            <IoBedOutline className="text-xl" /> <p>{item.beds} Beds</p>
          </div>
          <div className="flex items-center gap-1">
            <PiBathtub className="text-xl" /> <p>{item.bath} Bath</p>
          </div>
        </div>

        <button
          className="bg-primary text-white font-medium text-lg py-3 w-full rounded-lg"
          onClick={() => router.push(`/booking/${item.id}`)}
        >
          Reserve suite
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
