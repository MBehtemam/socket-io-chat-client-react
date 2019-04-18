import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ChatMessageTime from "./";

describe("Test suits for ChatMessageTime", () => {
  test("should match with snapshot", () => {
    const tree = renderer.create(<ChatMessageTime />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
