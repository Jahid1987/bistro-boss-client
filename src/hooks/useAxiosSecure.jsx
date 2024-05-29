import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  // using interceptors to log out the user when it is not authorized api
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      // console.log("erros in interceptor", error);
      const status = error?.response?.status;
      if (status === 401 || status === 403) {
        await logOutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
