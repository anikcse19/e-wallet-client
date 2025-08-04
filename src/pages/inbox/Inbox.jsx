import React, { useState } from 'react';
import TransactionsTab from './components/TransactionsTab';


const Inbox = () => {
      const [activeTab, setActiveTab] = useState("transactions");
    return (
      <div className="w-full max-w-md mx-auto mb-12">
        {/* Header */}
        <div className="bg-pink-600 flex justify-between items-center text-white text-lg font-semibold p-4">
          <h2> Inbox</h2>

          <img src="/bkashLogo.png" className=" w-8 h-8 " alt="" />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("transactions")}
            className={`flex-1 text-center py-2 ${
              activeTab === "transactions"
                ? "text-pink-600 border-b-2 border-pink-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Transactions
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`flex-1 text-center py-2 ${
              activeTab === "notifications"
                ? "text-pink-600 border-b-2 border-pink-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            Notifications
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "transactions" ? (
            <div>
              {/* You can map transaction list here */}
              <TransactionsTab></TransactionsTab>
            </div>
          ) : (
            <div>
              {/* You can map notification list here */}
              <p className="text-gray-600">Notifications List Component</p>
            </div>
          )}
        </div>
      </div>
    );
};

export default Inbox;