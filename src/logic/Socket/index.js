import io from "socket.io-client";
let socket = io.connect("http://localhost:3002");
export default socket;
