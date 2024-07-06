"use client";

import { useAppContext } from "@/context";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { format } from "date-fns";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const PersonalInformations = ({ data }: { data: any }) => {
  const { reFetch, setReFetch } = useAppContext();
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassowrd, setConfirmPassowrd] = useState("");
  const { data: session } = useSession();

  const handleChangeUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/user/${session?.user?.email}/infos`, {
        method: "PATCH",
        body: JSON.stringify({
          type: "personal-info",
          item: {
            name: name,
            birthday: birthday,
            phoneNumber: phoneNumber,
            location: location,
          },
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setReFetch(reFetch + 1);
    }
  };

  const handleChangeUserSecurity = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!newPassword || !confirmPassowrd || !newPassword !== !confirmPassowrd) {
      return alert("Password  not match");
    }

    try {
      const response = await fetch(`/api/user/${session?.user?.email}/infos`, {
        method: "PATCH",
        body: JSON.stringify({
          type: "personal-security",
          item: {
            newPassword: newPassword,
          },
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    if (data.name) {
      setName(data.name);
      setEmail(data.email);
      setBirthday(data.birthday);
      setLocation(data.location);
    }
  }, [data]);

  useEffect(() => {
    console.log(birthday, data.birthday);
  }, [birthday]);

  return (
    <div className="text-gray-4">
      <form onSubmit={handleChangeUserInfo} className="flex flex-col gap-5 p-5">
        <h1 className="text-2xl font-bold mb-5">Personal Information</h1>
        <div className="text-lg mb-5">
          <label className="font-medium">Name</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-3 rounded-lg outline-none mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="text-lg mb-5">
          <label className="font-medium">Date of Birth</label>
          <div className="overflow-hidden w-full">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label=""
                  maxDate={dayjs(format(new Date(), "yyyy-M-d"))}
                  value={
                    birthday
                      ? dayjs(format(new Date(birthday), "yyyy-M-d"))
                      : dayjs(format(new Date(), "yyyy-M-d"))
                  }
                  // value={dayjs(
                  //   format(
                  //     new Date("Sun, 8 Jun 2024 23:00:00 GMT Thu"),
                  //     "yyyy-M-d"
                  //   )
                  // )}
                  onChange={(e: any) => setBirthday(e["$d"])}
                  className="gray-3 w-full"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className="text-lg mb-5">
          <label className="font-medium">Phone Number</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-3 rounded-lg outline-none mt-2"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="text-lg mb-5">
          <label className="font-medium">Location</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-3 rounded-lg outline-none mt-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-primary py-3 px-10 text-white text-lg font-medium rounded-lg"
        >
          Save
        </button>
      </form>

      <div className="h-[1px] w-full bg-gray-3 my-10"></div>
      <form
        onSubmit={handleChangeUserSecurity}
        className="flex flex-col gap-5 p-5"
      >
        <h1 className="text-2xl font-bold mb-5">Security</h1>

        <div className="text-lg mb-5">
          <label className="font-medium">New Password</label>
          <input
            type="password"
            className="w-full p-3 bg-gray-3 rounded-lg outline-none mt-2"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="text-lg mb-5">
          <label className="font-medium">Confirm Password</label>
          <input
            type="password"
            className="w-full p-3 bg-gray-3 rounded-lg outline-none mt-2"
            value={confirmPassowrd}
            onChange={(e) => setConfirmPassowrd(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-primary py-3 px-10 text-white text-lg font-medium rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default PersonalInformations;
