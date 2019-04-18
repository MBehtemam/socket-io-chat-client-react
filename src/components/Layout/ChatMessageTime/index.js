import React, { Component } from "react";
import styled from "styled-components";

const Time = styled.time``;

export default class ChatMessageTime extends Component {
  render() {
    const { time, is24HourMode } = this.props;
    const d = new Date(time);
    const t = is24HourMode
      ? `${d.getHours()}:${d.getMinutes()}`
      : `${d.getHours() - 12}:${d.getMinutes()}`;
    return <Time>{t}</Time>;
  }
}
