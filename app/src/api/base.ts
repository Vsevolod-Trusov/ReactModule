import axios from 'axios';

import { MOCK_API_ADDRESS } from './constants';
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  X_ACCESS_TOKEN,
  X_REFRESH_TOKEN,
} from './auth/constants';

export const apiClient = axios.create({
  baseURL: MOCK_API_ADDRESS, //'http://localhost:4000', //
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (request) => {
    request.headers[X_REFRESH_TOKEN] =
      window.sessionStorage.getItem(REFRESH_TOKEN);
    request.headers[X_ACCESS_TOKEN] =
      window.sessionStorage.getItem(ACCESS_TOKEN);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    const { refreshToken, accessToken } = response.data;

    if (refreshToken && accessToken) {
      window.sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
      window.sessionStorage.setItem(ACCESS_TOKEN, accessToken);
    }

    const headers = response.headers;
    console.log(headers);

    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
