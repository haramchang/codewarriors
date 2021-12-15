const Sequelize = require('sequelize')
const db = require('../db')

const Stats = db.define("stats", {
  totalPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  matchesPlayed: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  matchesWon: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  matchesLost: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Stats
