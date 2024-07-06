"use client";

import { avatar, logo } from "@/assets/icons";
import { mobileLinks, navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import { TbLogout2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [showProfileBox, setShowProfileBox] = useState<boolean>(false);

  const handleNavigation = (path: string) => {
    setShowNav(false);
    router.push(path);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-gray-1 py-4 ">
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logo} className="max-w-[160px]" alt="logo" />
        </Link>
        <div className="hidden lg:flex flex-row  gap-5">
          <ul className="flex flex-row items-center gap-5">
            {navLinks.map((link) => (
              <li
                className={`text-xl ${
                  pathname === link.href ? "text-primary" : "text-gray-4"
                } text-gray-4 font-medium hover:text-primary`}
                key={link.label}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          {session?.user?.email ? (
            <div
              className="relative"
              onClick={() => setShowProfileBox(!showProfileBox)}
            >
              <Image
                src={avatar}
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
                alt="icon"
              />
              {showProfileBox ? (
                <div className="absolute top-12 right-0 bg-primary text-white flex flex-col gap-3 w-[200px]  p-4 rounded-lg text-lg">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => router.push("/profile")}
                  >
                    <FaRegUser />
                    <span>View Profile</span>
                  </div>
                  <div
                    className="flex items-center gap-2  cursor-pointer"
                    onClick={() => signOut()}
                  >
                    <TbLogout2 />
                    <span>Sign out</span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="flex item-center gap-3">
              <button
                className="bg-inherit  text-primary text-lg font-medium py-2 px-4 border-2 border-primary rounded-lg"
                onClick={() => router.push("/register")}
              >
                Register
              </button>
              <button
                className="bg-primary text-white text-lg font-medium py-2 px-6 border-2 border-primary rounded-lg"
                onClick={() => router.push("/sign-in")}
              >
                Sign in
              </button>
            </div>
          )}
        </div>

        {showNav ? (
          <IoClose
            className="text-3xl hover:text-primary lg:hidden cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          />
        ) : (
          <LuMenu
            className="text-3xl hover:text-primary  lg:hidden cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          />
        )}
      </div>
      <ul
        className={`lg:hidden absolute top-[84px] left-0 w-full h-[90vh] bg-gray-1 z-50 flex flex-col justify-center items-center gap-5 text-xl ${
          showNav ? "translate-x-[0px]" : "translate-x-[100%]"
        }  duration-700`}
      >
        {mobileLinks.map((item) => (
          <li
            className={`${
              pathname === item.href ? "text-primary" : "text-gray-4"
            } text-gray-4 font-medium hover:text-primary cursor-pointer`}
            onClick={() => handleNavigation(item.href)}
            key={item.label}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
