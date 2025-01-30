"use client";
import Cookies from "js-cookie";

// Retrieve token
export const getAuthToken = () => {
  const token = Cookies.get("token");
  return token || null; // Return null if the token doesn't exist
};
