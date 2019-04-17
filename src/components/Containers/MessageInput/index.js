import React, { Component } from "react";
import InputSection from "../../Layout/InputSection";

class MessageInput extends Component {
  render() {
    return (
      <InputSection>
        <input type="text" />
        <button>Send</button>
      </InputSection>
    );
  }
}
export default MessageInput;
