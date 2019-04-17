import messageReducers, { defaultState } from "./messagesReducer";
import * as Actions from "../Constants/Actions";

describe("Test suits for messages reducer", () => {
  test("that equal to default state", () => {
    expect(messageReducers(undefined, {})).toEqual(defaultState);
  });
  test("add new message", () => {
    expect(
      messageReducers([], {
        type: Actions.MESSAGES_NEW_MESSAGE,
        payload: {
          msg: "something"
        }
      })
    ).toHaveLength(1);
  });
});
