import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "Company_Url_removed",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosPublic;
