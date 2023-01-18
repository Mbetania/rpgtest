const express = require("express")
import {conexion} from './db.js'
const app = express()
// const userRouter = require("./app/routes/user")
// const User = require('./app/models/user');
require("dotenv").config();

// app.use(express.json())
const port = 3001

app.listen(port, () =>{
    console.log(`servidor escuchando puerto n° ${port}`)
})

app.get("/", (req, res) =>{
    res.send("hello")
})
app.get("/ping", async (req,res) => {
    const result =  await conexion.query('SELECT * FROM userData' )
    res.json(result)
})
// app.use(userRouter)

// User.sync();