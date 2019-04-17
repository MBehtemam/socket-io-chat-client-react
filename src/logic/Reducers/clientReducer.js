import * as Actions from "../Constants/Actions";
export const defaultState = {
  theme: "light",
  lang: "en",
  twelveMode: true,
  sendByShortcut: false
};

const clientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.CLIENT_JOIN:
      return {
        ...state,
        ...action.payload
      };
    case Actions.CLIENT_UPDATE_USERNAME: {
      return {
        ...state,
        username: action.payload.username
      };
    }
    case Actions.CLIENT_UPDATE_DISPLAY_CLOCK: {
      return {
        ...state,
        twelveMode: action.payload
      };
    }
    case Actions.CLIENT_SEND_BY_SHORTCUT: {
      return {
        ...state,
        sendByShortcut: action.payload
      };
    }
    case Actions.CLIENT_UPDATE_LANG: {
      return {
        ...state,
        lang: action.payload
      };
    }
    case Actions.CLIENT_RESET_TO_DEFAULT: {
      return {
        ...state,
        ...defaultState
      };
    }
    default: {
      return state;
    }
  }
};
export default clientReducer;
