const Sequelize = require("sequelize")
const db = require("../db")

const Game = db.define("game", {
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  difficultyLevel: {
    type: Sequelize.STRING
  },
  lengthInSeconds: {
    type: Sequelize.INTEGER
  },
  winner: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  loser: {
    type: Sequelize.INTEGER,
    defaultValue: null
  },
  draw: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Game
