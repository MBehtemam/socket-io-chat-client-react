import React, { Component } from "react";
import Row from "../../Layout/Row";
import Column from "../../Layout/Column";
import ChangeUserName from "./ChangeUserName";
import ThemeSelector from "./ThemeSelector";
import DisplayTime from "./DisplayTime";
import SendByShortCut from "./SendByShortCut";
class Settings extends Component {
  render() {
    return (
      <Row>
        <Column>
          <ChangeUserName />
          <ThemeSelector />
          <DisplayTime />
          <SendByShortCut />
        </Column>
      </Row>
    );
  }
}
export default Settings;
