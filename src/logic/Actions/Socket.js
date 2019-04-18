import Socket from "../Socket";
import Events from "../Socket/Events";
import * as MessagesAction from "./messages";
import * as UsersAction from "./users";
const SocketListener = () => {
  return dispatch => {
    Socket.on(Events.CLIENT_SEND_MESSAGE_TO_CHAT, data => {
      dispatch(MessagesAction.addMessage(data));
    });
    Socket.on(Events.USER_JOIN, res => {
      dispatch(UsersAction.addNewUser(res.data.user));
    });
    Socket.on(Events.USER_USER_NAME_CHANGE, res => {
      dispatch(
        UsersAction.userUpdateUserName(res.data.userId, res.data.username)
      );
    });
  };
};
export default SocketListener;
