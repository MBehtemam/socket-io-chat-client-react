import styled from "styled-components";

const InputSection = styled.section`
  display: flex;
  height: ${props => props.theme.messageInputHeight};
  background-color: ${props => props.theme.messageInputBackground};
  input[type="text"] {
    flex: 2;
    border-radius: 20px;
  }
`;
export default InputSection;
