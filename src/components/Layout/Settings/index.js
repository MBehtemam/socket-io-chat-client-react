import styled from "styled-components";

const Settings = styled.div`
  height: 100%;
  color: ${props => props.theme.mainTextColor};
  background-color: ${props => props.theme.chatContainerBackground};
  display: flex;
  flex-direction: column;
  form {
    margin-top: 20px;
  }
`;

export default Settings;
