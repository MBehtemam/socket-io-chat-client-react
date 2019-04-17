import styled from "styled-components";

const ChatMessageContainer = styled.div`
  display: flex;
  justify-content: ${props =>
    props.type === "send" ? "flex-end" : "flex-start"};
`;
export default ChatMessageContainer;
