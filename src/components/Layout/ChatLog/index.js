import styled from "styled-components";

const ChatLog = styled.section`
  height: ${props => props.theme.chatContainerHeight};
  background-color: ${props => props.theme.chatContainerBackground};
  display: flex;
  flex-direction: column;
`;
export default ChatLog;
