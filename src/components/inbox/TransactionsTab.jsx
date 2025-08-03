import { CiFilter } from "react-icons/ci";

const transactions = [
  {
    id: 1,
    type: "Send Money",
    name: "013XXXXXXX",
    trxId: "Cdvsdvcsdc",
    amount: -1520,
    time: "12:04am 22/07/25",
    color: "text-red-600",
  },
  {
    id: 2,
    type: "Received Money",
    name: "karim",
    trxId: "CGLHJYTB",
    amount: 1020,
    time: "08:39pm 21/07/25",
    color: "text-green-600",
  },
  {
    id: 3,
    type: "Cash In",
    name: "01465665666",
    trxId: "CUONGDCBS",
    amount: 500,
    time: "08:00pm 21/07/25",
    color: "text-green-600",
  },
  {
    id: 4,
    type: "Make Payment",
    name: "Daraz",
    trxId: "CGdcsdcZVV3",
    amount: -362,
    time: "09:26pm 14/07/25",
    color: "text-red-600",
  },
  {
    id: 5,
    type: "Received Money",
    name: "Think",
    trxId: "CGE2NUXJAM",
    amount: 10,
    time: "09:25pm 14/07/25",
    color: "text-green-600",
  },
  {
    id: 6,
    type: "Cash In",
    name: "015555555",
    trxId: "CGE2NUXJAM",
    amount: 265,
    time: "07:11pm 14/07/25",
    color: "text-green-600",
  },
];

export default function TransactionsTab() {
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
        {transactions.map((trx) => (
          <div
            key={trx.id}
            className="flex items-center justify-between py-3 border-b border-gray-200"
          >
            {/* Left */}
            <div className=" flex gap-4 items-center">
              <img src="/user.png" className=" w-10 h-10 rounded-full" alt="" />
              <div>
                <p className="font-medium">{trx.type}</p>
                <p className="text-sm text-gray-600">{trx.name}</p>
                <p className="text-xs text-gray-400">TrxID : {trx.trxId}</p>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className={`font-semibold ${trx.color}`}>
                {trx.amount < 0
                  ? `- ৳${Math.abs(trx.amount)}`
                  : `+ ৳${trx.amount}`}
              </p>
              <p className="text-xs text-gray-500">{trx.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
