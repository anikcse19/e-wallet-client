import React from "react";
const services = [
  {
    id: 1,
    title: "সেন্ড মানি",
    icon: "/service/sendMoney.webp",
  },
  {
    id: 2,
    title: "মোবাইল রিচার্জ",
    icon: "/service/mobileRecharge.webp",
  },
  {
    id: 3,
    title: "ক্যাশ আউট",
    icon: "/service/cashOut.webp",
  },
  {
    id: 4,
    title: "পেমেন্ট",
    icon: "/service/payment.webp",
  },
  {
    id: 5,
    title: "অ্যাড মানি",
    icon: "/service/addMoney.webp",
  },
  {
    id: 6,
    title: "পে বিল",
    icon: "/service/paybill.webp",
  },
  {
    id: 7,
    title: "সেভিংস",
    icon: "/service/savings.webp",
  },
  {
    id: 12,
    title: "মাইক্রোফাইন্যান্স",
    icon: "/service/NGO.webp",
  },
  {
    id: 8,
    title: "ডোনেশন",
    icon: "/service/donate.webp",
  },
  {
    id: 9,
    title: "বিকাশ বান্ডেল",
    icon: "/service/bundle.webp",
  },
  {
    id: 10,
    title: "বিকাশ টু ব্যাংক",
    icon: "/service/transfer-money.webp",
  },
  {
    id: 11,
    title: "এডুকেশন ফি",
    icon: "/service/educationFee.webp",
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
  },
  {
    id: 15,
    title: "রেমিটেন্স",
    icon: "/service/remittance.webp",
  },
  {
    id: 16,
    title: "লোন",
    icon: "/service/loan.webp",
  },
];
;
const ServiceSection = () => {
  return (
    <div className=" my-6 px-2">
      <div className="grid grid-cols-4 gap-3">
        {services.map((service) => (
          <div
            key={1}
            className="flex flex-col items-center text-xs cursor-pointer hover:text-gray-200"
          >
            <img src={service.icon} className="w-10 h-10 mb-1" alt="" />
            {/* <HiHome className="w-6 h-6 mb-1" /> */}
            <span>{service.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
