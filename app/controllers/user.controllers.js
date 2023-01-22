// import { pool } from '../../db.js'



export const getUsers = (req, res) => { 
    res.send('obteniendo empleados')
}

export const createUser = async (req,res, next) => {
    try{
        const { username, stage, chest, weapon } = req.body
        await pool.query('INSERT INTO users_data (username, stage) values (?,?)', [username, stage])
        res.status(201).json({message: "user created"})
    } catch (error) {
        next(error);
    }
}
export const updateUsers = (req,res) => res.send('actualizando users')
export const deleteUsers = (req,res) => res.send('eliminando users')

// exports.createUser = async (req, res, next) => {
//     try {
//         const { userName,ID, stage, chest, weapon } = req.body;
//         const createUser = await User.create({
//             userName,
//             ID,
//             stage,
//             chest,
//             weapon
//         });
//         res.send(createUser);
//     } catch (error) {
//         next(error);
//     }
// };
// exports.getAllUsers = async (req, res, next) => {
//     try {
//         const users = await User.findAll();
//         res.send(users);
//     } catch (error) {
//         next(error);
//     }
// };

// exports.getUserById = async (req, res, next) => {
//     try {
//         const ID = Number(req.params.ID)
//         const user = await User.findOne({ where: { ID } });
//         if (!user) {
//             return res.status(404).send({
//                 message: 'User Not Found',
//             });
//         }res.send(user);
//     } catch (error) {
//         next(error);
//     }
// };


