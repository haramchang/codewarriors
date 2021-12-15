const Sequelize = require("sequelize")
const db = require("../db")

const Room = db.define("room", {
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

module.exports = Room
