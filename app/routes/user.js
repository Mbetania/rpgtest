const express = require("express")
const findById = require("../../services/user")
const router = express.Router()
router.get("/users", (req, res) =>{
    res.send("Users")
})
router.post("/users", (req, res) =>{
    console.log(req.body)
    res.send("Create USER")
})
router.get("/users/:userid", (req, res) => {

    res.send(findById(req.params.userid))
})
module.exports = router