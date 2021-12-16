const http = require("http")
const socket = require("socket.io")
const app = require("../app.js")

const server = http.createServer(app)
const io = socket(server)

let users = []
let games = []

io.on("connection", (socket) => {
  users.push(socket.id)
  console.log("This is the user", socket.id)
  console.log("This the the current list of users", users)

  // all open games should be available to all users
  // io.emit("open-games", games)

  // when a user creates or joins a game


  // when a user refreshes or ends the game
  socket.on("disconnect", () => {
    users = users.filter(user => user!== socket.id)
  })
})

module.exports = server
