"use client";

import { logo } from "@/assets/icons";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !email || !name) {
      return alert("Pleas Fill all the inputs!");
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",

        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        router.push("/sign-in");
      } else {
        console.log("This email is already taken");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container  h-screen  flex items-center justify-center">
      <div className="bg-white h-full lg:h-[750px] w-full grid grid-cols-1 lg:grid-cols-[calc(100%-552px)_552px] p-5 rounded-lg my-5 shadow">
        <div className="h-full w-full flex flex-col justify-between">
          <div className="w-fit cursor-pointer" onClick={() => router.back()}>
            <Image src={logo} className="max-w-[160px]" alt="logo" />
          </div>
          <form onSubmit={handleSubmit} className="mx-auto text-gray-4">
            <h1 className="text-2xl font-bold text-center mb-5">Register</h1>
            <div className="mb-5">
              <label className="text-lg font-medium">Full name</label>
              <input
                type="text"
                className="bg-gray-1 p-3 w-full rounded-lg mt-2"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="text-lg font-medium">Email address</label>
              <input
                type="email"
                className="bg-gray-1 p-3 w-full rounded-lg mt-2"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="text-lg font-medium">Password</label>
              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="bg-gray-1 p-3 w-full rounded-lg my-2"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute top-0 right-0  h-full w-10 flex justify-center items-center text-2xl text-gray-2 hover:text-primary cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-primary" />
                  ) : (
                    <FaEye />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-1 text-gray-2">
                <input type="checkbox" id="sign-in" />
                <label
                  htmlFor="sign-in"
                  className={`hover:text-primary cursor-pointer`}
                >
                  Keep me sign in
                </label>
              </div>
              <span className="text-primary cursor-pointer">
                Forgot Password?
              </span>
            </div>
            <button className="bg-primary w-full text-white text-lg font-semibold py-3 rounded-lg">
              Sign up
            </button>
            <p className="text-gray-2 text-center mt-10">
              Already have an account?{" "}
              <Link className="text-primary " href={"/sign-in"}>
                Sign in
              </Link>
            </p>
          </form>
          <p className="text-gray-2">
            &copy; 2024 Morocco Marvel Travels all rights reserved
          </p>
        </div>
        <div className="hidden lg:block bg-register-bg h-full w-full bg-no-repeat  bg-right bg-contain"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
