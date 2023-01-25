import {  Router } from "express";
import { getUsers,createUser, updateUsers, deleteUsers, getUser } from '../controllers/user.controllers.js'

const router = Router()
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/users', createUser)
router.put('/user/:id', updateUsers)
router.delete('/user/:id', deleteUsers)

export default router