import React, { Component } from "react";
import Row from "../../Layout/Row";
import Column from "../../Layout/Column";
import ChangeUserName from "./ChangeUserName";
import ThemeSelector from "./ThemeSelector";
import DisplayTime from "./DisplayTime";
import SendByShortCut from "./SendByShortCut";
import SettingsLayout from "../../Layout/Settings";
class Settings extends Component {
  render() {
    return (
      <SettingsLayout>
        <ChangeUserName />
        <ThemeSelector />
        <DisplayTime />
        <SendByShortCut />
      </SettingsLayout>
    );
  }
}
export default Settings;
