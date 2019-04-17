import io from "socket.io-client";

let socket;

export const connect = () => {
  socket = io.connect("http://localhost:3002");
};
