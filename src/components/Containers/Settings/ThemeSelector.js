import React from "react";
import { connect } from "react-redux";
import { useTranslation, withTranslation, Trans } from "react-i18next";

import { clientUpdatetheme } from "../../../Logic/Actions/client";
const themeSelector = ({ theme, changeTheme, t }) => (
  <form>
    <legend>{t("theme")}</legend>
    <label>
      <input
        type="radio"
        value="light"
        onChange={e => changeTheme(e.target.value)}
        checked={"light" === theme}
      />
      {t("light")}
    </label>
    <label>
      <input
        type="radio"
        value="dark"
        onChange={e => changeTheme(e.target.value)}
        checked={"dark" === theme}
      />
      {t("dark")}
    </label>
  </form>
);
const mapStateToProps = state => ({
  theme: state.client.theme
});
const mapDispatchToProps = dispatch => ({
  changeTheme: theme => dispatch(clientUpdatetheme(theme))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(themeSelector));
