const express = require("express")
const router = express.Router()
const users = ['Bruno', 'Betania']
router.get("/users", (req, res) =>{
    res.send("Users")
})
router.post("/users", (req, res) =>{
    console.log(req.body)
    res.send("Create USER")
})
router.get("/users/:userid", (req, res) => {

    res.send(users[req.params.userid])
})
module.exports = router