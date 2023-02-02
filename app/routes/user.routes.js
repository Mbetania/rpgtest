import {  Router } from "express";
import { validateColumn } from "../../middleware/validationColumn.js";
import { getUsers,createUser, updateUsers, deleteUsers, getUser, updateData } from '../controllers/user.controllers.js'

const router = Router()
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/users', createUser)
router.put('/user/:id', updateUsers)
router.delete('/user/:id', deleteUsers)
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const column = req.body.column;
    const value = req.body.value;

    const results = updateData(id, column, value);

    if (results.error) {
        return res.status(400).json({ error: results.error });
    }

    res.status(200).json({ message: 'Datos actualizados con éxito.' });
});


export default router