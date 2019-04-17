import React, { Component } from "react";
import Container from "../../Layout/Container";
import TabBar from "../TabBar";
import Chats from "../Chats";
import MessageInput from "../MessageInput";
export default class Layout extends Component {
  render() {
    return (
      <Container>
        <TabBar />
        <Chats />
        <MessageInput />
      </Container>
    );
  }
}
