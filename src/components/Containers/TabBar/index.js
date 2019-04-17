import React, { Component } from "react";
import Tab from "../../Layout/Tabbar";

export default class TabBar extends Component {
  render() {
    return (
      <Tab>
        <button data-notifications="6">Chat</button>
        <button>Settings</button>
      </Tab>
    );
  }
}
