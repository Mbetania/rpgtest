const express = require("express")
const app = express()
const userRouter = require("./app/routes/user")
app.use(express.json())
const port = 3001
app.listen(port, () =>{
    console.log(`servidor escuchando puerto n° ${port}`)
})
// app.listen(3000)
app.get("/", (req, res) =>{
    res.send("hello")
})
app.use(userRouter)
