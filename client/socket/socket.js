import { io } from "socket.io-client"

const socket = io(window.location.origin)

socket.on("connect", () => {
  console.log("HELLO??????" , socket.id)
})

export default socket