import * as Actions from "../Constants/Actions";

export const resetUnreadMessages = () => ({
  type: Actions.NEW_UNREAD_MESSAGES_RESET
});

export const incrementUnreadMessages = () => ({
  type: Actions.NEW_UNREAD_MESSAGES_INCREMENT
});
