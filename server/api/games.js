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

// when someone creates a new game
// POST /api/games
router.post("/", async (req, res, next) => {
  try {
    const { difficulty, algoId, userId } = req.body

    // when creating a new game, all you pass in is the difficulty level and the algo id
    const game = await Game.create({difficulty, algoId})

    game.addUser(userId)
    res.send(game)
  } catch (err) {
    next(err)
  }
})
