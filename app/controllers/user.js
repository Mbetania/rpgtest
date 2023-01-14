const User = require('../models/user');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        next(error);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const { ID } = req.params;
        const userName = await User.findOne({ where: { userName: req.params.ID } });
        if (!userName) {
        return res.status(404).send({
            message: 'User Not Found',
        });
        }
        res.send(userName);
    } catch (error) {
        next(error);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const { userName, stage, chest, weapon } = req.body;
        const createUser = await User.create({
            userName,
        stage,
        chest,
        weapon
        });
        res.send(createUser);
    } catch (error) {
        next(error);
    }
};
