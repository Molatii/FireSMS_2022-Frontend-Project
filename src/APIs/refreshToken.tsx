import mem from "mem";
import { Navigate } from "react-router-dom";
import axiosPublic from "./AuthUser";

const usersession = localStorage.getItem("session");

const refreshTokenFn = async () => {
  let session = JSON.parse(usersession || "");

  try {
    const response = await axiosPublic.post("/user/login", {
      refreshToken: session?.refreshToken,
    });

    session = response.data;

    if (!session?.accessToken) {
      localStorage.removeItem("session");
      localStorage.removeItem("user");
    }

    localStorage.setItem("session", JSON.stringify(session));

    // return session;
  } catch (error) {
    localStorage.removeItem("session");
    localStorage.removeItem("user");
    <Navigate to="SignIn" />;
  }
  return session;
};

const maxAge = 10000;

const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});

export default memoizedRefreshToken;
