import express  from "express"
import { pool } from './db.js'
import * as dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = 3001

app.listen(port, () =>{
    console.log(`servidor escuchando puerto n° ${port}`)
})

app.get("/", (req, res) =>{
    res.send("hello")
})
app.get("/ping", async (req,res) => {
    const [result] =  await pool.query('SELECT 1 + 1 AS Result' )
    res.json(result)
})
// app.use(userRouter)

// User.sync();