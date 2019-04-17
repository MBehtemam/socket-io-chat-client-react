import * as Actions from "../Constants/Actions";
import Socket from "../Socket";
import Events from "../Socket/Events";

export const sendMessage = message => {
  return dispatch => {
    Socket.emit(Events.CLIENT_SEND_MESSAGE_TO_CHAT, message);
  };
};

export const addMessage = msg => ({
  type: Actions.MESSAGES_NEW_MESSAGE,
  payload: msg
});
