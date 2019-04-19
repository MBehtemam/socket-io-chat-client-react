import React, { Component } from "react";
import { connect } from "react-redux";
import { clientUpdateUserName } from "../../../Logic/Actions/client";
class ChangeUserName extends Component {
  state = {
    username: ""
  };
  changeUserName = e => {
    e.preventDefault();
    this.props.updateUserName(this.state.username);
    this.setState({ username: "" });
  };
  render() {
    return (
      <form onSubmit={this.changeUserName}>
        <legend>Change Username</legend>
        <input
          type="text"
          defaultValue={
            this.state.username !== ""
              ? this.state.username
              : this.props.username
          }
          onChange={e => this.setState({ username: e.target.value })}
        />
        <button type="submit">Change</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  username: state.client.username
});
const mapDispatchToProps = dispatch => ({
  updateUserName: username => dispatch(clientUpdateUserName(username))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeUserName);
