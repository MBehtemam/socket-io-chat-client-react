import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ChatMessage from "./";

describe("Test suits for ChatMessage", () => {
  test("that match to snapshot", () => {
    const tree = renderer.create(<ChatMessage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("that has correct margin-right rule", () => {
    const tree = renderer.create(<ChatMessage type="send" />).toJSON();
    expect(tree).toHaveStyleRule("margin-right", "20px");
  });
  test("that has correct margin-left rule", () => {
    const tree = renderer.create(<ChatMessage type="receive" />).toJSON();
    expect(tree).toHaveStyleRule("margin-left", "20px");
  });
});
