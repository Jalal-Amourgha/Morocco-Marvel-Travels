"use client";

import { useAppContext } from "@/context";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { differenceInDays, format } from "date-fns";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const BookingBox = ({ data }: { data: any }) => {
  const {
    checkIn,
    checkOut,
    setCheckIn,
    setCheckOut,
    nights,
    setNights,
    collection,
    setCollection,
  } = useAppContext();

  const router = useRouter();

  useEffect(() => {
    if (checkOut && checkOut) {
      if (differenceInDays(new Date(checkOut), new Date(checkIn)) > 1) {
        setNights(differenceInDays(new Date(checkOut), new Date(checkIn)));
      }
    }
  }, [checkOut]);

  useEffect(() => {
    var dateObj = new Date(checkIn);
    var newDate = new Date(dateObj);
    newDate.setDate(dateObj.getDate() + 1);
    setCheckOut(format(new Date(newDate.toString()), "yyyy-M-d"));
  }, [checkIn]);

  const handleAddToCollection = (item: any) => {
    if (collection.length > 0) {
      setCollection([...collection, item]);
    } else {
      setCollection([item]);
    }
  };

  return (
    <div className="bg-white pb-4 border-gray-3 border-1 rounded-lg shadow h-full w-full overflow-hidden">
      <h1 className="py-3 px-4 text-gray-4 font-medium text-lg bg-gray-1">
        Booking
      </h1>
      <div className="px-4 mt-10">
        <div className="mb-5">
          <label className="text-gray-4 text-lg font-medium">From</label>
          <div className="overflow-hidden w-full">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  minDate={dayjs(format(new Date(), "yyyy-M-d"))}
                  // value={}
                  label="Check in"
                  onChange={(e) => setCheckIn(e?.toString())}
                  className="gray-1 w-full"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className="mb-5">
          <label className="text-gray-4 text-lg font-medium">To</label>
          <div className="overflow-hidden w-full">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  minDate={dayjs(format(new Date(checkIn), "yyyy-M-d"))}
                  label="Check out"
                  onChange={(e) => setCheckOut(e?.toString())}
                  className="gray-1 w-full"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className="mb-5">
          <label className="text-gray-4 text-lg font-medium">Guests</label>
          <div className="overflow-hidden w-full pt-2">
            <TextField
              id="filled-number"
              label="Guests"
              type="number"
              className="gray-1"
              inputProps={{ min: 1, max: 10 }}
              fullWidth
            />
          </div>
        </div>
        <div className="text-center mb-5">
          <p className="text-gray-2 mb-3">Subtotal</p>
          <h1 className="text-3xl font-bold text-primary">
            ${data.price * nights}
          </h1>
        </div>
        <button
          className="bg-primary w-full text-white font-medium text-lg py-3 text-center rounded-lg mb-3"
          onClick={() => router.push(`/billing/${data.id}`)}
        >
          Confirm Booking
        </button>
        <div
          className="flex justify-center items-center gap-1 py-2 border-1 border-gray-3 rounded-lg text-lg text-gray-2 cursor-pointer"
          onClick={() => handleAddToCollection(data)}
        >
          <IoIosHeartEmpty className="text-xl" />{" "}
          <span>Save to Collection</span>
        </div>
      </div>
    </div>
  );
};

export default BookingBox;
