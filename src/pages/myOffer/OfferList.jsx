/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import OfferAddModal from "./OfferAddModal";

import { toast } from "sonner";
import { getBuyerOfferLists } from "../../services/buyerOfferList";
import { addOffer, getOfferList } from "../../services/myOfferListApi";
const OfferList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchOffers = async () => {
    const token = localStorage.getItem("token"); // Or use context/state
    if (!token) return;
    try {
      const data = await getOfferList(token);
      setOffers(data || []);
    } catch (error) {
      console.error("Failed to fetch offers", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOffers();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;
  const handleAddOffer = async (offerData) => {
    const token = localStorage.getItem("token"); // Or use context/state
    if (!token) return;

    try {
      const response = await addOffer(offerData, token);
      fetchOffers();
      toast.success("successfully add offer");
    } catch (error) {
      toast.error("error to add offer");
    }
    // Here you can call your API to save offer
  };
  console.log(offers);
  return (
    <div className=" py-8 px-4">
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
                Name
              </th>
              <th className="border text-sm border-gray-300 px-2 py-3 text-left">
                Initial Amount
              </th>
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
              <th className="border text-sm border-gray-300 px-2 py-1  text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row?.seller?.username}
                </td>
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row.initialAmount}
                </td>
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
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row.status}
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
