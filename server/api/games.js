const router = require('express').Router()
const { models: { Game }} = require('../db')
module.exports = router


// GET /api/games
// only active games
router.get("/", async (req, res, next) => {
  try {
    const games = await Game.findAll({
      where: {
        active: true
      }
    })
    res.send(games)
  } catch (err) {
    next(err)
  }
})

// POST /api/users
router.post("/", async (req, res, next) => {
  try {
    const game = await Game.create(req.body)
    res.send(game)
  } catch (err) {
    next(err)
  }
})
