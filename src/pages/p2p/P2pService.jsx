import React, { useState } from "react";
import Header from "../../components/shared/Header";
import OfferList from "./components/offer/OfferList";

const P2pService = () => {
  const [activeTab, setActiveTab] = useState("offer");
  return (
    <div className="w-full mx-auto mb-12">
      {/* Header */}
      <Header page="P2P service"></Header>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("offer")}
          className={`flex-1 text-center py-2 ${
            activeTab === "offer"
              ? "text-pink-600 border-b-2 border-pink-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          Offer
        </button>
        <button
          onClick={() => setActiveTab("message")}
          className={`flex-1 text-center py-2 ${
            activeTab === "message"
              ? "text-pink-600 border-b-2 border-pink-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          Message
        </button>
        <button
          onClick={() => setActiveTab("trade")}
          className={`flex-1 text-center py-2 ${
            activeTab === "trade"
              ? "text-pink-600 border-b-2 border-pink-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          Trade
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "offer" ? (
          <div>
        <OfferList></OfferList>
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

export default P2pService;
