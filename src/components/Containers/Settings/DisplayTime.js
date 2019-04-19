import React from "react";
import { connect } from "react-redux";
import { updateDisplayClock } from "../../../Logic/Actions/client";
import { useTranslation, withTranslation, Trans } from "react-i18next";

const DisplayTime = ({ twelveMode, updateDisplay, t }) => (
  <form>
    <legend>{t("clock_display")}</legend>
    <label>
      <input
        type="radio"
        value={true}
        onChange={e => updateDisplay(e.target.value === "true" ? true : false)}
        checked={true === twelveMode}
      />
      {t("12Hours")}
    </label>
    <label>
      <input
        type="radio"
        value={false}
        onChange={e => updateDisplay(e.target.value === "true" ? true : false)}
        checked={false === twelveMode}
      />
      {t("24Hours")}
    </label>
  </form>
);
const mapStateToProps = state => ({
  twelveMode: state.client.twelveMode
});
const mapDispatchToProps = dispatch => ({
  updateDisplay: time => dispatch(updateDisplayClock(time))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(DisplayTime));
