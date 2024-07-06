"use client";
import { data } from "@/constants/_data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { CustomerReviews } from "@/components/Reviews";
import { ItemStats } from "@/components/Stats";
import Overview from "@/components/Overview";
import BookingBox from "@/components/BookingBox";
import { Rating } from "@/components/Rating";
import SimpleSlider from "@/components/Slider";
interface BookingPageProps {
  params: {
    id: number;
  };
}

const BookingPage = ({ params }: BookingPageProps) => {
  const [itemSelected, setItemSelected] = useState<any>({
    name: "",
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (params.id) {
      setItemSelected(data.find((item) => item.id === +params.id));
    }
  }, [params]);

  if (!itemSelected.name) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {/* Display Item Images */}

      <div className="container mt-12">
        <h1 className="text-3xl text-gray-4 font-bold mb-2">
          {itemSelected.name}
        </h1>
        <div className="flex items-center gap-1 text-gray-2 mb-3">
          {itemSelected.guests} guests <GoDotFill className="text-[8px]" />
          <span> {itemSelected.beds} beds</span>{" "}
          <GoDotFill className="text-[8px]" />{" "}
          <span> {itemSelected.bedRooms} bedroom</span>
          <GoDotFill className="text-[8px]" />{" "}
          <span> {itemSelected.bath} bath</span>
        </div>
        <div className="flex items-center gap-2 text-gray-2 mb-10">
          <FaLocationDot className="text-2xl" />
          <p>{itemSelected.city}</p>
          <span>|</span>

          <Rating rate={itemSelected.rate} />

          <p>({itemSelected.reviews} reviews)</p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-y-5 md:gap-5 lg:gap-10 mb-100">
          <div className="col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-5 w-full h-[500px] cursor-pointer">
              <Image
                src={itemSelected.images[index]}
                fill
                sizes="100%"
                className="object-cover bg-center bg-no-repeat bg-cover"
                alt="image"
              />
            </div>
            <div className="grid grid-cols-5 gap-2 md:gap-3">
              {itemSelected.images.map((img: string, i: number) => (
                <div
                  className={`relative h-32 w-full rounded-lg overflow-hidden ${
                    i === index
                      ? "outline outline-offset-2 outline-4 md:outline-4 outline-primary"
                      : ""
                  } cursor-pointer`}
                  key={i}
                  onClick={() => setIndex(i)}
                >
                  <Image
                    src={img}
                    fill
                    sizes="100%"
                    className="object-cover bg-center bg-no-repeat bg-cover"
                    alt="img"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Booking Component*/}
          <BookingBox data={itemSelected} />
        </div>

        {/* Item Overview*/}
        <Overview />

        {/* Item Stats*/}
        <ItemStats data={itemSelected} />

        {/* Customer Reviews About this Item */}
        <CustomerReviews />

        {/* Display Items Simillar to this */}
        <div className="mt-100">
          <h1 className="text-2xl font-bold text-gray-4 mb-10">
            Available rooms
          </h1>
          <SimpleSlider
            data={data.filter(
              (item) =>
                item.city === itemSelected.city && item.id !== itemSelected.id
            )}
            type="room"
          />
        </div>
      </div>
    </>
  );
};

export default BookingPage;
