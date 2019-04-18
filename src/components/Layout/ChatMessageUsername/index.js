import styled from "styled-components";
const ChatMessageusername = styled.span`
  color: ${props =>
    props.type === "send"
      ? props.theme.messageUsernameClientColor
      : props.theme.messageUsernameUserColor};
`;
export default ChatMessageusername;
