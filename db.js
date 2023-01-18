const mysql = require('mysql2')

export const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    port: 3306,
    database: process.env.DB_DATABASE
})

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion exitosa')
    }
});
conexion.query('SELECT * FROM userData', function(error, results, fields){
    if(error)
    throw error;

    results.forEach(result => {
        console.log(result)
    });
})
