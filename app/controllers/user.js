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
        const ID = Number(req.params.ID)
        const user = await User.findOne({ where: { ID } });
        if (!user) {
            return res.status(404).send({
                message: 'User Not Found',
            });
        }res.send(user);
    } catch (error) {
        next(error);
    }
};


exports.createUser = async (req, res, next) => {
    try {
        const { userName,ID, stage, chest, weapon } = req.body;
        const createUser = await User.create({
            userName,
            ID,
            stage,
            chest,
            weapon
        });
        res.send(createUser);
    } catch (error) {
        next(error);
    }
};
