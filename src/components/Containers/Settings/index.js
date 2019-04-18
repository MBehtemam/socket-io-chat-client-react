import React, { Component } from "react";
import Row from "../../Layout/Row";
import Column from "../../Layout/Column";
import ChangeUserName from "./ChangeUserName";
class Settings extends Component {
  render() {
    return (
      <Row>
        <Row>
          <ChangeUserName />
        </Row>
      </Row>
    );
  }
}
export default Settings;
