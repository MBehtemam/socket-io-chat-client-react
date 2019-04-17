import * as Actions from "../Constants/Actions";
import * as Socket from "../Socket";
import { dispatch } from "C:/Users/Mohammad/AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/rxjs/internal/observable/pairs";

export const clientConnect = () => {
  return dispatch => {
    Socket.connect();
  };
};
export const clientJoin = user => ({
  type: Actions.CLIENT_JOIN,
  payload: user
});

export const clientUpdateUserName = user => ({
  type: Actions.CLIENT_UPDATE_USERNAME,
  payload: user
});

export const clientUpdateLang = lang => ({
  type: Actions.CLIENT_UPDATE_LANG,
  payload: lang
});

export const updateDisplayClock = clockType => ({
  type: Actions.CLIENT_SEND_BY_SHORTCUT,
  payload: clockType
});
export const sendByShortcut = send => ({
  type: Actions.CLIENT_SEND_BY_SHORTCUT,
  payload: send
});

export const resetToDefault = () => ({
  type: Actions.CLIENT_RESET_TO_DEFAULT
});
