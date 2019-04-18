import React, { Component } from "react";
import { connect } from "react-redux";
import ChatLog from "../../Layout/ChatLog";
import ChatMessageContainer from "../../Layout/ChatMessageContainer";
import ChatMessage from "../../Layout/ChatMessage";
import ChatMessageMeta from "../../Layout/ChatMessageMeta";
import ChatMessageTime from "../../Layout/ChatMessageTime";
import ChatMessageUsername from "../../Layout/ChatMessageUsername";
class Chats extends Component {
  render() {
    return (
      <ChatLog>
        {this.props.messages.map(message => (
          <ChatMessageContainer
            key={message.id}
            type={
              message.sender === this.props.client.userId ? "send" : "receive"
            }
          >
            <ChatMessage
              type={
                message.sender === this.props.client.userId ? "send" : "receive"
              }
            >
              <ChatMessageMeta>
                <ChatMessageUsername>
                  {message.sender === this.props.client.userId
                    ? this.props.client.username
                    : this.props.users[message.sender].username}
                </ChatMessageUsername>
                <ChatMessageTime
                  time={message.time}
                  is24HourMode={this.props.client.twelveMode}
                />
              </ChatMessageMeta>

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
