import styled from "styled-components";

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.type === "send" ? "flex-end" : "flex-start"};
`;
export default ChatMessageContainer;
