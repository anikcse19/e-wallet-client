import React, { useEffect, useState } from 'react';
import { getSellerTradeOfferLists } from '../../services/tradeList';
import { formatTransactionDate } from '../../utils/timeFormat';

const MyTradeList = () => {
      const [tradeLists, setTradeLists] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const token = localStorage.getItem("token"); // Or use context/state
        if (!token) return;
    
        const fetchTradeLists = async () => {
          try {
            const data = await getSellerTradeOfferLists(token);
            setTradeLists(data || []);
          } catch (error) {
            console.error("Failed to fetch tradeLists", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchTradeLists();
      }, []);
    
      if (loading) return <div className="p-4">Loading...</div>;
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
                      {/* {row?.offer?.seller?.username} */}
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
                    <td className="border text-sm border-gray-300 px-2 py-2">
                        release
                      {/* {row?.buyerStatus === "none" ? (
                        <button
                          className=" p-2 bg-red-600 text-white"
                          onClick={() => handlePaid(row?._id)}
                        >
                          {" "}
                          Pay
                        </button>
                      ) : (
                        <>Paid</>
                      )} */}
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