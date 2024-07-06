import { FaLocationDot } from "react-icons/fa6";
import { FaCarAlt, FaShower, FaWifi } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { BiSolidWasher } from "react-icons/bi";
import {
  PiElevator,
  PiFireExtinguisher,
  PiSwimmingPool,
  PiCity,
} from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";

const offers = [
  { icon: <FaWifi />, name: "Free wifi" },
  { icon: <FiMonitor />, name: "TV" },
  { icon: <TbAirConditioning />, name: "air conditioning" },
  { icon: <PiCity />, name: "City skyline view" },
  { icon: <FaCarAlt />, name: "Free Parking" },
  { icon: <PiElevator />, name: "Elevator" },
  { icon: <FaShower />, name: "Shower" },
  { icon: <BiSolidWasher />, name: "Washer" },
  { icon: <PiFireExtinguisher />, name: "Fire extinguisher" },
];

const area = [
  { icon: <FaLocationDot />, name: "Airport", duration: "5" },
  { icon: <FaLocationDot />, name: "Supermarket", duration: "10" },
  { icon: <FaLocationDot />, name: "City Center", duration: "10" },
  { icon: <FaLocationDot />, name: "Old Madina", duration: "15" },
  { icon: <FaLocationDot />, name: "Swimming pool", duration: "30" },
];

const Overview = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-[calc(60%-20px)_40%] gap-5 mb-100">
      <div className="p-5 rounded-lg bg-white text-gray-2 font-medium">
        <h1 className="text-2xl font-semibold text-gray-4 mb-5">Overview</h1>
        <p className="mb-3">
          Featuring free WiFi throughout the property, our luxurious
          accommodations offer a perfect blend of comfort and convenience in the
          heart of Morocco. Free private parking is available on site.
        </p>
        <p className="mb-3">
          Each room in our hotels and apartments is air-conditioned and equipped
          with a flat-screen TV. Guests will find a kettle, toaster, and
          microwave in the room, along with a private bathroom. Enjoy access to
          modern amenities including barbecue facilities and beautiful garden
          areas. Our prime locations provide easy access to Morocco&apos;s
          vibrant culture and stunning landscapes. Popular attractions and
          essential amenities are just a short distance away.
        </p>
        <p className="mb-2">
          Couples particularly appreciate the location – they rated it highly
          for a two-person trip.
        </p>
        <div className="h-[1px] w-full bg-gray-3 my-10"></div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-4 mb-5">
            What this place offers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0">
            <div>
              {offers.map((item, index) =>
                index < 3 ? (
                  <div
                    className="flex items-center gap-3 text-primary text-2xl mb-3"
                    key={index}
                  >
                    {item.icon}
                    <span className="text-lg text-gray-2">{item.name}</span>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              {offers.map((item, index) =>
                index > 2 && index < 6 ? (
                  <div
                    className="flex items-center gap-3 text-primary text-2xl mb-3"
                    key={index}
                  >
                    {item.icon}
                    <span className="text-lg text-gray-2">{item.name}</span>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
            <div>
              {offers.map((item, index) =>
                index > 5 && index < 9 ? (
                  <div
                    className="flex items-center gap-3 text-primary text-2xl mb-3"
                    key={index}
                  >
                    {item.icon}
                    <span className="text-lg text-gray-2">{item.name}</span>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13750.553044554577!2d-5.339956561723587!3d35.58583954501151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b43098682f25b%3A0x21715bdfd47be19!2sHotel%20Chams!5e0!3m2!1sen!2sma!4v1718809133154!5m2!1sen!2sma"
          className="h-[380px] w-full rounded-lg overflow-hidden shadow"
          loading="lazy"
        ></iframe>
        <div className="flex flex-col gap-2 mt-3">
          <h1 className="text-xl font-semibold text-gray-4">
            Explore the area
          </h1>
          {area.map((item) => (
            <div
              className="flex justify-between items-center text-gray-2"
              key={item.name}
            >
              <div className="flex items-center gap-1 text-xl">
                {item.icon} <span className="text-base">{item.name}</span>
              </div>
              <p>{item.duration} min drive</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
