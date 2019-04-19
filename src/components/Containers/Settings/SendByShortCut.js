import React from "react";
import { connect } from "react-redux";
import { useTranslation, withTranslation, Trans } from "react-i18next";

import { sendByShortcut } from "../../../Logic/Actions/client";
const DisplayTime = ({ sendByShortcutState, canSend, t }) => (
  <form>
    <legend>{t("send_shortcut")}</legend>
    <label>
      <input
        type="radio"
        value={true}
        onChange={e => canSend(e.target.value === "true" ? true : false)}
        checked={true === sendByShortcutState}
      />
      {t("on")}
    </label>
    <label>
      <input
        type="radio"
        value={false}
        onChange={e => canSend(e.target.value === "true" ? true : false)}
        checked={false === sendByShortcutState}
      />
      {t("off")}
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
)(withTranslation()(DisplayTime));
