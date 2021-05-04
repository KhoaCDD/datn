import axios from 'axios';
import _ from 'lodash';
import TokenService from '../helpers/token';
// eslint-disable-next-line import/no-cycle
import authService from '../modules/auth/services';

const baseUrl = process.env.VUE_APP_API_URL;
const options = {
  baseURL: baseUrl,
  headers: {},
};

if (TokenService.getToken() !== null) {
  options.headers = TokenService.getHeader();
}

const axiosInstance = axios.create(options);

const sendRefreshToken = async () => {
  const response = (await axios.post(`${baseUrl}/api/refresh-token`, {}, {
      headers: {
          Authorization: `Bearer ${TokenService.getRefreshToken()}`,
      },
  }));
  if (response?.data?.code === 200) {
      // update localStorage
      const tokenExpiredIn = response?.data?.data?.accessToken?.expiresIn || 0;
      const refreshTokenExpiredIn = response?.data?.data?.refreshToken?.expiresIn || 0;
      TokenService.setToken(response?.data?.data?.accessToken?.token);
      TokenService.setExpiredAt(new Date().getTime() + tokenExpiredIn * 1000);
      TokenService.setRefreshToken(response?.data?.data?.refreshToken?.token);
      TokenService.setRefreshTokenExpiredAt(
          new Date().getTime() + refreshTokenExpiredIn * 1000,
      );
      TokenService.setUser(response?.data?.data?.profile);
  } else {
      authService.logout();
  }
  return response.data;
};
const throttled = _.throttle(sendRefreshToken, 100, { trailing: false });

axiosInstance.interceptors.request.use(async (request) => {
    const tokenExpiredAt = +TokenService.getExpiredAt();
    if (tokenExpiredAt && tokenExpiredAt <= new Date().getTime()) {
        // token expired, check refresh token
        const refreshToken = TokenService.getRefreshToken();
        const refreshTokenExpiredAt = +TokenService.getRefreshTokenExpiredAt();
        if (
            !refreshToken
            || !refreshTokenExpiredAt
            || refreshTokenExpiredAt <= new Date().getTime()
        ) {
            // refresh token expired
            authService.logout();
        } else {
            // check refresh token ok, call refresh token api
            await throttled();
        }
        request.headers = {
            ...TokenService.getHeader(),
        };
    }
    return request;
});

axiosInstance.interceptors.response.use((response) => response);

export default axiosInstance;
