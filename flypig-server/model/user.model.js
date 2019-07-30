const {Sequelize,sequelize} = require("../mysql/link")

module.exports = User = sequelize.define('user', {
    _id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    username: Sequelize.STRING(20),
    password: Sequelize.STRING(100),
    createdAt: Sequelize.STRING(50),
    updatedAt: Sequelize.STRING(50)
}, {
        timestamps: false
    });
