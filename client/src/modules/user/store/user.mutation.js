const mutations = {
  GET_ALL_USER(state, data) {
    state.userList = data.items || [];
    state.totalItems = data.totalItems || 0;
  },
  DELETE_USER(state, userId) {
    state.deletedUser = userId;
  },
  SET_EDITING_USER(state, user) {
    state.editingUser = user;
  },
};

export default mutations;
