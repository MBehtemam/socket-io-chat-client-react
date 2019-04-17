import { combineReducers } from "redux";

import clientReducer from "./clientReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";
const reducers = combineReducers({
  client: clientReducer,
  messages: messagesReducer,
  users: usersReducer
});

export default reducers;
