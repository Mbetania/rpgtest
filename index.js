const express = require("express")
const app = express()
const userRouter = require("./app/routes/user")
const User = require('./app/models/user');
const sequelize = require('./config/mysql');


app.use(express.json())
const port = 3001

app.listen(port, () =>{
    console.log(`servidor escuchando puerto n° ${port}`)
})

app.get("/", (req, res) =>{
    res.send("hello")
})
app.use(userRouter)



User.sync();