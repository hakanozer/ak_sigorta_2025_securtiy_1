import axios, { AxiosError, AxiosResponse } from 'axios'
import {Platform} from 'react-native'

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    return response;
  },
  async (error: AxiosError) => {
    console.log("myError", error.message)
    return Promise.reject(error);
  },
);

const baseURL = 'https://dummyjson.com/'
const config = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {os: Platform.OS, version: Platform.Version },
  params: {tokenx: 'token1234'}
})

export default config