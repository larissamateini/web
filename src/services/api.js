import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-foodexplorer-zicc.onrender.com/"
});