"use client";

import { settings } from "@/assets/icons";
import Image from "next/image";
import {
  PiHouse,
  PiMosque,
  PiSwimmingPool,
  PiMountains,
  PiKey,
  PiBeachBall,
  PiFire,
} from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { LuParkingCircle } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Amenities, properties } from "@/constants";
import { useAppContext } from "@/context";
import { ItemProps } from "@/types";
import { data } from "@/constants/_data";
import { FaStar } from "react-icons/fa6";

const filterProps = [
  {
    id: 0,
    icon: <PiSwimmingPool className="text-2xl mx-auto" />,
    name: "Amazing pools",
  },
  {
    id: 1,
    icon: <PiBeachBall className="text-2xl mx-auto" />,
    name: "Beach Front",
  },
  {
    id: 2,
    icon: <PiMountains className="text-2xl mx-auto" />,
    name: "Amazing views",
  },
  { id: 3, icon: <PiKey className="text-2xl mx-auto" />, name: "New" },
  { id: 4, icon: <PiMosque className="text-2xl mx-auto" />, name: "Riad" },
  {
    id: 5,
    icon: <IoDiamondOutline className="text-2xl mx-auto" />,
    name: "Luxe",
  },
  {
    id: 5,
    icon: <LuParkingCircle className="text-2xl mx-auto" />,
    name: "Free Parking",
  },
  { id: 7, icon: <PiFire className="text-2xl mx-auto" />, name: "Trending" },
];

