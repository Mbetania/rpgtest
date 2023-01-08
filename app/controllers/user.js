const express = require("express")
const router = express.Router()
router.get("/users", (req, res) =>{
    res.send("Users")
})
router.post("/users", (req, res) =>{
    res.send("Create USER")
})
router.get("/users/:id", (req, res) => {
    res.send(req.params.id)
})
module.exports = router