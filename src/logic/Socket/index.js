import io from "socket.io-client";
import Events from "./Events";
let socket = io.connect("http://localhost:3002");

export const connect = () => {
  // socket = ;
};
export const join = () => {
  socket.emit(Events.CLIENT_JOIN);
};
socket.on(Events.CLIENT_JOIN, data => {
  console.log(data);
});
