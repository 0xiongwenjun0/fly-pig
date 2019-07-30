const { setUserData } = require("../mysql/index")
// 登录函数
let userRegister = async (ctx, next) => {
    let { username, password } = ctx.request.query
    let data = {};
    if (validation({ username, password })) {
        await setUserData({ username: username, password: password }).then(res => {
            data.code = 200;
            data.res = "注册成功";
            data.login = true;
            console.log("用户注册成功")
        }).catch(error => {
            data.error = error;
            data.code = 200;
            console.log("用户注册失败")
            console.log(error)
        })
    } else {
        data.error = "数据格式错误";
        data.code = 200
    }
    ctx.response.body = data;
    await next()
}
// 验证数据是否符合规范
function validation({ username, password }) {
    var rexgexp= new RegExp("[0-9a-zA-Z]{6-16}")
    
    return true
}
module.exports = userRegister
// export default route