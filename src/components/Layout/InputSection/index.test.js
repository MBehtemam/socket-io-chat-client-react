import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import InputSection from "./index";

describe("Test suits for InputSection", () => {
  test("should works", () => {
    const tree = renderer.create(<InputSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
