import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import Store from "./Logic/Store";
import * as clientActions from "./Logic/Actions/client";

class App extends Component {
  componentDidMount() {
    this.props.clientConnect();
    this.props.clientJoinToServer();
  }
  render() {
    return <span>Hello</span>;
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
