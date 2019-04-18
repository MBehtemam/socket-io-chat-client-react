import * as Actions from "../Constants/Actions";

export const setUsersList = list => ({
  type: Actions.USERS_SET_USERS_LIST,
  payload: list
});

export const addNewUser = user => ({
  type: Actions.USERS_NEW_USER_JOIN,
  payload: user
});

export const userUpdateUserName = (userId, username) => ({
  type: Actions.USERS_USER_CHANGE_USERNAME,
  payload: {
    userId,
    username
  }
});
