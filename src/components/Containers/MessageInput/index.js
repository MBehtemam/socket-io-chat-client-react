import React, { Component } from "react";
import { connect } from "react-redux";
import InputSection from "../../Layout/InputSection";
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

        <button onClick={this.sendMessageHandle}>Send</button>
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
