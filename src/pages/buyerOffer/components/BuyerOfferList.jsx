/* eslint-disable no-unused-vars */
// BuyerOfferList.jsx
import React, { useEffect, useState } from "react";
import { getBuyerOfferLists, joinOffer } from "../../../services/buyerOfferList";
import { formatTransactionDate } from "../../../utils/timeFormat";
import { CiFilter } from "react-icons/ci";
import JoinOfferModal from "./JoinOfferModal";
import { toast } from "sonner";

const BuyerOfferList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOfferId, setSelectedOfferId] = useState(null);
  // fetching offers
  useEffect(() => {
    const token = localStorage.getItem("token"); // Or use context/state
    if (!token) return;

    const fetchOffers = async () => {
      try {
        const data = await getBuyerOfferLists(token);
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

  // send join
  const handleJoinOffer = async (offerData) => {
    console.log("New Offer:", offerData);
      const token = localStorage.getItem("token");
      if (!token || !selectedOfferId) return;

      try {
        const response = await joinOffer(offerData, token, selectedOfferId);
        toast.success(" joined offer successfully")
        console.log("Join offer success:", response);
        // Optionally show a success toast or update state
      } catch (error) {
        toast.error(" error to join offer")
        console.error("Failed to join offer:", error);
        // Optionally show an error toast
      }
  };
  return (
    <div>
      {/* Search Bar & Filter */}
      <div className="flex items-center gap-2 py-3">
        <input
          type="text"
          placeholder="Search by offerID or number"
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-pink-600"
        />
        <button className="border rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-1">
          <CiFilter size={"1.3rem"} />
          Filter
        </button>
      </div>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : offers.length > 0 ? (
          <>
            {" "}
            {offers.map((offer) => (
              <div
                key={offer._id}
                className="flex items-end justify-between py-3 border-b border-gray-200"
              >
                <div className=" space-y-2">
                  <div className=" flex gap-4 items-center">
                    <img
                      src="/user.png"
                      className=" w-10 h-10 rounded-full"
                      alt=""
                    />
                    <p className="font-medium">{offer?.seller?.username}</p>
                  </div>
                  <div className=" space-y-1">
                    <p className="font-semibold text-2xl">
                      <span className=" font-medium text-sm">Tk. </span>
                      {offer?.rate}{" "}
                      <span className=" text-xs font-normal text-gray-500">
                        /BDT
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      Limit:{" "}
                      <span className=" text-gray-700text-sm">
                        {" "}
                        {offer?.minLimit} - {offer?.maxLimit}
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      Available :{" "}
                      <span className=" text-gray-700 text-sm">
                        {offer?.amount}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <button
                    onClick={() => {
                      setSelectedOfferId(offer._id);
                      setIsModalOpen(true);
                    }}
                    className=" bg-green-600 text-white px-4 py-1 cursor-pointer rounded-md"
                  >
                    Sell
                  </button>
                  <p className="text-xs text-gray-500">
                    {formatTransactionDate(offer.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No transactions found</p>
        )}
      </div>
      <JoinOfferModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleJoinOffer}
      ></JoinOfferModal>
    </div>
  );
};

export default BuyerOfferList;
