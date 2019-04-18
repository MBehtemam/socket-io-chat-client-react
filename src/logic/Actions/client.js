import * as Actions from "../Constants/Actions";
import Socket from "../Socket";
import SocketEvents from "../Socket/Events";
import * as UsersActions from "./users";
export const clientJoin = () => {
  return dispatch => {
    Socket.emit(SocketEvents.CLIENT_JOIN);
    Socket.on(SocketEvents.CLIENT_JOIN, ({ ok, data }) => {
      dispatch({ type: Actions.CLIENT_JOIN, payload: data.user });
      dispatch(UsersActions.setUsersList(data.usersList));
    });
  };
};

export const clientUpdateUserName = newUserName => {
  return dispatch => {
    Socket.emit(SocketEvents.CLIENT_USER_NAME_CHANGE, { newUserName });
    Socket.on(SocketEvents.CLIENT_USER_NAME_CHANGE, res => {
      dispatch({
        type: Actions.CLIENT_UPDATE_USERNAME,
        payload: res.data.username
      });
    });
  };
};

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
