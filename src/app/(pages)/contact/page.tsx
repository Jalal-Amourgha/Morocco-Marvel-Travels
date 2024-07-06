"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

import { useState } from "react";
import { circle } from "@/assets/icons";
import Image from "next/image";

const ContactPage = () => {
  const [inputSelected, setInputSelected] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const hanldeSendMessage = () => {
    if (!name || !email || !subject || !message) {
      return alert("Please Fill All the input");
    }

    return alert(
      "Your message is successfully seended. We'll get back to you as soon as possible!"
    );
  };

  return (
    <>
      <div className="container text-gray-4 mt-100">
        <h1 className="text-4xl font-bold mb-5 text-center">Get in Touch</h1>
        <p className="mx-auto text-center w-2/3">
          Whether you have a question about anything, our team is readt to
          answer all your questions
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[500px_calc(100%-540px)] gap-10 bg-white rounded-xl p-3 md:p-5 mt-10">
          <div className="hidden lg:block bg-primary h-full text-white rounded-xl w-full p-5 relative overflow-hidden">
            <h1 className="text-2xl font-bold mb-5">Contact Information</h1>
            <p className="text-lg">
              Fill out the form below, and we&apos;ll get back to you as soon as
              possible.
            </p>
            <div className="flex items-center gap-5 my-10 ">
              <FaPhoneAlt className="text-3xl" />
              <p>+212 666 777 888</p>
            </div>
            <div className="flex items-center gap-5 mb-10">
              <TbMailFilled className="text-3xl" />
              <p className="text-lg">support@marveltravel.com</p>
            </div>
            <div className="flex items-center gap-5 mb-10">
              <FaLocationDot className="text-3xl" />
              <p className="text-lg">Tetouan, Morocco</p>
            </div>
            <div className="absolute -bottom-[200px] -right-[200px]">
              <Image src={circle} height={400} width={400} alt="icon" />
            </div>
          </div>
          <div className="md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-5 mb-10">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className={`text-lg font-medium ${
                    inputSelected === "name" ? "text-primary" : "text-gray-4"
                  } `}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className={`w-full py-3 pe-3 bg-white outline-none border-b-1 ${
                    inputSelected === "name"
                      ? "border-primary"
                      : "border-gray-2"
                  } `}
                  placeholder="Anas Ajaanan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setInputSelected("name")}
                  onBlur={() => setInputSelected("")}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className={`text-lg font-medium ${
                    inputSelected === "email" ? "text-primary" : "text-gray-4"
                  } `}
                >
                  Your Email
                </label>
                <input
                  type="text"
                  className={`w-full py-3 pe-3 bg-white outline-none border-b-1 ${
                    inputSelected === "email"
                      ? "border-primary"
                      : "border-gray-2"
                  } `}
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setInputSelected("email")}
                  onBlur={() => setInputSelected("")}
                />
              </div>
            </div>
            <div className="w-full mb-10">
              <label
                htmlFor="subject"
                className={`text-lg font-medium ${
                  inputSelected === "subject" ? "text-primary" : "text-gray-4"
                } `}
              >
                Your Subject
              </label>
              <input
                type="text"
                className={`w-full py-3 pe-3 bg-white outline-none border-b-1 ${
                  inputSelected === "subject"
                    ? "border-primary"
                    : "border-gray-2"
                } `}
                placeholder="Booking not working!"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                onFocus={() => setInputSelected("subject")}
                onBlur={() => setInputSelected("")}
              />
            </div>
            <div className="w-full mb-5">
              <label
                htmlFor="name"
                className={`text-lg font-medium ${
                  inputSelected === "message" ? "text-primary" : "text-gray-4"
                } `}
              >
                Your Message
              </label>
              <textarea
                className={`w-full py-3 pe-3 bg-white outline-none border-b-1 ${
                  inputSelected === "message"
                    ? "border-primary"
                    : "border-gray-2"
                } `}
                placeholder="Type Your Message ...."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setInputSelected("message")}
                onBlur={() => setInputSelected("")}
                rows={7}
                cols={10}
              ></textarea>
            </div>
            <button
              className="bg-primary text-white text-lg font-medium py-3 px-5 rounded-lg"
              onClick={hanldeSendMessage}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
