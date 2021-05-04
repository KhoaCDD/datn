import moment from 'moment';
// eslint-disable-next-line import/no-cycle
import axios from '../../../plugins/axios';

const url = process.env.VUE_APP_API_URL || 'http://localhost:3000';
const login = async (email, password) => {
  let response;
  let result = null;
  try {
    response = await axios.post(`${url}/api/login`, {
        email,
        password,
    });
  } catch (error) {
    console.log(error);
  }
  result = response?.data?.data;
  return result;
};

const logout = async () => {
  // call api to logout
};

const refreshAccessToken = async (username, refreshToken) => ({
  username,
  token: 'token1234567',
  refreshToken,
  expiredAt: moment().add(1, 'hours').unix(),
});

const authService = {
  login,
  logout,
  refreshAccessToken,
};

export default authService;
