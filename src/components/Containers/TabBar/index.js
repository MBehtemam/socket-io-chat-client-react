import React, { Component } from "react";
import { connect } from "react-redux";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import Tab from "../../Layout/Tabbar";
import * as tabsActions from "../../../Logic/Actions/tabs";
class TabBar extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <Tab>
        <button
          active={"chat" === this.props.tabs ? "true" : "false"}
          onClick={() => this.props.changeTab("chat")}
          data-notifications={
            this.props.unreadMessages > 0 ? this.props.unreadMessages : ""
          }
        >
          {t("chat")}
        </button>
        <button
          active={"settings" === this.props.tabs ? "true" : "false"}
          onClick={() => this.props.changeTab("settings")}
        >
          {t("settings")}
        </button>
      </Tab>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  changeTab: tabId => dispatch(tabsActions.changeTab(tabId))
});
const mapStateToProps = state => ({
  unreadMessages: state.unreadMessages,
  tabs: state.tabs
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(TabBar));
