"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHeart, FaLocationDot, FaStar } from "react-icons/fa6";
import { useAppContext } from "@/context";
import { ItemProps } from "@/types";

interface HotelCardProps {
  item: any;
}

const ItemCard = ({ item }: HotelCardProps) => {
  const { collection, setCollection } = useAppContext();
  const router = useRouter();

  const handleAddToCollection = () => {
    if (collection.length === 0) {
      return setCollection([item]);
    } else if (collection.filter((e: ItemProps) => e.id === item.id).length) {
      return setCollection(
        collection.filter((e: ItemProps) => e.id !== item.id)
      );
    } else {
      return setCollection([...collection, item]);
    }
  };

  const handleViewItem = () => {
    router.push(`/booking/${item.id}`);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={handleViewItem}>
      <div className="w-full relative aspect-square rounded-xl overflow-hidden">
        <Image
          src={item.images[0]}
          fill
          sizes="100%"
          className="object-cover hover:scale-110 duration-300 cursor-pointer"
          alt="img"
        />

        <div
          className={`absolute top-2 right-2 ${
            collection.some((e: ItemProps) => e.id == item.id)
              ? "text-red-400"
              : "text-black/50"
          }  hover:text-red-400 text-2xl rounded-full cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();

            handleAddToCollection();
          }}
        >
          <FaHeart />
        </div>
      </div>
      <h1 className="text-xl font-semibold line-clamp-1 text-gray-4 hover:text-primary mt-2 mb-1 cursor-pointer">
        {item.name}
      </h1>
      <div className="flex items-center gap-2 text-gray-2 mb-3">
        <div className="flex items-center gap-1">
          <FaLocationDot /> <p>{item.city}</p>
        </div>
        <div className="flex items-center gap-1">
          <FaStar />{" "}
          <p>
            {item.rate} ({item.reviews})
          </p>
        </div>
      </div>
      <h1 className="text-gray-4 font-semibold text-xl">
        ${item.price} <span className="text-base font-normal">night</span>
      </h1>
    </div>
  );
};

export default ItemCard;
