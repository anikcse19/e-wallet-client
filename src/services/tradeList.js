import { api } from "../config/api";

export const getSellerTradeOfferLists = async (token) => {
  try {
    const response = await api.get("/api/p2p/seller/trades", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching offer list data", error);
    throw error;
  }
};
// release payment
export const releaseAsSeller = async ( token, tradeId) => {
  try {
    const response = await api.post(
      `/api/p2p/seller/trades/${tradeId}/release`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error release", error);
    throw error;
  }
};