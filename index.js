const express = require("express")
const app = express()
const userRouter = require("./app/controllers/user")
app.use(express.json)
app.listen(3000)
app.get("/", (req, res) =>{
    res.send("hello")
})
app.use(userRouter)
