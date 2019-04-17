import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import Container from "./index";

describe("Test suits for Container", () => {
  test("it should match to snapshot", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("it should has correct styles", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toHaveStyleRule("display", "flex");
    expect(tree).toHaveStyleRule("flex-direction", "column");
  });
});
