import * as Actions from "../Constants/Actions";

const defaultState = 0;

const unreadMessagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.NEW_UNREAD_MESSAGES_INCREMENT:
      return state + 1;
    case Actions.NEW_UNREAD_MESSAGES_RESET:
      return defaultState;
    default:
      return state;
  }
};
export default unreadMessagesReducer;
