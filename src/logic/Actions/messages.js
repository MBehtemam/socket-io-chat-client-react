import * as Actions from "../Constants/Actions";
import Socket from "../Socket";
import Events from "../Socket/Events";
import * as unReadMessages from "./unreadMessages";
export const sendMessage = message => {
  return dispatch => {
    Socket.emit(Events.CLIENT_SEND_MESSAGE_TO_CHAT, message);
  };
};

export const addMessage = msg => {
  return (dispatch, getState) => {
    const { tabs, client } = getState();
    dispatch({ type: Actions.MESSAGES_NEW_MESSAGE, payload: msg });
    if (tabs !== "chat" && client.userId !== msg.sender) {
      dispatch(unReadMessages.incrementUnreadMessages());
    }
  };
};
