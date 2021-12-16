import { io } from "socket.io-client"

const socket = io(window.location.origin)

socket.on("connect", () => {
  console.log("this is the user", socket.id)
})

socket.on("open-games", (games) => {
  console.log("this is all the games", games)
})

export default socket
