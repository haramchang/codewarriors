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
  }
})

module.exports = Game
