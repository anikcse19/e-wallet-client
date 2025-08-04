import React from 'react';
import { useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { MdAutorenew } from "react-icons/md"; // Auto Pay
import { MdLocalOffer } from "react-icons/md"; // My Offer
import { MdMobileFriendly } from "react-icons/md"; // My Plan
import { MdLoop } from "react-icons/md"; // Auto Recharge

const quickOptions = [
  {
    title: "Auto Pay",
    icon: <MdAutorenew size={28} className="text-pink-600" />,
  },
  {
    title: "My Offer",
    icon: <MdLocalOffer size={28} className="text-pink-600" />,
  },
  {
    title: "My Plan",
    icon: <MdMobileFriendly size={28} className="text-pink-600" />,
  },
  {
    title: "Recharge",
    icon: <MdLoop size={28} className="text-pink-600" />,
  },
];

const recentContacts = [
  { id: 1, name: "abcd", number: "011234567", initial: "0" },
  { id: 2, name: "abcd", number: "011234567", initial: "T" },
];

const allContacts = [
  { id: 1, name: "abcd", number: "011234567", initial: "2" },
  { id: 2, name: "abcd", number: "011234567", initial: "A" },
  { id: 3, name: "abcd", number: "011234567", initial: "A" },
  { id: 4, name: "abcd", number: "011234567", initial: "A" },
  { id: 5, name: "abcd", number: "011234567", initial: "A" },
];
const MobileRecharge = () => {
   const [search, setSearch] = useState("");

   return (
     <div className="w-full  mx-auto bg-white min-h-screen">
       <div className="flex items-center justify-between bg-pink-600 text-white p-4">
         <button className="text-xl text-whit">
           <FaArrowLeft />
         </button>
         <h1 className="text-lg font-semibold">Mobile Recharge</h1>
         <button className=" text-white">
           {" "}
           <img src="/bkashLogo.png" className=" w-8 h-8 " alt="" />
         </button>
       </div>

       {/* Search */}
       <div className="p-4 border-b-4 border-gray-100">
         <div className=" flex shadow-lg border bg-gray-100 border-gray-200 shadow-gray-100 rounded-lg ">
           <button className="ml-2 ">
             <IoSearch />
           </button>
           <input
             type="text"
             placeholder="Enter name or number"
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className="w-full  px-4 py-2 text-sm focus:outline-none  "
           />
         </div>
       </div>

       {/* Quick Options */}
       <div className="flex overflow-x-auto gap-4 px-4 py-4 mb-4 border-b-4 border-gray-100">
         {quickOptions.map((opt, i) => (
           <div
             key={i}
             className="flex flex-col flex-shrink-0 w-24 sm:w-32 md:w-40 items-start p-2 shadow-lg border border-gray-200 shadow-gray-100 rounded-lg gap-4 text-end cursor-pointer hover:bg-gray-50"
           >
             <div className="text-pink-600 text-2xl">{opt.icon}</div>
             <span className="text-xs text-end font-medium">{opt.title}</span>
           </div>
         ))}
       </div>

       {/* My Number */}
       <div className="px-4 mb-4 pb-4 border-b-4 border-gray-100">
         <h2 className="text-gray-500 font-bold text-xs mb-1">My Number</h2>
         <div className="flex items-center gap-3">
           <img
             src="/user.png"
             alt="profile"
             className="w-10 h-10 rounded-full object-cover"
           />
           <div>
             <p className="font-semibold">GHJKKK KJHG</p>
             <p className="text-gray-600 text-sm">0145679523</p>
           </div>
         </div>
       </div>

       {/* Recent */}
       <div className="px-4 mb-4 border-b-4 border-gray-100">
         <h2 className=" text-gray-500 font-bold text-xs mb-1">Recent</h2>
         <div className=" rounded-lg">
           {recentContacts.map((c) => (
             <div
               key={c.id}
               className="flex items-center gap-3 py-3 last:border-none"
             >
               <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                 {c.initial}
               </div>
               <div>
                 <p className="font-medium">{c.name}</p>
                 <p className="text-sm text-gray-600">{c.number}</p>
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* All Contacts */}
       <div className="px-4">
         <h2 className="text-gray-500 font-bold text-xs mb-1">All Contacts</h2>
         {allContacts.map((c) => (
           <div
             key={c.id}
             className="flex items-center gap-3 py-3  last:border-none"
           >
             <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
               {c.initial}
             </div>
             <div>
               <p className="font-medium">{c.name}</p>
               <p className="text-sm text-gray-600">{c.number}</p>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
};

export default MobileRecharge;