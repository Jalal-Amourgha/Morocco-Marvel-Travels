"use client";

import { about } from "@/assets/images";
import { Achievements, Services } from "@/components";

import { HeaderTitle } from "@/components/HeaderTitle";
import SimpleSlider from "@/components/Slider";

import { agencyReviews, questions, team } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const AboutPage = () => {
  const [questionOpened, setQuestionOpened] = useState([0]);

  const handleDisplayAnswer = (id: number) => {
    if (questionOpened.includes(id)) {
      return setQuestionOpened(
        questionOpened.filter((question) => question !== id)
      );
    } else {
      return setQuestionOpened([...questionOpened, id]);
    }
  };

  return (
    <>
      {/* Our Story */}
      <div className="container mt-14  text-gray-4 ">
        <HeaderTitle title="About us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mb-10">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-5 text-lg font-normal">
              <h1 className="text-xl font-semibold">Our Story</h1>
              <p>
                Welcome to Morocco Marvel Travel, your gateway to unforgettable
                travel experiences in Morocco and beyond. Established with a
                passion for travel and a commitment to excellence, our agency
                specializes in creating personalized itineraries that cater to
                your unique interests and needs. Whether you are seeking a
                luxurious getaway, an adventurous excursion, or a cultural
                immersion, we provide comprehensive services to ensure a
                seamless and memorable journey.
              </p>
              <p>
                Our team of experienced travel experts is dedicated to offering
                unparalleled customer service, from the moment you book with us
                until you return home. Explore the magic of Morocco with
                confidence, knowing that our agency is with you every step of
                the way. Discover new destinations, create lasting memories, and
                let us turn your travel dreams into reality.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Image
              src={about}
              width={350}
              height={300}
              className="rounded-lg mx-auto"
              alt="about image"
            />
          </div>
        </div>
      </div>

      {/* Display some of our Achievemnets */}
      <Achievements />

      {/* Display out Team */}
      <div className="container mt-100">
        <HeaderTitle title="Our Team" />
        <SimpleSlider data={team} type="team" />
      </div>

      {/* Display some common questions */}
      <section className="container my-100">
        <HeaderTitle
          title="Frequently Asked Questions"
          description="  Find out why our customers can not stop raving about social media
          booster platform."
        />
        <div className="flex flex-col gap-10">
          {questions.map((question) => (
            <div
              className={`p-2 md:px-4 md:py-6 border-1 border-primary rounded-lg  ${
                questionOpened.includes(question.id)
                  ? "bg-primary text-white"
                  : "text-primary"
              } duration-500 cursor-pointer`}
              onClick={() => handleDisplayAnswer(question.id)}
              key={question.id}
            >
              <div className="flex justify-between items-center ">
                <h1 className="text-xl font-semibold">{question.question}</h1>
                <div
                  className={`text-2xl ${
                    questionOpened.includes(question.id)
                      ? "text-white"
                      : "text-primary"
                  } `}
                >
                  {questionOpened.includes(question.id) ? (
                    <TiArrowSortedUp />
                  ) : (
                    <TiArrowSortedDown />
                  )}
                </div>
              </div>
              <p
                className={`text-lg font-medium duration-500 ${
                  questionOpened.includes(question.id) ? "block mt-5" : "hidden"
                }`}
              >
                {question.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Display some client Review */}
      <div className="container mt-100 h-full">
        <HeaderTitle
          title="What our clients say about us"
          description="Reviews from our wonderfull clients."
        />
        <SimpleSlider data={agencyReviews} type="review" />
      </div>

      {/* Display our Services*/}
      <Services />
    </>
  );
};

export default AboutPage;
