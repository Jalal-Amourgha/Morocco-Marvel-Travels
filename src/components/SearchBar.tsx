"use client";
import { cities, data } from "@/constants/_data";
import { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { format } from "date-fns";
import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useAppContext } from "@/context";
import { ItemProps } from "@/types";

const SearchBar = () => {
  const { citySelected, setCitySelected, itemsToShow, setItemsToShow } =
    useAppContext();
  const [checkIn, setCheckIn] = useState(new Date().toString());

  useEffect(() => {
    if (citySelected) {
      setItemsToShow(
        data.filter((item: ItemProps) => item.city === citySelected)
      );
    }
  }, [citySelected]);

  return (
    <div className="bg-gray-1 w-fill my-[60px] ">
      <div className="container mx-auto bg-white shadow px-3 pt-1 pb-3 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3 mx-1">
          <div className="pt-2">
            <Autocomplete
              id="country-select-demo"
              sx={{ width: "100%" }}
              options={cities}
              autoHighlight
              getOptionLabel={(option) => option}
              onChange={(e) => setCitySelected(e.currentTarget.textContent)}
              className="gray-1"
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                  key={option}
                >
                  {option}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  variant="outlined"
                  label="Search destination"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </div>
          <div className="overflow-hidden w-full">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  minDate={dayjs(format(new Date(), "yyyy-M-d"))}
                  onChange={(e: any) => setCheckIn(e?.toString())}
                  label="Check in"
                  className="gray-1 w-full"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <div>
            <div className="overflow-hidden w-full">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    minDate={dayjs(format(new Date(checkIn), "yyyy-M-d"))}
                    label="Check out"
                    className="gray-1 w-full"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>

          <div className="pt-2">
            <TextField
              id="filled-number"
              label="Guests"
              type="number"
              // value={1}
              inputProps={{ min: 1, max: 10 }}
              className="gray-1"
              fullWidth
            />
          </div>
          <button className="w-full col-span-1 sm:col-span-2 xl:col-span-1 bg-primary text-center text-white text-xl font-medium rounded-lg py-2 mt-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
