import React, { useEffect, useState } from "react";
import {
  getSellerTradeOfferLists,
  releaseAsSeller,
} from "../../services/tradeList";
import { formatTransactionDate } from "../../utils/timeFormat";
import { toast } from "sonner";

const MyTradeList = () => {
  const [tradeLists, setTradeLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTradeLists = async () => {
    const token = localStorage.getItem("token"); // Or use context/state
    if (!token) return;

    try {
      const data = await getSellerTradeOfferLists(token);
      setTradeLists(data || []);
    } catch (error) {
      console.error("Failed to fetch tradeLists", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTradeLists();
  }, []);
  console.log(tradeLists);
  if (loading) return <div className="p-4">Loading...</div>;
  const handleRelease = async (tradeId) => {
    const token = localStorage.getItem("token"); // Or use context/state
    if (!token) return;

    try {
      const data = await releaseAsSeller(token, tradeId);
      if (data) {
        toast.success("release successfully");
        fetchTradeLists();
      }
    } catch (error) {
      console.error("Failed to release", error);
      toast.error("failed to release");
    }
  };

  return (
    <div className=" p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border text-sm border-gray-300 px-2 py-1  text-left">
                Seller Name
              </th>
              <th className="border text-sm border-gray-300 px-2 py-3 text-left">
                Amount
              </th>

              <th className="border text-sm border-gray-300 px-2 py-1  text-left">
                Status
              </th>
              <th className="border text-sm border-gray-300 px-2 py-1  text-left">
                Time
              </th>
              <th className="border text-sm border-gray-300 px-2 py-1  text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tradeLists.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row?.offer ? (
                    <>{row?.offer?.seller?.username}</>
                  ) : (
                    "Not Available"
                  )}
                </td>
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row?.amount}
                </td>
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {row?.status}
                </td>
                <td className="border text-sm border-gray-300 px-2 py-2">
                  {formatTransactionDate(row?.createdAt)}
                </td>
                <td className="border text-green-600 font-semibold text-sm border-gray-300 px-2 py-2">
                  {row?.status === "released" ? (
                    <>Released</>
                  ) : (
                    <button
                      className=" p-2 bg-red-600 text-white"
                      onClick={() => handleRelease(row?._id)}
                    >
                      {" "}
                      Release
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTradeList;
