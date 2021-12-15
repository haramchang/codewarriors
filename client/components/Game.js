import React from "react"
import { connect } from "react-redux"
import { IDE } from "./IDE"
import { io } from "socket.io-client"


const socket = io()
socket.on("connect", (socket) => {
  console.log("HELLO???")
})

export const Game = () => {
  return (
    <div id="game-container">
      This is what shows when someone or 2 players create/join a game
      <IDE />
      <IDE />
    </div>
  )
}
