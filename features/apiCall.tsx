import {toast} from 'react-hot-toast'
import axios, { AxiosError } from "axios";
const Base_URL = "https://fake-store-api.mock.beeceptor.com/api/";

interface ApiCallDTO {
  Url: string;
  Method: "get" | "post" | "put" | "delete " | "patch";
  Data?: any; //body of request
  isFormData?: boolean; //
  silent?: any;
}

export default async function APICall(
  Url: string,
  Method: string,
  Data?: any,
  isFormData?: boolean,
  silent?: any
) {
  const authToken =localStorage.getItem("token");

  if (authToken) {
    // const authToken = await AsyncStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
    axios.defaults.headers.common["device"];
    axios.defaults.headers.common["Content-Type"] = isFormData
      ? "multipart/form-data"
      : "application/json";
    // axios.defaults.headers.common["cor"] = "no-cors";
  }

  axios.interceptors.response.use(
    async (response) => {
      if (response?.data?.authorization) {
        localStorage.setItem("token", response.data.authorization);
      }
      return response;
    },
    (error) => {
      return error.response;
    }
  );

  let baseUrl = Base_URL;
  if (!baseUrl.endsWith("/")) {
    baseUrl = baseUrl + "/";
  }

  if (Url.startsWith("/")) {
    Url = Url.substring(1);
  }

  try {
    const response = await axios({
      method: Method,
      url: baseUrl + Url,
      data: Data,
      // timeout: timeoutOverride || process.env.REACT_APP_REQUEST_TIMEOUT,
    });
    // if (Number(response?.status) >= 400 || Number(response.status) < 500 ) {


    //   toast.error(
    //     response?.data?.message ||
    //       " We are unable to process your request. Please try again"
    //   );
    //   toast.error(
    //     response?.data?.message ||
    //       " We are unable to process your request. Please try again"
    //   );
    //   return;
    // }

    return response?.data || response;

  } catch (err) {
    const axiosError = err as AxiosError;
    toast.error(" Server Error");
    toast.error("Server Error");
  }
}
