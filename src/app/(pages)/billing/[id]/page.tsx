"use client";

import { countries, data } from "@/constants/_data";
import { useAppContext } from "@/context";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import Image from "next/image";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { paymentCards } from "@/constants";
import dayjs from "dayjs";

import { format } from "date-fns";
import { Rating } from "@/components/Rating";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
interface BillingPageProps {
  params: {
    id: number;
  };
}
const BillingPage = ({ params }: BillingPageProps) => {
  const { nights, checkIn, checkOut } = useAppContext();
  const [itemSelected, setItemSelected] = useState<any>({ name: "" });
  const [country, setCountry] = useState<any>(countries[133]);
  const [displayCountries, setDisplayCountries] = useState<any>(false);
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [hovered, setHovered] = useState<any>(0);
  const [cardName, setCardName] = useState<any>("");
  const [cardNumber, setCardNumber] = useState<any>("");
  const [cardCVV, setCardCVV] = useState<any>("");
  const [cardMonth, setCardMonth] = useState<any>("");
  const [cardYear, setCardYear] = useState<any>("");
  const [userPaymentDetails, setuserPaymentDetails] = useState<any>(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      setItemSelected(data.find((item) => item.id === +params.id));
    }
  }, [params]);

  const fetchUserData = async (id: string) => {
    const data = await fetch(`/api/user/${id}/infos`);
    const res = await data.json();

    return setuserPaymentDetails(res.paymentDetails);
  };

  useEffect(() => {
    if (session?.user?.email) {
      fetchUserData(session?.user?.email as string);
    }
  }, [session?.user?.email]);

  useEffect(() => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (userPaymentDetails) {
      setCardName(userPaymentDetails.cardName);
      setCardNumber(userPaymentDetails.cardNumber);
      setCardCVV(userPaymentDetails.cardCVV);
      setCardMonth(
        `Thu ${months[userPaymentDetails.cardMonth]} 25 2024 00:00:00 GMT+0100`
      );
      setCardYear(
        `Thu Jan 25 ${userPaymentDetails.cardYear} 00:00:00 GMT+0100`
      );
    }
  }, [userPaymentDetails]);

  const handleChangeCardNumber = (event: any) => {
    const rawValue = event.target.value.replace(/\s+/g, "");
    if (/^\d*$/.test(rawValue)) {
      const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");

      setCardNumber(formattedValue);
    }
  };
  const formatDate = (date: any) => {
    return format(new Date(date), "EEEE,MMMM d, yyyy");
  };

  const handleSubmitBillingDetails = async () => {
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !cardName ||
      !cardNumber ||
      !cardMonth ||
      !cardYear ||
      !cardCVV
    ) {
      return console.log(
        firstName,
        lastName,
        phoneNumber,
        cardName,
        cardNumber,
        cardMonth,
        cardYear,
        cardCVV
      );
    }

    if (!session?.user?.email) {
      return alert("Please Sign in");
    }
    if (session?.user?.email) {
      try {
        const response = await fetch(
          `/api/user/${session?.user?.email}/infos`,
          {
            method: "PATCH",
            body: JSON.stringify({
              type: "booking",
              item: {
                name: itemSelected.name,
                rate: itemSelected.rate,
                review: itemSelected.reviews,
                price: itemSelected.price,
                img: itemSelected.images[0],
                checkIn,
                checkOut,
                nights,
              },
            }),
          }
        );

        if (response.ok) {
          router.push("/profile");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!itemSelected.name) {
    return <h1>wallo</h1>;
  }

  return (
    <div className="container mt-100">
      <h1 className="text-2xl text-gray-4 font-bold mb-5">
        Secure your reservation
      </h1>
      <div className="grid grid-cols-1  lg:grid-cols-[calc(60%-30px)_40%] gap-7">
        <div>
          <div className="bg-white rounded-lg  mb-10">
            <div className="bg-primary px-4 py-3 text-white text-lg font-medium flex items-center gap-3 rounded-t-lg">
              <FaUser /> <h1>Personal Informations</h1>
            </div>
            <div className="p-3 md:p-6 w-full md:w-2/3">
              <div className="flex items center gap-2 mb-5">
                <div>
                  <label className="text-gray-4 font-semibold ">
                    First name
                  </label>
                  <input
                    type="text"
                    className="p-3 bg-gray-1 w-full rounded-lg border-none mt-3"
                    value={firstName}
                    onChange={(e) => {
                      /^[\p{L}\s]*$/u.test(e.target.value)
                        ? setFirstName(e.target.value)
                        : "";
                    }}
                  />
                </div>
                <div>
                  <label className="text-gray-4 font-semibold">Last name</label>
                  <input
                    type="text"
                    className="p-3 bg-gray-1 w-full rounded-lg border-none  mt-3"
                    value={lastName}
                    onChange={(e) => {
                      /^[\p{L}\s]*$/u.test(e.target.value)
                        ? setLastName(e.target.value)
                        : "";
                    }}
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-4 font-semibold mb-3">
                  Mobile number
                </label>
                <div className="flex items-center gap-2  mt-3">
                  <div className="w-56 relative">
                    <div
                      className="flex justify-between items-center bg-gray-1 p-3 rounded-lg "
                      onClick={() => setDisplayCountries(!displayCountries)}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          loading="lazy"
                          width={30}
                          height={30}
                          className="rounded-md"
                          sizes="100%"
                          src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                          alt=""
                        />
                        <span>+{country.phone}</span>
                      </div>
                      <div>
                        {displayCountries ? (
                          <TiArrowSortedUp />
                        ) : (
                          <TiArrowSortedDown />
                        )}
                      </div>
                    </div>
                    {displayCountries ? (
                      <div className="bg-white absolute top-11 left-0 w-full h-[250px] overflow-y-scroll shadow rounded-lg">
                        {countries.map((country) => (
                          <div
                            className="flex items-center gap-1 p-2 hover:bg-gray-1 cursor-pointer"
                            key={country.label}
                            onClick={() => {
                              setCountry(country);
                              setDisplayCountries(false);
                            }}
                          >
                            <Image
                              loading="lazy"
                              width={20}
                              height={20}
                              sizes="100%"
                              className="rounded-md"
                              src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                              alt=""
                            />
                            <span>+{country.phone}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <input
                    type="text"
                    className="p-3 bg-gray-1 w-full rounded-lg border-none"
                    value={phoneNumber}
                    onChange={(e) => {
                      /^\d*$/.test(e.target.value)
                        ? setPhoneNumber(e.target.value)
                        : "";
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mt-5">
                <input type="checkbox" id="receive" />
                <label htmlFor="receive" className="text-gray-4 font-medium">
                  Receive text alerts about this trip.
                </label>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg ">
            <div className="bg-primary px-4 py-3 text-white text-lg font-medium flex items-center gap-3 rounded-t-lg">
              <BsFillCreditCard2FrontFill /> <h1>Payment Details</h1>
            </div>
            <div className="p-3 md:p-6 w-full md:w-2/3">
              <div className="flex itmes center gap-3 mb-5">
                {paymentCards.map((card, index) => (
                  <div
                    className={`py-2 px-4 bg-gray-1 rounded-lg ${
                      hovered === index
                        ? "outline outline-offset-2 outline-[3px] outline-primary"
                        : ""
                    } hover:outline hover:outline-offset-2 hover:outline-[3px] hover:outline-primary cursor-pointer`}
                    key={card.id}
                    onClick={() => setHovered(index)}
                  >
                    <Image src={card.icon} height={30} width={30} alt="icon" />
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <label className="text-gray-4 font-semibold ">
                  Name on card
                </label>
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
                  <Image
                    src={paymentCards[hovered].icon}
                    height={30}
                    width={30}
                    className="rounded-md"
                    alt="icon"
                  />
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
                <div className="w-full">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker", "DatePicker"]}>
                      {cardMonth ? (
                        <DatePicker
                          label={""}
                          openTo="month"
                          views={["month"]}
                          value={dayjs(format(new Date(cardMonth), "yyyy-M-d"))}
                          onChange={(e) => setCardMonth(e?.month())}
                          className="gray-1"
                        />
                      ) : (
                        <DatePicker
                          label={""}
                          openTo="month"
                          views={["month"]}
                          onChange={(e) => setCardMonth(e?.month())}
                          className="gray-1"
                        />
                      )}

                      {cardYear ? (
                        <DatePicker
                          label={""}
                          openTo="year"
                          views={["year"]}
                          minDate={dayjs("2024-01-01")}
                          maxDate={dayjs("2060-01-01")}
                          value={dayjs(format(new Date(cardYear), "yyyy-M-d"))}
                          onChange={(e) => setCardYear(e?.year())}
                          className="gray-1"
                        />
                      ) : (
                        <DatePicker
                          label={""}
                          openTo="year"
                          views={["year"]}
                          minDate={dayjs("2024-01-01")}
                          maxDate={dayjs("2060-01-01")}
                          onChange={(e) => setCardYear(e?.year())}
                          className="gray-1"
                        />
                      )}
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
              <div className="mb-5">
                <label className="text-gray-4 font-semibold ">
                  Security Code
                </label>
                <div className="w-full">
                  <input
                    type="password"
                    maxLength={3}
                    className="p-3 bg-gray-1 w-full rounded-lg border-none border-0 outline-none  "
                    value={cardCVV}
                    onChange={(e) => {
                      /^\d*$/.test(e.target.value)
                        ? setCardCVV(e.target.value)
                        : "";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg overflow-hidden mb-10">
            <div className="relative h-[250px] w-full">
              <Image
                src={itemSelected.images[0]}
                fill
                sizes="100%"
                className="bg-cover bg-center object-cover"
                alt="image"
              />
            </div>
            <div className="p-3">
              <h1 className="text-xl text-gray-4 font-medium mb-3">
                {itemSelected.name}
              </h1>
              <div className="flex items-center gap-1 text-gray-2 mb-5">
                <Rating rate={itemSelected.rate} />

                <p>({itemSelected.reviews} reviews)</p>
              </div>
              <p className="text-red-400 mb-3">Non refundable</p>
              <div className="flex flex-col gap-3 text-gray-2 text-lg">
                <p>Check in: {formatDate(checkIn)}</p>
                <p>Check out: {formatDate(checkOut)}</p>
                <p>{nights} night stay</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden ">
            <h1 className="bg-[#85E0AB] p-3 text-xl text-gray-4 font-semibold">
              Price Details
            </h1>
            <div className="py-5">
              <div className="flex items-center justify-between text-gray-2 px-3 py-1">
                <p>1room X {nights} nights</p>
                <p>
                  ${itemSelected.price} X {nights}
                </p>
              </div>
              <div className="flex items-center justify-between text-gray-2 px-3 py-1 ">
                <p>Tax and service fees</p>
                <p>$8.35</p>
              </div>
              <div className="border-b-1 border-gray-3 my-3"></div>
              <div className="flex items-center justify-between text-2xl text-gray-4 font-semibold p-3 ">
                <h1>Subtotal:</h1>
                <h1>${(itemSelected.price * nights + 8.35).toFixed(2)}</h1>
              </div>
              <div className="mt-5 mx-3">
                <button
                  className="w-full bg-[#85E0AB] text-gray-4 text-xl font-semibold rounded-lg py-2 "
                  onClick={handleSubmitBillingDetails}
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
