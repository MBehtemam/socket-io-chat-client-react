import * as Actions from "../Constants/Actions";
import * as unReadMessagesAction from "./unreadMessages";

export const changeTab = tabId => {
  return dispatch => {
    if (tabId === "chat") {
      dispatch(unReadMessagesAction.resetUnreadMessages());
    }
    dispatch({ type: Actions.CHANGE_TAB, payload: tabId });
  };
};
