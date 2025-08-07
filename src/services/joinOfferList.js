import { api } from "../config/api";

export const getBuyerTradeOfferLists = async (token) => {
  try {
    const response = await api.get("/api/p2p/buyer/trades", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching offer list data", error);
    throw error;
  }
};

// mark paid
export const markPaid = async ( token, tradeId) => {
  try {
    const response = await api.post(
      `/api/p2p/buyer/trades/${tradeId}/mark-paid`,{},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error marking paid", error);
    throw error;
  }
};