import axios from "axios";

const API_URL = "http://localhost:1337/api"; // Adjust if your Strapi server URL is different

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/local`, {
    identifier: email,
    password,
  });
  if (response.data.jwt) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const register = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/local/register`, {
    username: email,
    email,
    password,
  });
  if (response.data.jwt) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};
