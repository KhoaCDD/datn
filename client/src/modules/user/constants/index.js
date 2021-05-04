/* eslint-disable import/prefer-default-export */
const ITEMS_PER_PAGE = parseInt(`${process.env.VUE_APP_PAGINATION_ITEM_PER_PAGE}`, 0) || 10;

export const userMutations = {
  GET_ALL_USER: 'GET_ALL_USER',
  ITEMS_PER_PAGE,
  DELETE_USER: 'DELETE_USER',
  SET_EDITING_USER: 'SET_EDITING_USER',
};
