import React, { Component } from "react";
import Row from "../../Layout/Row";
import Column from "../../Layout/Column";
import ChangeUserName from "./ChangeUserName";
import ThemeSelector from "./ThemeSelector";
import DisplayTime from "./DisplayTime";
import SendByShortCut from "./SendByShortCut";
import SettingsLayout from "../../Layout/Settings";
import LanguageSelector from "./LanguageSelector";
class Settings extends Component {
  render() {
    return (
      <SettingsLayout>
        <ChangeUserName />
        <ThemeSelector />
        <DisplayTime />
        <SendByShortCut />
        <LanguageSelector />
      </SettingsLayout>
    );
  }
}
export default Settings;
