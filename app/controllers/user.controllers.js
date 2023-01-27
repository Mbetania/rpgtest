import { pool } from '../../db.js'



export const getUsers = async (req, res,next) => { 
    try {
        const [rows] = await pool.query('SELECT * FROM users_data')
        return new Promise((resolve, reject) => {
        resolve(res.json(rows))
        })
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res) =>{
    try{
        //execute = metodo de mysql2 p/ eject consulta sql en db mysql -> simil query
        const [user] = await pool.execute('SELECT * FROM users_data WHERE id = ?', [req.params.id])
        if (!user.length) throw new Error('El usuario no existe')
        res.json(user)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const  createUser = async (req,res, next) => {
    try{
        let { username, stage, chest, weapon } = req.body;
        stage = stage || 'limbo';
        chest = chest || 'no items';
        weapon = weapon || 'fists';
        const rows = await pool.query('INSERT INTO users_data (username, stage, chest, weapon) values (?,?,?,?)', [username, stage, chest, weapon])
        res.status(201).json({
            id: rows.insertId,
            username,
            stage,
            chest,
            weapon
        })
    } catch (error) {
        next(error);
    }
}

export const deleteUsers = async (req,res) => {
    const [result] = await pool.query('DELETE FROM users_data WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
        message :'No se encuentra el usuario a eliminar'
    })
    console.log(result)
    res.sendStatus(204)
}



export const updateUsers = async (req, res, next) => {
    try{
        const { id } = req.params
        const {username, stage, chest, weapon } = req.body
        const [result] = await pool.query('UPDATE users_data SET username = ?, stage = ?, chest = ?, weapon = ? WHERE id = ?', 
        [username, stage, chest, weapon, id])
        if (result.affectedRows <= 0 ) return res.status(404).json({
            message: "No se encuentra el usuario a actualizar"
        })
        res.sendStatus(200)
        console.log(result)
    } catch (error){
        next(error)
    }    
}



