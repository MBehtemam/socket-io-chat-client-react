import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import Store from "./Logic/Store";
import * as clientActions from "./Logic/Actions/client";

class App extends Component {
  componentDidMount() {
    this.props.clientConnect();
  }
  render() {
    return <span>Hello</span>;
  }
}

const mapDispatchToProps = dispatch => ({
  clientConnect: () => dispatch(clientActions.clientConnect())
});
export default connect(
  undefined,
  mapDispatchToProps
)(App);
