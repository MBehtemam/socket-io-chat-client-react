import React, { Component } from "react";
import { connect } from "react-redux";
import InputSection from "../../Layout/InputSection";
import CircleButton from "../../Layout/Buttons/Circle";
import * as messageActions from "../../../Logic/Actions/messages";

class MessageInput extends Component {
  state = {
    msg: ""
  };
  componentDidMount() {
    document.addEventListener("keydown", this.sendByHotKey);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.sendByHotKey);
  }
  sendMessageHandle = () => {
    this.props.sendMessage(this.state.msg);
    this.setState({ msg: "" });
  };
  sendByHotKey = e => {
    if (e.keyCode === 13 && e.ctrlKey && this.props.client.sendByShortcut) {
      this.sendMessageHandle();
    }
  };
  render() {
    return (
      <InputSection>
        <input
          type="text"
          onChange={e => this.setState({ msg: e.target.value })}
          value={this.state.msg}
        />

        <CircleButton onClick={this.sendMessageHandle}>Send</CircleButton>
      </InputSection>
    );
  }
}
const mapStateToProps = state => ({
  client: state.client
});
const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(messageActions.sendMessage(message))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInput);
