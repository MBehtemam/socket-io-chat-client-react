import React, { Component } from "react";
import { connect } from "react-redux";
import InputSection from "../../Layout/InputSection";
import * as messageActions from "../../../Logic/Actions/messages";

class MessageInput extends Component {
  state = {
    msg: ""
  };
  sendMessageHandle = msg => {
    this.props.sendMessage(this.state.msg);
    this.setState({ msg: "" });
  };
  render() {
    return (
      <InputSection>
        <input
          type="text"
          onChange={e => this.setState({ msg: e.target.value })}
          value={this.state.msg}
        />
        <button onClick={e => this.sendMessageHandle(e.target.value)}>
          Send
        </button>
      </InputSection>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(messageActions.sendMessage(message))
});
export default connect(
  undefined,
  mapDispatchToProps
)(MessageInput);
