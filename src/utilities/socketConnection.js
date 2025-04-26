import {io} from "socket.io-client";

const socket = io.connect("https://localhost:8080", {
    withCredentials: true,
    transports: ["websocket"],
    secure: true,
  });

export default socket;