"use client";
import { data } from "@/constants/_data";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [citySelected, setCitySelected] = useState("");
  const [nights, setNights] = useState<any>(1);
  const [checkIn, setCheckIn] = useState<any>(new Date().toString());
  const [checkOut, setCheckOut] = useState<any>(new Date().toString());
  const [collection, setCollection] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [reFetch, setReFetch] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(data);

  useEffect(() => {
    //  fetchData().then((res) => setData(res));

    const savedData =
      JSON.parse(localStorage.getItem("MMT-data") as string) || [];
    setCollection(savedData || []);

    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      localStorage.setItem("MMT-data", JSON.stringify(collection));
    }
  }, [collection, loading]);

  return (
    <AppContext.Provider
      value={{
        citySelected,
        nights,
        checkIn,
        checkOut,
        collection,
        reFetch,
        itemsToShow,
        setCitySelected,

        setNights,

        setCheckIn,
        setCheckOut,

        setCollection,

        setReFetch,
        setItemsToShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
