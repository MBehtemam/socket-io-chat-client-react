import React from "react";
import { connect } from "react-redux";
import { clientUpdatetheme } from "../../../Logic/Actions/client";
const themeSelector = ({ theme, changeTheme }) => (
  <form>
    <label>
      <input
        type="radio"
        value="light"
        onChange={e => changeTheme(e.target.value)}
        checked={"light" === theme}
      />
      Light
    </label>
    <label>
      <input
        type="radio"
        value="dark"
        onChange={e => changeTheme(e.target.value)}
        checked={"dark" === theme}
      />
      Dark
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
)(themeSelector);
