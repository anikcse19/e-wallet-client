import React, { useEffect, useState } from "react";
import { TbKayak } from "react-icons/tb";
import { getWallet } from "../../services/walletApi";

const Navbar = () => {
  const [checked, setChecked] = useState(false);
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
         const token = localStorage.getItem("token"); // Or from your auth context/state
         if (!token) {
           console.error("No token found!");
           return;
         }
      (async () => {
        try {
          const data = await getWallet(token);
          console.log(data)
          setWallet(data);
        } catch (err) {
          console.error(err);
        }
      })();
    }, []);
    console.log(wallet)
  return (
    <div className=" bg-[#e2136e] flex justify-between px-3 py-3 text-white">
      <div className=" flex items-center gap-3">
        <img src="/user.png" className=" w-8 h-8 rounded-full" alt="" />
        <div>
          <h2> Karim Rahman</h2>
          <div className="flex items-center justify-center">
            <label
              className={`relative inline-flex items-center justify-center w-36 h-7 rounded-full cursor-pointer transition-all duration-500 px-4 ${
                checked ? "bg-white" : "bg-white"
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="opacity-0 w-0 h-0"
              />

              {/* Text */}
              <span className="text-black text-center text-sm font-semibold select-none">
                {checked ? <>৳{wallet?.balance}</> : "Check Balance"}
              </span>

              {/* Knob */}
              <span
                className={`absolute top-1 bg-pink-600 left-1 w-5 h-5  text-center rounded-full transition-all duration-500  ${
                  checked ? "translate-x-28 " : "translate-x-0"
                }`}
              >
                <h2 className=" text-xl -mt-1.5">৳</h2>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-6">
        <button className=" text-white">
          {" "}
          <img src="/trophy.png" className=" w-8 h-8 " alt="" />
        </button>
        <button className=" text-white">
          {" "}
          <img src="/bkashLogo.png" className=" w-8 h-8 " alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
