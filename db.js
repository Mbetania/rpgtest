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

// conexion.connect(function(error){
//     if(error){
//         throw error;
//     }else{
//         console.log('conexion exitosa')
//     }
// });
// pool.query('SELECT * FROM userData', function(error, results, fields){
//     if(error)
//     throw error;

//     results.forEach(result => {
//         console.log(result)
//     });
// })
