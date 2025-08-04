import { api } from "../config/api";

export const getTransactionHistory = async (token) => {
  try {
    const response = await api.get("/api/users/transactions", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions history data", error);
    throw error;
  }
};
