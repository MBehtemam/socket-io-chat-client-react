import React, { Component } from "react";
import Tab from "../../Layout/Tabbar";

export default class TabBar extends Component {
  render() {
    return (
      <Tab>
        <button>Chat</button>
        <button>Settings</button>
      </Tab>
    );
  }
}
