/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import OfferAddModal from "./OfferAddModal";
import { addOffer, getOfferList } from "../../../../services/offerListApi";
import { token } from "../../../../services/token";
import { toast } from "sonner";
const tableData = [
  { amount: "600", rate: "1", minLimit: "10", maxLimit: "5000" },
  { amount: "700", rate: "1.2", minLimit: "20", maxLimit: "6000" },
];
const OfferList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Or use context/state
    if (!token) return;

    const fetchOffers = async () => {
      try {
        const data = await getOfferList(token);
        setOffers(data || []);
      } catch (error) {
        console.error("Failed to fetch offers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  const handleAddOffer = async (offerData) => {
    console.log("New Offer:", offerData);
    try {
      const response = await addOffer(offerData, token);
      toast.success("successfully add offer")
      console.log("Offer added successfully:", response);
    } catch (error) {
      toast.error("error to add offer")
      console.error("Failed to add offer", error);
    }
    // Here you can call your API to save offer
  };
  return (
    <div className="">
      <div className=" flex justify-end mb-3">
        <button
          onClick={() => setIsModalOpen(true)}
          className=" flex items-center gap-2 px-2 py-1 font-medium rounded-md bg-pink-600 text-white text-sm"
        >
          <MdCreateNewFolder />
          Create
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border text-sm border-gray-300 px-2 py-3 text-left">
                Amount
              </th>
              <th className="border text-sm border-gray-300 px-2 py-1  text-left">
                Rate
              </th>
              <th className="border text-sm border-gray-300 px-2 py-1  text-left">
                Min Limit
              </th>
              <th className="border text-sm border-gray-300 px-2 py-1  text-left">
                Max Limit
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row.amount}
                </td>
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row.rate}
                </td>
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row.minLimit}
                </td>
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row.maxLimit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <OfferAddModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddOffer}
      />
    </div>
  );
};

export default OfferList;
