const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// POST /api/users
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (err) {
    next(err)
  }
})

// GET /api/users/:id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      },
      attributes: ["id", "username", "rank"]
    })
    res.send(user)
  } catch (err) {
    next(err)
  }
})

// PUT /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    const updated = user.update(req.body)
    res.send(updated)
  } catch (err) {
    next(err)
  }
})
