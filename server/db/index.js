//this is the access point for all things database related!
const db = require('./db')
const User = require('./models/User')
const Stats = require("./models/Stats")
const Game = require("./models/Game")
const Algo = require("./models/Algo")

//associations could go here!
User.hasOne(Stats)
Stats.belongsTo(User)

User.belongsToMany(Game, { through: "User-Games" })
Game.belongsToMany(User, { through: "User-Games" })

Algo.hasMany(Game)
Game.belongsTo(Algo)

module.exports = {
  db,
  models: {
    User,
    Stats,
    Game,
    Algo
  },
}
