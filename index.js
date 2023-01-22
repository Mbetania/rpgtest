import express  from "express"
import * as dotenv from 'dotenv'
// IMPORT ROUTER
import indexRouter from './app/routes/index.routes.js'
import userRouter from './app/routes/user.routes.js'
dotenv.config()

const app = express()



app.get("/", (req, res) =>{
    res.send("hello")
})
app.use(indexRouter)
app.use(userRouter)

app.listen(3001, () =>{
    console.log(`servidor escuchando puerto n° 3001`)
})
// User.sync();