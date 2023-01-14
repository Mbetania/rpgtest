const sequelize = require("../../config/db");
const Sequelize = require("sequelize");

const User = sequelize.define("usersInfo", {
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stage: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    chest: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    weapon: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

sequelize.sync();

module.exports = User;
