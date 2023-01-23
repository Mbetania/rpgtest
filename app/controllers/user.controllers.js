import { pool } from '../../db.js'



export const getUsers = async (req, res) => { 
    try {
        const [rows] = await pool.query('SELECT * FROM users_data')
        res.json(rows)
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req,res, next) => {
    try{
        let { username, stage, chest, weapon } = req.body;
        if(stage === undefined || stage === null){
            stage = 'limbo';
        }
        if(chest === undefined || chest === null){
            chest = 'no items';
        }
        if(weapon === undefined || weapon === null){
            weapon = 'fists';
        }
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

export const updateUsers = (req,res) => res.send('actualizando users')
export const deleteUsers = (req,res) => res.send('eliminando users')



