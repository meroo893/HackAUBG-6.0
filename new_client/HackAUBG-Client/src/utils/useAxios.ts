import axios from "axios";

const apiAddress: string = "";

export default function useAxios() {
  const axiosInstance = axios.create({
    baseURL: apiAddress,
  });
  return axiosInstance;
}
