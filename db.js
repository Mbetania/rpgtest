import { createPool } from 'mysql2/promise'
import * as dotenv from 'dotenv'
dotenv.config()

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    port: 3306,
    database: 'usertest'
})
