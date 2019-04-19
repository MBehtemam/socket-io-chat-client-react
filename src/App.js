import React, { Component } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import * as clientActions from "./Logic/Actions/client";
import SocketListenerActions from "./Logic/Actions/Socket";
import Layout from "./components/Containers/layout";
import "./Util/i18n";
// const theme = {
//   tabBackground: "#242345",
//   tabHeight: "7%",
//   chatNotificationColor: "red",
//   messageBackground: "#232244",
//   chatContainerBackground: "#312D51",
//   chatContainerHeight: "85%",
//   messageInputBackground: "#242345",
//   messageInputHeight: "7%",
//   messageUsernameClientColor: "#658361",
//   messageUsernameUserColor: "#D1656A"
// };
const themes = {
  dark: {
    tabBackground: "#242345",
    tabHeight: "7%",
    mainTextColor: "white",
    chatNotificationColor: "red",
    messageBackground: "#232244",
    chatContainerBackground: "#312D51",
    chatContainerHeight: "85%",
    messageInputBackground: "#242345",
    messageInputHeight: "7%",
    messageUsernameClientColor: "#658361",
    messageUsernameUserColor: "#D1656A"
  },
  light: {
    tabBackground: "#eeeeee",
    tabHeight: "7%",
    mainTextColor: "black",
    chatNotificationColor: "red",
    messageBackground: "#56A0AF",
    chatContainerBackground: "white",
    chatContainerHeight: "85%",
    messageInputBackground: "#eeeeee",
    messageInputHeight: "7%",
    messageUsernameClientColor: "black",
    messageUsernameUserColor: "black"
  }
};
class App extends Component {
  componentDidMount() {
    this.props.clientJoin();
    this.props.socketListener();
  }
  render() {
    return (
      <ThemeProvider theme={themes[this.props.theme]}>
        <Layout />
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clientJoin: () => dispatch(clientActions.clientJoin()),
  socketListener: () => dispatch(SocketListenerActions())
});
const mapSateToProps = state => ({
  theme: state.client.theme
});
export default connect(
  mapSateToProps,
  mapDispatchToProps
)(App);
