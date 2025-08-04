import { api } from "../config/api";

export const getWallet = async (token) => {
  try {
    const response = await api.get("/api/users/wallet", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching wallet data", error);
    throw error;
  }
};
