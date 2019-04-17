import React, { Component } from "react";
import { connect } from "react-redux";
import ChatLog from "../../Layout/ChatLog";
import ChatMessageContainer from "../../Layout/ChatMessageContainer";
import ChatMessage from "../../Layout/ChatMessage";
import messagesReducer from "../../../Logic/Reducers/messagesReducer";
import clientReducer from "../../../Logic/Reducers/clientReducer";
import usersReducer from "../../../Logic/Reducers/usersReducer";
class Chats extends Component {
  render() {
    return (
      <ChatLog>
        {this.props.messages.map((message, i) => (
          <ChatMessageContainer
            key={i}
            type={
              message.sender === this.props.client.userId ? "send" : "receive"
            }
          >
            <ChatMessage
              type={
                message.sender === this.props.client.userId ? "send" : "receive"
              }
            >
              {message.msg}
            </ChatMessage>
          </ChatMessageContainer>
        ))}
      </ChatLog>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  client: state.client,
  users: state.users
});
export default connect(
  mapStateToProps,
  {}
)(Chats);
