import { footerLogo } from "@/assets/icons";
import { footerLinks, sponsors } from "@/constants";
import { FooterLinksProps } from "@/types";
import Image from "next/image";

import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareWhatsapp,
  FaSquarePinterest,
  FaSquareDribbble,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaGooglePay,
  FaCcDiscover,
  FaCcStripe,
  FaCcAmazonPay,
  FaCcAmex,
  FaBitcoin,
} from "react-icons/fa6";

const socials = [
  { id: 1, icon: <FaSquareFacebook /> },
  { id: 2, icon: <FaSquareXTwitter /> },
  { id: 3, icon: <FaSquareInstagram /> },
  { id: 4, icon: <FaSquareWhatsapp /> },
  { id: 5, icon: <FaSquarePinterest /> },
  { id: 6, icon: <FaSquareDribbble /> },
];

const methods = [
  { id: 1, icon: <FaCcVisa /> },
  { id: 2, icon: <FaCcMastercard /> },
  { id: 3, icon: <FaCcPaypal /> },
  { id: 4, icon: <FaCcApplePay /> },
  { id: 5, icon: <FaGooglePay /> },
  { id: 6, icon: <FaCcDiscover /> },
  { id: 7, icon: <FaCcStripe /> },
  { id: 8, icon: <FaCcAmazonPay /> },
  { id: 9, icon: <FaCcAmex /> },
  { id: 10, icon: <FaBitcoin /> },
];
const Footer = () => {
  return (
    <>
      {/* Sponsors - Section */}
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-100 mb-10">
        {sponsors.map((item) => (
          <div key={item.id}>
            <Image
              src={item.icon}
              className="max-w-[150px] mx-auto"
              alt="icon"
            />
          </div>
        ))}
      </div>

      {/* Footer - Section */}
      <footer className="py-10 border-t-1 border-gray-2 container  text-gray-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-0 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Image
              src={footerLogo}
              className="max-w-[160px]"
              alt="footer logo"
            />
            <p className="mt-5">
              Morocco Marvel Travels. The best agency for trips.
            </p>
          </div>
          {footerLinks.map((item: FooterLinksProps) => (
            <div key={item.label}>
              <h1 className="text-[22px] font-medium mb-5">{item.label}</h1>
              <ul className="flex flex-col gap-3">
                {item.links.map((link) => (
                  <li className="cursor-pointer" key={link}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-[22px] font-medium mb-5">Payment Methods</h1>
            <div className="grid grid-cols-5 gap-1">
              {methods.map((item) => (
                <div className="text-4xl" key={item.id}>
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-1 border-gray-4 pt-10">
          <p>&copy; 2024 Morocco Marvel Travels all rights reserved.</p>
          <div className="flex items-center flex-wrap gap-3">
            {socials.map((item: any) => (
              <div className="text-3xl cursor-pointer" key={item.id}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
