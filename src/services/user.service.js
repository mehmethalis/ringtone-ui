import axios from "axios";

const TOKEN_TYPE = "Bearer ";

export const login = async (credentials) => {
  return await axios
    .post(`${process.env.REACT_APP_API_URL}/auth/signin/admin`, credentials)
    .then((response) => response.data);
};

export const getProfile = async () => {
  const session = await window.localStorage.getItem("session");
  const { accessToken } = JSON.parse(session);
  return await axios
    .get(`${process.env.REACT_APP_API_URL}/auth/profile`, {
      headers: { Authorization: TOKEN_TYPE + accessToken },
    })
    .then((response) => response.data);
};
