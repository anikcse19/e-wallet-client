import { HandCoins } from "lucide";
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Offers",
    icon: <HandCoins size={24} />,
    link: "/buyer-offers",
  },
  {
    id: 2,
    title: "Join Lists",
    icon: <HandCoins size={24} />,
    link: "/join-lists",
  },
  {
    id: 3,
    title: "My Offer List",
    icon: <HandCoins size={24} />,
    link: "/buyer-offers",
  },
  {
    id: 4,
    title: "My Trade List",
    icon: <HandCoins size={24} />,
    link: "/trade-lists",
  },
];

const ServiceSection = () => {
  return (
    <div className="my-6 px-2">
      <div className="grid grid-cols-4 gap-3">
        {services.map((service) => (
          <Link
            to={service.link}
        
            className="flex flex-col items-center text-xs cursor-pointer hover:text-gray-200"
          >
            {/* {service.icon} */}
            <span>{service.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
