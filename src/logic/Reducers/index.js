import { combineReducers } from "redux";

import clientReducer from "./clientReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
import unreadMessagesReducer from "./unreadMessagesReducer";
import tabsReducer from "./tabsReducers";

const reducers = combineReducers({
  client: clientReducer,
  messages: messagesReducer,
  users: usersReducer,
  unreadMessages: unreadMessagesReducer,
  tabs: tabsReducer
});

export default reducers;
