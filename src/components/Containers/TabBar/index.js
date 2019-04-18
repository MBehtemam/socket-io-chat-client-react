import React, { Component } from "react";
import { connect } from "react-redux";
import Tab from "../../Layout/Tabbar";
import * as tabsActions from "../../../Logic/Actions/tabs";
class TabBar extends Component {
  render() {
    return (
      <Tab>
        <button
          onClick={() => this.props.changeTab("chat")}
          data-notifications={
            this.props.unreadMessages > 0 ? this.props.unreadMessages : ""
          }
        >
          Chat
        </button>
        <button onClick={() => this.props.changeTab("settings")}>
          Settings
        </button>
      </Tab>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  changeTab: tabId => dispatch(tabsActions.changeTab(tabId))
});
const mapStateToProps = state => ({
  unreadMessages: state.unreadMessages
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabBar);
