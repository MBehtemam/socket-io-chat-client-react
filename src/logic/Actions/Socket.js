import Socket from "../Socket";
import Events from "../Socket/Events";
import * as MessagesAction from "./messages";

const SocketListener = () => {
  return dispatch => {
    Socket.on(Events.CLIENT_SEND_MESSAGE_TO_CHAT, data => {
      dispatch(MessagesAction.addMessage(data));
    });
  };
};
export default SocketListener;
