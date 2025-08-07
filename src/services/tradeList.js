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