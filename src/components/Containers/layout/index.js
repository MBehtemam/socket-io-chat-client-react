import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "../../Layout/Container";
import TabBar from "../TabBar";
import Chats from "../Chats";
import Tab from "../../Layout/Tab";
import Settings from "../Settings";
import MessageInput from "../MessageInput";
class Layout extends Component {
  render() {
    return (
      <Container>
        <TabBar />
        <Tab tabId="chat" activeTab={this.props.tabs}>
          <Chats />
          <MessageInput />
        </Tab>
        <Tab tabId="settings" activeTab={this.props.tabs}>
          <Settings />
        </Tab>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  tabs: state.tabs
});
export default connect(
  mapStateToProps,
  {}
)(Layout);
