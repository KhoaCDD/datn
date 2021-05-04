import userService from '../services/index';
import { userMutations } from '../constants/index';

const userAction = {
  async getAllUsers(context, data = {}) {
    let result;
    const {
      name, gender, page, limit,
    } = data;
    try {
      result = await userService.getAllUsers(name, gender, page, limit);
    } catch (error) {
      console.log(error);
    }
    context.commit(userMutations.GET_ALL_USER, result);
  },
  async createUser(context, newUser) {
    let result;
    try {
      result = await userService.createUser(newUser);
    } catch (error) {
      console.log(error);
    }
    return {
      success: result.code === 200,
      message: result.message,
    };
  },
  async setEditingUser(context, user) {
    context.commit(userMutations.SET_EDITING_USER, user);
  },
  async updateUser(context, user) {
    let result;
    try {
      result = await userService.updateUser(user);
    } catch (error) {
      console.log(error);
    }
    return {
      success: result.code === 200,
      message: result.message,
    };
  },
  async updateUserPassword(context, user) {
    let result;
    try {
      result = await userService.updateUserPassword(user);
    } catch (error) {
      console.log(error);
    }
    return {
      success: result.code === 200,
      message: result.message,
    };
  },
  async deleteUser(context, userId) {
    let result;
    try {
      result = await userService.deleteUser(userId);
    } catch (error) {
      console.log(error);
    }
    if (result.code === 200) {
      context.commit(userMutations.DELETE_USER, userId);
    }
    return {
      success: result.code === 200,
      message: result.message,
    };
  },
};
export default userAction;
