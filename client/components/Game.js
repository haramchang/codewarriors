import React from "react"
import { connect } from "react-redux"
import { IDE } from "./IDE"
import socket from "../socket/socket"

export const Game = () => {
  return (
    <div id="game-container">
      This is what shows when someone or 2 players create/join a game
      <IDE />
      <IDE />
    </div>
  )
}
