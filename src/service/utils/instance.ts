import axios from "axios";

export const myAxios = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
});
