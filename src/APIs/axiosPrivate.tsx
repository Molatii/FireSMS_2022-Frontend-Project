import axios from "axios";

import memoizedRefreshToken from "./refreshToken";

axios.defaults.baseURL = "Company_Url_removed";

const usersession = localStorage.getItem("session");

axios.interceptors.request.use(
  async (config) => {
    const session = JSON.parse(usersession || "");

    if (session?.accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${session?.accessToken}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await memoizedRefreshToken();

      if (result?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.accessToken}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  },
);

const axiosPrivate = axios;
export default axiosPrivate;