const FilteringBar = () => {
  const { itemsToShow, setItemsToShow } = useAppContext();
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState<string>("");
  const [minimumPrice, setMinimumPrice] = useState("0");
  const [maximumPrice, setMaximumPrice] = useState("999");
  const [bedrooms, setBedrooms] = useState("Any");
  const [beds, setBeds] = useState("Any");
  const [bathrooms, setBathrooms] = useState("Any");
  const [amenities, setAmenities] = useState<string[]>([]);
  const [property, setProperty] = useState<string>("");
  const [rate, setRate] = useState(0);

  const handleCheckboxChange =
    (amenite: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setAmenities([...amenities, amenite]);
      } else {
        setAmenities(amenities.filter((item) => item !== amenite));
      }
    };

  const handleResetSettings = () => {
    setMaximumPrice("0");
    setMaximumPrice("999");
    setBedrooms("Any");
    setBeds("Any");
    setBathrooms("Any");
    setAmenities([]);
    setProperty("");
  };

  useEffect(() => {
    setItemsToShow(
      data.filter((item: ItemProps) => {
        const isPriceInRange =
          (!minimumPrice || +item.price >= +minimumPrice) &&
          (!maximumPrice || +item.price <= +maximumPrice);

        const isBedroomsMatch =
          bedrooms === "Any" || !bedrooms || +item.bedRooms === +bedrooms;

        const isBedsMatch = beds === "Any" || !beds || +item.beds === +beds;

        const isBathroomsMatch =
          bathrooms === "Any" || !bathrooms || +item.bath === +bathrooms;

        const isAmenitiesMatch =
          !amenities.length ||
          item.amenities.some((amenity) => amenities.includes(amenity));

        const isRateMatch = !rate || +item.rate >= rate;

        const isPropertyMatch = !property || item.type === property;

        return (
          isPriceInRange &&
          isBedroomsMatch &&
          isBedsMatch &&
          isBathroomsMatch &&
          isRateMatch &&
          isAmenitiesMatch &&
          isPropertyMatch
        );
      })
    );
  }, [
    minimumPrice,
    maximumPrice,
    bedrooms,
    rate,
    beds,
    bathrooms,
    amenities,
    property,
  ]);

  useEffect(() => {
    if (filter) {
      setItemsToShow(
        data.filter((item: ItemProps) => item.filtering.includes(filter))
      );
    }
  }, [filter]);

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 my-10">
        <div className="hidden sm:flex flex-col justify-center gap-2 p-2 border-e-1 border-gray-2 text-gray-2 text-center hover:text-black cursor-pointer">
          <PiHouse size={20} className="mx-auto" />
          <p>Your Search</p>
        </div>
        {filterProps.map((item: any, index) => (
          <div
            className={`flex flex-col justify-center  gap-2 p-2 ${
              item.name === filter ? "text-black" : "text-gray-2"
            } text-center hover:text-black cursor-pointer`}
            onClick={() => setFilter(item.name)}
            key={index}
          >
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
        <button
          className="h-fit flex justify-center items-center gap-3 text-black text-lg font-normal bg-inherit border-1 border-gray-2 my-auto py-3 px-5 rounded-full"
          onClick={() => setOpenFilter(true)}
        >
          <Image src={settings} width={20} height={20} alt="settings icon" />{" "}
          <span>Filter</span>
        </button>
      </div>

      {openFilter ? (
        <div
          className="fixed top-0 left-0 z-50 inset-7 w-full h-screen bg-black/30 flex items-center flex-col justify-center"
          onClick={() => setOpenFilter(false)}
        >
          <div className="bg-white max-w-[800px] w-full mx-auto py-5 shadow border-b-1 border-gray-3 rounded-t-2xl">
            <div className="w-[calc(100%-40px)] mx-auto text-2xl text-gray-4 font-medium flex justify-between items-center">
              <div></div>
              <h1>Filters</h1>
              <IoClose
                className="cursor-pointer"
                onClick={() => setOpenFilter(false)}
              />
            </div>
          </div>
          <div
            className="bg-white relative max-w-[800px] max-h-[80vh] overflow-x-hidden overflow-y-scroll w-full p-5 rounded-b-2xl shadow"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="py-10 border-b-1 border-gray-3">
              <h1 className="text-gray-4 text-2xl font-semibold">
                Price range
              </h1>
              <p>Nightly prices before fees and taxes</p>
              <div className="flex items-center gap-2 w-full mt-5">
                <div className="p-2 rounded-lg border-1 border-gray-3">
                  <label className="text-gray-2">Minimum</label>
                  <input
                    type="text"
                    className="border-none outline-none text-base w-full"
                    value={minimumPrice}
                    onChange={(e) => {
                      /^\d*$/.test(e.target.value) && +e.target.value >= 0
                        ? setMinimumPrice(e.target.value)
                        : console.log(e.target.value);
                    }}
                  />
                </div>
                <div className="text-gray-3">__________________________</div>
                <div className="p-2 rounded-lg border-1 border-gray-3">
                  <label className="text-gray-2">Maximum</label>
                  <input
                    type="text"
                    className="border-none outline-none text-base w-full"
                    value={maximumPrice}
                    onChange={(e) => {
                      /^\d*$/.test(e.target.value) && +e.target.value >= 1
                        ? setMaximumPrice(e.target.value)
                        : console.log(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="py-10 border-b-1 border-gray-3">
              <h1 className="text-gray-4 text-2xl font-semibold mb-5">
                Rooms and Beds
              </h1>

              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-lg text-gray-4">Bedrooms</p>
                  <div className="flex flex-row gap-2 mt-3">
                    {["Any", "1", "2", "3", "4", "5", "6"].map((item) => (
                      <span
                        className={`py-2 px-6 border-1 border-gray-3 hover:border-gray-4 text-lg font-medium ${
                          bedrooms === item
                            ? "bg-gray-4 text-white border-gray-4 "
                            : ""
                        } hover:bg-gray-4 hover:text-white hover:border-gray-4 rounded-full cursor-pointer`}
                        onClick={() => setBedrooms(item)}
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-4">Beds</p>
                  <div className="flex flex-row gap-2 mt-3">
                    {["Any", "1", "2", "3", "4", "5", "6"].map((item) => (
                      <span
                        className={`py-2 px-6 border-1 border-gray-3 hover:border-gray-4 text-lg font-medium ${
                          beds === item
                            ? "bg-gray-4 text-white border-gray-4 "
                            : ""
                        } hover:bg-gray-4 hover:text-white hover:border-gray-4 rounded-full cursor-pointer`}
                        onClick={() => setBeds(item)}
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-4">Bathrooms</p>
                  <div className="flex flex-row gap-2 mt-3">
                    {["Any", "1", "2", "3", "4", "5", "6"].map((item) => (
                      <span
                        className={`py-2 px-6 border-1 border-gray-3 hover:border-gray-4 text-lg font-medium ${
                          bathrooms === item
                            ? "bg-gray-4 text-white border-gray-4 "
                            : ""
                        } hover:bg-gray-4 hover:text-white hover:border-gray-4 rounded-full cursor-pointer`}
                        onClick={() => setBathrooms(item)}
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10 border-b-1 border-gray-3">
              <h1 className="text-gray-4 text-2xl font-semibold mb-2">
                Rating
              </h1>
              <p>Show only ratings more than</p>
              <div className="grid grid-cols-5 border-1 border-gray-3 rounded-lg overflow-hidden mt-5">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <div
                    className={`w-full flex justify-center items-center gap-1 py-5  ${
                      star !== 5 ? "border-e-1 border-gray-3" : ""
                    } ${
                      star === rate ? "bg-gray-4 text-white border-gray-4" : ""
                    } duration-300 cursor-pointer`}
                    onClick={() => setRate(star)}
                    key={star}
                  >
                    <span className="text-xl font-medium">{star}</span>
                    <FaStar className="text-[#F2994A]" />
                  </div>
                ))}
              </div>
            </div>
            <div className="py-10 border-b-1 border-gray-3">
              <h1 className="text-gray-4 text-2xl font-semibold mb-5">
                Amenities
              </h1>
              <div className="grid grid-cols-2 gap-4">
                {Amenities.map((item: any) => (
                  <div className="flex items-center gap-4" key={item.id}>
                    <input
                      type="checkbox"
                      id={`checkbox-${item.id}`}
                      className="w-5 h-5 accent-gray-4 cursor-pointer"
                      onChange={handleCheckboxChange(item.name)}
                    />
                    <label
                      htmlFor={`checkbox-${item.id}`}
                      className={`text-lg  text-gray-4 font-normal cursor-pointer`}
                    >
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-10">
              <h1 className="text-gray-4 text-2xl font-semibold mb-5">
                Property type
              </h1>
              <div className="grid grid-cols-3 gap-5">
                {properties.map((item: any) => (
                  <div
                    className={`flex flex-col gap-4 p-6 border-1 ${
                      item.name === property
                        ? "border-gray-4"
                        : "border-gray-1 "
                    } rounded-xl hover:border-gray-4 cursor-pointer text-gray-4 text-xl font-medium`}
                    onClick={() => setProperty(item.name)}
                    key={item.id}
                  >
                    <Image src={item.icon} width={40} height={40} alt="icon" />
                    <h1>{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-lg mt-10">
              <button
                className="text-gray-4 py-2 px-4"
                onClick={handleResetSettings}
              >
                Clear all
              </button>
              <button
                className="bg-gray-4 text-white py-2 px-5 rounded-md"
                onClick={() => setOpenFilter(false)}
              >
                Show ({itemsToShow.length}) places
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FilteringBar;
