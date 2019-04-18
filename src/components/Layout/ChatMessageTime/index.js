import React, { Component } from "react";
import styled from "styled-components";

const Time = styled.time``;

export default class ChatMessageTime extends Component {
  render() {
    const { time, twelveMode } = this.props;
    const d = new Date(time);
    const t = twelveMode
      ? `${d.getHours() - 12}:${d.getMinutes()}`
      : `${d.getHours()}:${d.getMinutes()}`;
    return <Time>{t}</Time>;
  }
}
