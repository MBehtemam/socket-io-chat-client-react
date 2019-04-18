import usersReducer, { defaultState } from "./usersReducer";
import * as Actions from "../Constants/Actions";

describe("Test suits fro users reducer", () => {
  test("to have no user with initializing", () => {
    expect(usersReducer(undefined, {})).toEqual({});
  });
  test("add new user", () => {
    const userId = "guest-110";
    const username = "guest-110";
    expect(
      usersReducer(undefined, {
        type: Actions.USERS_NEW_USER_JOIN,
        payload: { userId, username }
      })
    ).toHaveProperty(userId);
  });
  test("user disconnected", () => {
    const userId = "guest-115";
    const state = {
      ...defaultState,
      [userId]: {
        username: userId,
        connected: true
      }
    };
    expect(
      usersReducer(state, {
        type: Actions.USERS_USER_DISCONNECT,
        payload: { userId }
      })
    ).toEqual({
      ...state,
      [userId]: {
        ...state[userId],
        connected: false
      }
    });
  });
  test("user change username", () => {
    const userId = "guest-110";
    const state = {
      ...defaultState,
      [userId]: {
        userId,
        username: "loop"
      }
    };
    const newUserName = "hope";
    expect(
      usersReducer(state, {
        type: Actions.USERS_USER_CHANGE_USERNAME,
        payload: {
          userId: "guest-110",
          username: newUserName
        }
      })
    ).toEqual({
      ...state,
      [userId]: {
        ...state[userId],
        username: newUserName
      }
    });
  });
  test("add new users list", () => {
    const newList = {
      id1: { username: "hope" },
      id2: { username: "loop" }
    };
    expect(
      usersReducer(undefined, {
        type: Actions.USERS_SET_USERS_LIST,
        payload: newList
      })
    ).toEqual(newList);
  });
});
