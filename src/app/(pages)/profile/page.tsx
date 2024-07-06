"use client";
import userAvatar from "@/assets/icons/avatar.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPen, FaRegCreditCard, FaRegUser } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";

import { TbLogout2 } from "react-icons/tb";
import { signOut, useSession } from "next-auth/react";
import { useAppContext } from "@/context";
import { format } from "date-fns";
import { MyTrips, PaymentDetails, PersonalInformations } from "@/components";

const options = [
  {
    id: 1,
    label: "Personal Informations",
    icon: <FaRegUser />,
  },
  { id: 2, label: "Booking History", icon: <IoCalendarOutline /> },
  {
    id: 3,
    label: "Payment Details",
    icon: <FaRegCreditCard className="text-2xl" />,
  },
];

const ProfilePage = () => {
  const { reFetch, setReFetch } = useAppContext();
  const [showIcon, setShowIcon] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    location: "",
    birthday: "",
    trips: [],
  });
  const [filter, setFilter] = useState("Personal Informations");
  const { data: session } = useSession();

  const fetchUserData = async (id: string) => {
    const data = await fetch(`/api/user/${id}/infos`);
    const res = await data.json();

    return res;
  };

  useEffect(() => {
    if (session?.user?.email || reFetch >= 1) {
      fetchUserData(session?.user?.email as string).then((res) =>
        setUserData(res)
      );
    }
  }, [session?.user?.email, reFetch]);

  return (
    <div className="container mx-auto grid  grid-cols-1 lg:grid-cols-[500px_calc(100%-500px)]  mt-100 bg-white border-1 border-gray-3  rounded-lg">
      <div className="p-5 lg:border-e-1 lg:border-gray-3">
        <div
          className="relative w-[100px] mx-auto mb-3"
          onMouseEnter={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
        >
          <Image
            src={userAvatar}
            height={100}
            width={100}
            className="rounded-full cursor-pointer"
            alt="icon"
          />
          {showIcon ? (
            <div className="absolute bottom-0 right-0 h-10 w-10 flex justify-center items-center bg-primary text-white text-2xl border-4 border-white rounded-full">
              <FaPen />
            </div>
          ) : (
            ""
          )}
        </div>
        <h1 className="text-2xl text-gray-4 font-bold text-center">
          {userData.name}
        </h1>
        <div className="mt-5 flex items-center justify-center gap-3 text-gray-2">
          {userData.location ? (
            <div className="flex items-center gap-1">
              <IoLocationSharp />
              <span>{userData.location}</span>
            </div>
          ) : (
            ""
          )}
          {userData.location && userData.birthday ? <span>|</span> : ""}

          {userData.birthday ? (
            <div className="flex items-center gap-1">
              <LiaBirthdayCakeSolid />
              <span>{format(new Date(userData.birthday), "d MMM yyyy")}</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col gap-2 mt-5 ">
          {options.map((item) => (
            <div
              className={`flex flex-row items-center gap-2 p-4 text-lg text-gray-4 rounded-lg duration-300 hover:bg-primary hover:text-white cursor-pointer ${
                filter === item.label ? "bg-primary text-white" : ""
              }`}
              key={item.id}
              onClick={() => setFilter(item.label)}
            >
              <div className="text-2xl">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
          <div
            className="flex flex-row items-center gap-2 p-4 mt-2 text-lg text-gray-4 rounded-lg duration-300 hover:bg-primary hover:text-white cursor-pointer"
            onClick={() => signOut()}
          >
            <TbLogout2 className="text-2xl" />
            <span>Log out</span>
          </div>
        </div>
      </div>
      {filter === "Personal Informations" ? (
        <PersonalInformations data={userData} />
      ) : filter === "Booking History" ? (
        <MyTrips data={userData.trips} />
      ) : (
        <PaymentDetails userData={userData} />
      )}
    </div>
  );
};

export default ProfilePage;
