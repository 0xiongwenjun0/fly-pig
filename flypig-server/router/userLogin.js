const { getUserData } = require("../mysql/index")

let userLogin = async (ctx, next) => {
    let { username, password } = ctx.request.query
    let data = {};
    await getUserData({ username: username }).then(res => {
        if (res[0].dataValues.password === password) {
            data.code = 200;
            data.stauts = 200;
            data.login = true;
        } else {
            data.code = 200;
            data.login = false;
            data.error = "密码错误"
        }
        if (res.length === 0) {
            data.error = "未查询到账号";
            data.code = 200;
        }
    }).catch(() => {
        data.error = "网络异常";
        data.code = 200;
    })
    ctx.response.body = data
    await next()
}

module.exports = userLogin
// export default route