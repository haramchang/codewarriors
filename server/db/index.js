//this is the access point for all things database related!
const db = require('./db')
const User = require('./models/User')
const Stats = require("./models/Stats")
const Room = require("./models/Room")
const Algo = require("./models/Algo")

//associations could go here!
User.hasOne(Stats)
Stats.belongsTo(User)

User.belongsToMany(Room, { through: "User-Rooms" })
Room.belongsToMany(User, { through: "User-Rooms" })

module.exports = {
  db,
  models: {
    User,
    Stats,
    Room,
    Algo
  },
}
