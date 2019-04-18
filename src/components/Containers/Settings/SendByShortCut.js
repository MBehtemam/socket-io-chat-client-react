import React from "react";
import { connect } from "react-redux";
import { sendByShortcut } from "../../../Logic/Actions/client";
const DisplayTime = ({ sendByShortcutState, canSend }) => (
  <form>
    <label>
      <input
        type="radio"
        value={true}
        onChange={e => canSend(e.target.value === "true" ? true : false)}
        checked={true === sendByShortcutState}
      />
      On
    </label>
    <label>
      <input
        type="radio"
        value={false}
        onChange={e => canSend(e.target.value === "true" ? true : false)}
        checked={false === sendByShortcutState}
      />
      Off
    </label>
  </form>
);
const mapStateToProps = state => ({
  sendByShortcutState: state.client.sendByShortcut
});
const mapDispatchToProps = dispatch => ({
  canSend: s => dispatch(sendByShortcut(s))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayTime);
