"use client";

import { useAppContext } from "@/context";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const PaymentDetails = ({ userData }: { userData: any }) => {
  const { reFetch, setReFetch } = useAppContext();
  const [cardName, setCardName] = useState<any>("");
  const [cardNumber, setCardNumber] = useState<any>("");
  const [cardMonth, setCardMonth] = useState<any>("");
  const [cardYear, setCardYear] = useState<any>("");
  const [cardCVV, setCardCVV] = useState<any>("");
  const { data: session } = useSession();

  useEffect(() => {
    if (userData.paymentDetails) {
      setCardName(userData.paymentDetails.cardName);
      setCardNumber(userData.paymentDetails.cardNumber);
      setCardMonth(userData.paymentDetails.cardMonth);
      setCardYear(userData.paymentDetails.cardYear);
      setCardCVV(userData.paymentDetails.cardCVV);
    }
  }, [userData]);

  const handleChangeCardNumber = (event: any) => {
    const rawValue = event.target.value.replace(/\s+/g, "");
    if (/^\d*$/.test(rawValue)) {
      const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");

      setCardNumber(formattedValue);
    }
  };

  const handleChangePaymentDetails = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!cardName || !cardNumber || !cardMonth || !cardYear) {
      return alert("khawa dyali !");
    }

    try {
      const response = await fetch(`/api/user/${session?.user?.email}/infos`, {
        method: "PATCH",
        body: JSON.stringify({
          type: "payment-details",

          paymentDetails: {
            cardName,
            cardNumber,
            cardMonth,
            cardYear,
            cardCVV,
          },
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setReFetch(reFetch + 1);
    }
  };

  return (
    <div>
      <div className="flex flex-row p-5">
        <div className="w-[300px] h-[150px] bg-creditcard-front bg-contain bg-center bg-no-repeat relative text-white text-lg">
          <div className="absolute top-10 left-10">
            <p>{cardNumber}</p>
          </div>
          <div className="absolute top-[106px]  left-10">
            <p>{cardName}</p>
          </div>
          <div className="absolute top-[110px] right-10 flex items-center gap-1 text-base">
            <p>{cardMonth ? cardMonth + 1 : ""}</p>
            <span>{cardMonth ? "/" : ""}</span>
            <p>{cardYear}</p>
          </div>
        </div>
        <div className="w-[130px] h-[150px] bg-creditcard-back bg-contain bg-center bg-no-repeat relative text-white ">
          <div className="absolute top-[30px] left-4 flex flex-col  gap-1 text-[16px]">
            <p>card CVV</p>

            <p>...</p>
          </div>
          <div className="absolute top-[110px] right-2 flex items-center gap-1 text-[13px]">
            <p>{cardMonth ? cardMonth + 1 : ""}</p>
            <span>{cardMonth ? "/" : ""}</span>
            <p>{cardYear}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-5 text-gray-4 p-4 w-full">
        <h1 className="text-2xl font-bold">Payment Details</h1>
        <form onSubmit={handleChangePaymentDetails} className="w-full">
          <div className="mb-5">
            <label className="text-gray-4 font-semibold ">Name on card</label>
            <input
              type="text"
              className="p-3 bg-gray-1 w-full rounded-lg border-none mt-3"
              value={cardName}
              onChange={(e) => {
                /^[\p{L}\s]*$/u.test(e.target.value)
                  ? setCardName(e.target.value)
                  : "";
              }}
            />
          </div>
          <div className="mb-5">
            <label className="text-gray-4 font-semibold ">
              Credit card number
            </label>
            <div className="flex items-center gap-2 bg-gray-1 w-full mt-3 rounded-lg p-2">
              <input
                type="text"
                className="p-1 bg-gray-1 w-full rounded-lg border-none border-0 outline-none  "
                value={cardNumber}
                onChange={handleChangeCardNumber}
                maxLength={19}
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="text-gray-4 font-semibold ">
              Expiration Date
            </label>
            <div className="w-full flex flex-col md:flex-row gap-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker", "DatePicker"]}>
                  <DatePicker
                    className="gray-1"
                    openTo="month"
                    views={["month"]}
                    onChange={(e) => setCardMonth(e?.month())}
                  />
                  <DatePicker
                    className="gray-1"
                    openTo="year"
                    views={["year"]}
                    minDate={dayjs("2024-01-01")}
                    maxDate={dayjs("2060-01-01")}
                    onChange={(e) => setCardYear(e?.year())}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <div>
                <input
                  type="password"
                  maxLength={3}
                  className="px-3 py-4 mt-2 bg-gray-1 w-full rounded-lg border-none border-0 outline-none  "
                  placeholder="CVV Code"
                  value={cardCVV}
                  onChange={(e) => setCardCVV(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary text-white text-lg py-3 px-8 rounded-lg"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
