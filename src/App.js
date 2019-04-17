import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import * as clientActions from "./Logic/Actions/client";
import Layout from "./components/Containers/layout";
const theme = {
  tabBackground: "#242345",
  tabHeight: "7%",
  chatNotificationColor: "red",
  messageBackground: "#232244",
  chatContainerBackground: "#312D51",
  chatContainerHeight: "85%",
  messageInputBackground: "#242345",
  messageInputHeight: "7%"
};
class App extends Component {
  componentDidMount() {
    this.props.clientConnect();
    // this.props.clientJoinToServer();
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clientConnect: () => dispatch(clientActions.clientConnect()),
  clientJoinToServer: () => dispatch(clientActions.clientJoinToServer())
});
export default connect(
  undefined,
  mapDispatchToProps
)(App);
