// const { sequelize, Sequelize } = require("./link")
const { User } = require("../model")

var now = new Date();
var setUserData = async function ({username, password}) {
    var user = await User.create({
        _id: 'user-' + now,
        username: username,
        password: password,
        createdAt: now.toString(),
        updatedAt: now.toString()

    });
};

var getUserData = async ({ username, _id, all, select_info }) => {
    if (all) {
        return await User.findAll()
    }
    if (select_info) {
        return await User.findAll({ where: select_info })
    }
    if (username) {
        let data = await User.findAll({ where: { username: username } })
        return data
    }
    if (_id) {
        let data = await User.findAll({ where: { _id: _id } })
        return data
    }
}

var updateUserData = async (select, { }) => {

}

module.exports = { setUserData, getUserData }