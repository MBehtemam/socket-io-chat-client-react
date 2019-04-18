import * as Actions from "../Constants/Actions";
const defaultState = "chat";

const tabsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Actions.CHANGE_TAB:
      return action.payload;
    default:
      return state;
  }
};
export default tabsReducer;
