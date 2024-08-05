import axios from "axios";

const API_URL = "http://localhost:1337/api";

export const authProvider = {
  isAuthenticated: localStorage.getItem("user") ? true : false,
  email: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).user.email
    : null,
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/local`, {
      identifier: email,
      password,
    });
    if (response.data.jwt) {
      localStorage.setItem("user", JSON.stringify(response.data));
      authProvider.isAuthenticated = true;
      authProvider.email = email;
    }
    return response.data;
  },
  register: async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/local/register`, {
      username: email,
      email,
      password,
    });
    if (response.data.jwt) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  },
  logout: () => {
    localStorage.removeItem("user");
    authProvider.isAuthenticated = false;
    authProvider.email = null;
  },
};
