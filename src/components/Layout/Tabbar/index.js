import styled from "styled-components";

const Tabbar = styled.nav`
  background-color: ${props => props.theme.tabBackground};
  height: ${props => props.theme.tabHeight};
  display: flex;
  overflow: hidden;
  button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    color: gray;
  }
  [data-notifications] {
    position: relative;
  }

  [data-notifications]:after {
    content: attr(data-notifications);
    position: absolute;
    color: ${props => props.theme.chatNotificationColor};
    border-radius: 100%;
    font-size: 0.8em;
    display: inline-block;
    padding: 0.4em;
    right: -1px;
    top: 3px;
  }
`;

export default Tabbar;
