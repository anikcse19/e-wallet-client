import React from "react";
import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    title: "সেন্ড মানি",
    icon: "/service/sendMoney.webp",
    link: "/",
  },
  {
    id: 2,
    title: "মোবাইল রিচার্জ",
    icon: "/service/mobileRecharge.webp",
    link: "/recharge",
  },
  {
    id: 3,
    title: "ক্যাশ আউট",
    icon: "/service/cashOut.webp",
    link: "/",
  },
  {
    id: 4,
    title: "পেমেন্ট",
    icon: "/service/payment.webp",
    link: "/",
  },
  {
    id: 5,
    title: "অ্যাড মানি",
    icon: "/service/addMoney.webp",
    link: "/",
  },
  {
    id: 6,
    title: "পে বিল",
    icon: "/service/paybill.webp",
    link: "/",
  },
  {
    id: 7,
    title: "সেভিংস",
    icon: "/service/savings.webp",
    link: "/",
  },
  {
    id: 12,
    title: "মাইক্রোফাইন্যান্স",
    icon: "/service/NGO.webp",
    link: "/",
  },
  {
    id: 8,
    title: "ডোনেশন",
    icon: "/service/donate.webp",
    link: "/",
  },
  {
    id: 9,
    title: "বিকাশ বান্ডেল",
    icon: "/service/bundle.webp",
    link: "/",
  },
  {
    id: 10,
    title: "বিকাশ টু ব্যাংক",
    icon: "/service/transfer-money.webp",
    link: "/",
  },
  {
    id: 11,
    title: "এডুকেশন ফি",
    icon: "/service/educationFee.webp",
    link: "/",
  },

  //   {
  //     id: 13,
  //     title: "টোল",
  //     icon: "https://example.com/icons/toll.png",
  //   },
  {
    id: 14,
    title: "রিকোয়েস্ট মানি",
    icon: "/service/requestMoney.webp",
    link: "/",
  },
  {
    id: 15,
    title: "রেমিটেন্স",
    icon: "/service/remittance.webp",
    link: "/",
  },
  {
    id: 16,
    title: "লোন",
    icon: "/service/loan.webp",
    link: "/",
  },
];
;
const ServiceSection = () => {
  return (
    <div className=" my-6 px-2">
      <div className="grid grid-cols-4 gap-3">
        {services.map((service) => (
          <Link to={service.link}
            key={1}
            className="flex flex-col items-center text-xs cursor-pointer hover:text-gray-200"
          >
            <img src={service.icon} className="w-10 h-10 mb-1" alt="" />
            {/* <HiHome className="w-6 h-6 mb-1" /> */}
            <span>{service.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
