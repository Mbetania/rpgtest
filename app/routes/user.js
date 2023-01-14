const express = require("express")
const router = express.Router()
const UserController = require('../controllers/user')

router.get("/users", UserController.getAllUsers)
router.post("/users", UserController.createUser)
router.get("/users/:ID", UserController.getUserById)

module.exports = router
