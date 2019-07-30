const router = require("koa-router")()
const userLogin = require("./userLogin")
const userRegister = require("./userRegister")
// const homeImg = require("./homeImg")

//拦截
router.get("/favicon.ico", async (ctx, next) => {
    return ctx.response.body = "none"
})
router.get("/login", userLogin)
router.get("/register", userRegister)
// router.get("/home_img", homeImg)

module.exports = router