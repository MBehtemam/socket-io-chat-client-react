import * as Actions from "../Constants/Actions";
export const defaultState = {};

const usersReducers = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.USERS_NEW_USER_JOIN: {
      return {
        ...state,
        [action.payload.userId]: {
          username: action.payload.username,
          connected: true
        }
      };
    }
    case Actions.USERS_USER_DISCONNECT: {
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          connected: false
        }
      };
    }
    case Actions.USERS_USER_CHANGE_USERNAME: {
      return {
        ...state,
        [action.payload.userId]: {
          ...state[action.payload.userId],
          username: action.payload.username
        }
      };
    }
    default: {
      return state;
    }
  }
};
export default usersReducers;
