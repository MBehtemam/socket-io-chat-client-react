import React from "react";
import { connect } from "react-redux";
import { useTranslation, withTranslation, Trans } from "react-i18next";

import { clientUpdateLang } from "../../../Logic/Actions/client";
const LanguageSelector = ({ lang, changeLang, t }) => (
  <form>
    <legend>{t("theme")}</legend>
    <label>
      <select defaultValue={lang} onChange={e => changeLang(e.target.value)}>
        <option value="en">English</option>
        <option value="fa">Farsi</option>
      </select>
    </label>
  </form>
);
const mapStateToProps = state => ({
  lang: state.client.lang
});
const mapDispatchToProps = dispatch => ({
  changeLang: lang => dispatch(clientUpdateLang(lang))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(LanguageSelector));
