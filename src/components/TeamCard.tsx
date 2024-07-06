import Image from "next/image";

import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const socials = [
  { id: 1, icon: <FaFacebookF /> },
  { id: 3, icon: <FaXTwitter /> },
  { id: 4, icon: <FaLinkedinIn /> },
];

export const TeamCard = ({ member }: { member: any }) => {
  return (
    <div className="py-5  flex flex-col text-center">
      <div className="mb-10">
        <Image
          src={member.img}
          height={150}
          width={150}
          className="rounded-full radio mx-auto object-cover aspect-square"
          alt="member"
        />
      </div>
      <h1 className="text-xl font-bold text-gray-4 ">{member.name}</h1>
      <p className="text-lg text-gray-4 font-normal">{member.position}</p>
      <div className="flex justify-center items-center gap-2 mt-5">
        {socials.map((social) => (
          <div
            className="h-10 w-10 flex justify-center items-center rounded-full bg-light-primary text-xl text-gray-4 hover:text-primary cursor-pointer"
            key={social.id}
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
};
