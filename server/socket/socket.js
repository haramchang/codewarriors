const http = require("http")
const socket = require("socket.io")
const app = require("../app.js")

const server = http.createServer(app)
const io = socket(server)

io.on("connection", (socket) => {
  console.log("New client connected!", socket.id)
})

module.exports = server
