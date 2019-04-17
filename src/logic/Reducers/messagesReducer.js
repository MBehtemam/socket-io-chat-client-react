import * as Actions from "../Constants/Actions";
export const defaultState = [];

const messagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.MESSAGES_NEW_MESSAGE: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};
export default messagesReducer;
