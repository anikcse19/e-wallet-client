// import {
//   HomeIcon,
//   QrCodeIcon,
//   EnvelopeIcon,
// } from "@heroicons/react/24/outline";

import { BsQrCodeScan } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-pink-600 text-white rounded-t-2xl flex justify-around py-3 shadow-lg">
      {/* Home */}

      <div className="flex flex-col items-center text-sm cursor-pointer hover:text-gray-200">
        <HiHome className="w-6 h-6 mb-1" />
        <span>হোম</span>
      </div>

      {/* QR Scan */}
      <div className="flex flex-col items-center text-sm cursor-pointer hover:text-gray-200">
        <BsQrCodeScan className="w-6 h-6 mb-1" />
        <span>QR স্ক্যান</span>
      </div>

      {/* Inbox */}
      <div className="flex flex-col items-center text-sm cursor-pointer hover:text-gray-200">
        <MdEmail className="w-6 h-6 mb-1" />
        <span>ইনবক্স</span>
      </div>
    </div>
  );
}
