import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ChatMessageMeta from "./index";

describe("Test Suits for Chat Message Meta", () => {
  test("for matching snapshot", () => {
    const tree = renderer.create(<ChatMessageMeta />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
