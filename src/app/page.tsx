import Image from "next/image";

import { HeaderTitle } from "@/components/HeaderTitle";
import { agencyReviews } from "@/constants";
import phone from "@/assets/images/phone.png";
import phone2 from "@/assets/images/phone2.png";
import {
  RecommendedDestinations,
  TrendingDestinations,
} from "@/components/Destinations";
import { appStore, googlePlay } from "@/assets/icons";
import { Hero, Services } from "@/components";
import SimpleSlider from "@/components/Slider";

export default function Home() {
  return (
    <>
      {/* Hero - Section */}
      <Hero />

      {/* Recommended Destinations - Section */}
      <RecommendedDestinations />

      {/* Services - Section */}
      <Services />

      {/* Some Client Reviews - Section */}
      <div className="container mt-100 h-full">
        <HeaderTitle
          title="What our clients say about us"
          description="Reviews from our wonderfull clients."
        />
        <SimpleSlider data={agencyReviews} type="review" />
      </div>

      {/* Download Our App - Section */}
      <div className=" bg-mobile-bg container relative z-10  w-full bg-center bg-cover bg-no-repeat h-[600px] lg:h-[450px] bg-primary rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-10 overflow-hidden  mt-100">
        <div className="flex lg:items-center text-white md:pl-10 mt-10 lg:mt-0">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-[200%] mb-10">
              Download Our App
              <br />
              And Get 5% Off
            </h1>
            <p>
              Booking&apos;s better on the app.Use promo code
              &quot;TourBooking&quot; to save!
            </p>
            <div className="flex items-center gap-5 mt-10">
              <Image
                src={googlePlay}
                width={150}
                className="cursor-pointer"
                alt="google icon"
              />
              <Image
                src={appStore}
                width={150}
                className="cursor-pointer"
                alt="google icon"
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute bottom-[-200px] right-[350px]">
            <Image
              src={phone2}
              width={250}
              className="object-cover"
              height={500}
              alt=""
            />
          </div>
          <div className="absolute bottom-[-100px] right-[100px] md:right-[50px]">
            <Image
              src={phone}
              width={250}
              className="object-cover  w-[200px] md:w-[250px]"
              height={500}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Trending Destinations - Section */}
      <TrendingDestinations />

      {/* Subscription - Section */}
      <div className="bg-subscribe-bg container relative z-10 h-[300px] md:h-[400px] w-full bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center mt-100 rounded-2xl overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-[120%] text-center">
          Book Your Favorite
          <br />
          Place Now
        </h1>
        <div className="max-w-[600px] w-full flex relative mx-auto mt-10 ">
          <input
            type="text"
            className="w-full p-5 bg-white text-xl rounded-full"
            placeholder="Enter Your Email Address"
          />
          <button className="bg-primary text-white font-medium text-xl p-3 rounded-full absolute top-2 right-2">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
