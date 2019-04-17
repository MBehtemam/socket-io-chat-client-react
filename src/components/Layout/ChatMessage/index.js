import styled from "styled-components";

const ChatMessage = styled.article`
  background-color: ${props => props.theme.messageBackground};
  width: 40%;
  margin-top: 10px;
  padding: 10px;
  min-height: 10%;
  max-height: 20%;
  color: white;
  border-radius: ${props =>
    props.type === "send" ? `30px 0px 30px 30px` : `0px 30px 30px 30px`};
  margin-right: ${props => (props.type === "send" ? `20px` : `0px`)};
  margin-left: ${props => (props.type === "receive" ? `20px` : `0px`)};
`;
export default ChatMessage;
