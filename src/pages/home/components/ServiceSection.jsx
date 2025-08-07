// import { HandCoins } from "lucide";
import React from "react";
import { GiSellCard, GiTrade } from "react-icons/gi";
import { MdPlaylistAddCircle } from "react-icons/md";
import { PiHandCoins } from "react-icons/pi";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Offers",
    icon: <PiHandCoins size={"2rem"} color="red" />,
    link: "/buyer-offers",
  },
  {
    id: 2,
    title: "Join Lists",
    icon: <MdPlaylistAddCircle size={"2rem"} color="green" />,
    link: "/join-lists",
  },
  {
    id: 3,
    title: "My Offer List",
    icon: <GiSellCard size={"2rem"} color="blue" />,
    link: "/my-offer-list",
  },
  {
    id: 4,
    title: "My Trade List",
    icon: <GiTrade size={"2rem"} color="green" />,
    link: "/trade-lists",
  },
];

const ServiceSection = () => {
  return (
    <div className="my-6 px-2">
      <div className="grid grid-cols-4 gap-3 ">
        {services.map((service) => (
          <Link
            to={service.link}
        
            className="flex flex-col items-center text-xs cursor-pointer hover:text-gray-200"
          >
            {service.icon}
            <span>{service.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
