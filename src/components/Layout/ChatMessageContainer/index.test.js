import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ChatMessageContainer from "./index";

describe("Test suits for ChatMessageContainer", () => {
  test("that must works", () => {
    const tree = renderer.create(<ChatMessageContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("that must have correct direction for send message", () => {
    const tree = renderer.create(<ChatMessageContainer type="send" />).toJSON();
    expect(tree).toHaveStyleRule("justify-content", "flex-end");
  });
  test("that must have correct direction for receive message", () => {
    const tree = renderer
      .create(<ChatMessageContainer type="receive" />)
      .toJSON();
    expect(tree).toHaveStyleRule("justify-content", "flex-start");
  });
});
