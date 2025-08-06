import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { token } from "../../../services/token";
import { getTransactionHistory } from "../../../services/transectionHistoryApi";
import { formatTransactionDate } from "../../../utils/timeFormat";



export default function TransactionsTab() {
      const [transactions, setTransactions] = useState([]);
  
const [loading, setLoading] = useState(true);
useEffect(() => {
  (async () => {
    try {
      const data = await getTransactionHistory(token);
      setTransactions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  })();
}, []);
      console.log("tran =",transactions);
  return (
    <div>
      {/* Search Bar & Filter */}
      <div className="flex items-center gap-2 py-3">
        <input
          type="text"
          placeholder="Search by TrxID or number"
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-pink-600"
        />
        <button className="border rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center gap-1">
          <CiFilter size={"1.3rem"} />
          Filter
        </button>
      </div>

      <p className="text-xs text-gray-500 mb-2">
        Transactions from the last 90 days
      </p>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : transactions.length > 0 ? (
          <>
            {" "}
            {transactions.map((trx) => (
              <div
                key={trx._id}
                className="flex items-center justify-between py-3 border-b border-gray-200"
              >
                <div className=" flex gap-4 items-center">
                  <img
                    src="/user.png"
                    className=" w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div>
                    <p className="font-medium">{trx.referenceModel}</p>
                    <p className="text-sm text-gray-600">{trx.type}</p>
                    <p className="text-xs text-gray-400">
                      TrxID : {trx.reference}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className={`font-semibold`}>
                    {trx.amount}
                    {/* {trx.amount < 0
                      ? `- ৳${Math.abs(trx.amount)}`
                      : `+ ৳${trx.amount}`} */}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatTransactionDate(trx.createdAt)}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No transactions found</p>
        )}
      </div>
    </div>
  );
}
