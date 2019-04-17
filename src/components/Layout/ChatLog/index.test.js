import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ChatLog from "./index";

describe("Test suits for ChatLog", () => {
  test("should works", () => {
    const tree = renderer.create(<ChatLog />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
