import React, { Component } from "react";
import { connect } from "react-redux";
import { clientUpdateUserName } from "../../../Logic/Actions/client";
import { useTranslation, withTranslation, Trans } from "react-i18next";

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
    const { t } = this.props;
    return (
      <form onSubmit={this.changeUserName}>
        <legend>{t("change_username")}</legend>
        <input
          type="text"
          defaultValue={
            this.state.username !== ""
              ? this.state.username
              : this.props.username
          }
          onChange={e => this.setState({ username: e.target.value })}
        />
        <button type="submit">{t("change")}</button>
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
)(withTranslation()(ChangeUserName));
