import * as Actions from "../Constants/Actions";
import Socket from "../Socket";
import SocketEvents from "../Socket/Events";
export const clientConnect = () => {
  return dispatch => {
    Socket.emit(SocketEvents.CLIENT_JOIN);
    Socket.on(SocketEvents.CLIENT_JOIN, ({ ok, data }) => {
      dispatch({ type: Actions.CLIENT_JOIN, payload: data.user });
    });
  };
};
export const clientJoin = user => ({
  type: Actions.CLIENT_JOIN,
  payload: user
});

export const clientJoinToServer = () => {
  return dispatch => {
    Socket.join();
  };
};
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
