const Sequelize = require("sequelize")
const db = require("../db")

const Algo = db.define("algo", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  userInput: {
    type: Sequelize.STRING
  },
  difficulty: {
    type: Sequelize.ENUM("easy", "medium", "hard")
  }
})

module.exports = Algo
