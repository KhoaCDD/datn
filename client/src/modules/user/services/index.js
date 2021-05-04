import axios from '../../../plugins/axios';

const url = process.env.VUE_APP_API_URL || 'http://localhost:3000';
const getAllUsers = async (name = '', gender = '', page = 1, limit = 10) => {
  let result = [];
  try {
    await axios.get(`${url}/api/user`, {
      params: {
        name,
        gender,
        page,
        limit,
      },
    }).then(
      (response) => {
        result = response?.data?.data;
      },
    );
  } catch (error) {
    console.log(error);
  }
  return result;
};
const createUser = async (user) => {
  let result = {};
  const {
    fullName, email, password, rePassword, gender, phone, birthday,
  } = user;
  try {
    await axios.post(`${url}/api/user`, {
      fullName,
      email,
      password,
      rePassword,
      gender,
      phone,
      birthday,
    })
    .then(
      (response) => {
        result = response?.data;
      },
    );
  } catch (error) {
    console.log(error);
  }
  return result;
};
const updateUser = async (user) => {
  let result = {};
  const {
    fullName,
    gender,
    phone = '',
    birthday = '',
  } = user;
  try {
    await axios.patch(`${url}/api/user/${user.id}`, {
      fullName,
      gender,
      phone,
      birthday,
    })
    .then(
      (response) => {
        result = response?.data;
      },
    );
  } catch (error) {
    console.log(error);
  }
  return result;
};
const updateUserPassword = async (user) => {
  let result = {};
  const {
    id,
    oldPassword,
    newPassword,
    rePassword,
  } = user;
  try {
    await axios.patch(`${url}/api/user/${id}/password`, {
      oldPassword,
      newPassword,
      rePassword,
    })
    .then(
      (response) => {
        result = response?.data;
      },
    );
  } catch (error) {
    console.log(error);
  }
  return result;
};
const deleteUser = async (userId) => {
  let result = {};
  try {
    await axios.delete(`${url}/api/user/${userId}`)
    .then(
      (response) => {
        result = response?.data;
      },
    );
  } catch (error) {
    console.log(error);
  }
  return result;
};
const userService = {
  getAllUsers,
  deleteUser,
  createUser,
  updateUser,
  updateUserPassword,
};

export default userService;
