import { api } from "../config/api";


// join  offer
export const joinOffer = async (offerData, token, offerId) => {
  try {
    const response = await api.post(
      `/api/p2p/buyer/offers/${offerId}/join`,
      offerData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding offer", error);
    throw error;
  }
};

export const getBuyerOfferLists = async (token) => {
  try {
    const response = await api.get("/api/p2p/buyer/offers", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching offer list data", error);
    throw error;
  }
};