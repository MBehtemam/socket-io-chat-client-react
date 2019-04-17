import clientReducer, { defaultState } from "./clientReducer";
import * as Actions from "../Constants/Actions";

describe("Test suits for client reducer", () => {
  test("it should equal to default state", () => {
    expect(clientReducer(undefined, {})).toEqual(defaultState);
  });
  test("client join", () => {
    expect(
      clientReducer(undefined, {
        type: Actions.CLIENT_JOIN,
        payload: { username: "hope" }
      })
    ).toHaveProperty("username", "hope");
  });
  test("update username", () => {
    expect(
      clientReducer(
        { ...defaultState, username: "loop" },
        { type: Actions.CLIENT_UPDATE_USERNAME, payload: { username: "hope" } }
      )
    ).toHaveProperty("username", "hope");
  });
  test("set correct time mode", () => {
    expect(
      clientReducer(
        { ...defaultState, twelveMode: false },
        { type: Actions.CLIENT_UPDATE_DISPLAY_CLOCK, payload: true }
      )
    ).toHaveProperty("twelveMode", true);
  });
  test("set correct send by short cut", () => {
    expect(
      clientReducer(
        { ...defaultState, sendByShortcut: false },
        { type: Actions.CLIENT_SEND_BY_SHORTCUT, payload: true }
      )
    ).toHaveProperty("sendByShortcut", true);
  });
  test("set correct send by short cut", () => {
    expect(
      clientReducer(
        { ...defaultState, lang: "en" },
        { type: Actions.CLIENT_UPDATE_LANG, payload: "es" }
      )
    ).toHaveProperty("lang", "es");
  });
  test("reset to default user settings", () => {
    expect(
      clientReducer(
        { ...defaultState, lang: "es", twelveMode: false },
        { type: Actions.CLIENT_RESET_TO_DEFAULT }
      )
    ).toEqual(defaultState);
  });
});
