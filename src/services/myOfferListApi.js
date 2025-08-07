import { api } from "../config/api";
// Add new offer
export const addOffer = async (offerData, token) => {
  try {
    const response = await api.post("/api/p2p/seller/offers", offerData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding offer", error);
    throw error;
  }
};

export const getOfferList = async (token) => {
  try {
    const response = await api.get("/api/p2p/seller/offers", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching offer list data", error);
    throw error;
  }
};
