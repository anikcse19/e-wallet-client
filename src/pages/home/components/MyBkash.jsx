import React from "react";
const myBkash = [
  {
    id: 1,
    title: "My Bikash",
    icon: "/service/sendMoney.webp",
  },
  {
    id: 2,
    title: "My GP",
    icon: "/service/mobileRecharge.webp",
  },
  {
    id: 3,
    title: "CashOut",
    icon: "/service/cashOut.webp",
  },
  {
    id: 4,
    title: "Payments",
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
  }

];
const MyBkash = () => {
  return (
    <div className="mb-6 px-2">
      <div className="flex items-center justify-between border-b pb-2">
        <h2>My Bkash</h2>
        <button>See all</button>
      </div>

      <div className="flex space-x-4 overflow-x-auto py-4">
        {myBkash.map((service, index) => (
          <div
            key={service.id || index}
            className="flex flex-col items-center text-xs cursor-pointer hover:text-gray-200 flex-shrink-0 w-24 sm:w-32 md:w-40"
          >
            <img
              src={service.icon}
              className="w-10 h-10 mb-1"
              alt={service.title}
            />
            <span>{service.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBkash;
