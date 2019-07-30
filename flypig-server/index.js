const Koa = require("koa")

const path = require("path")

const router = require("./router/index")

const koaBody = require("koa-body")

const kosStatic = require("koa-static")

const koa = new Koa();

koa.use(async (ctx, next) => {
    // 允许哪个域名请求
    ctx.set("Access-Control-Allow-Origin", "http://localhost:3000");
    // 服务器支持的头部 x-custom
    ctx.set("Access-Contol-Allow-Header", "X-custom, content-type");
    // 支持的方法
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    // 允不允许携带 cookie
    // 设置为 允许的时候 Access-Control-Allow-Origin 需要是一个具体的域名，不能是 *
    ctx.set("Access-Control-Allow-Credentials", true);
    await next()
})

koa.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 20 * 1024 * 1024    // 设置上传文件大小最大限制
    }
}))

koa.use(kosStatic(
    path.join(__dirname,"./static")
))
koa.use(router.routes())

koa.listen(8080, () => {
    console.log("server is running at 8080")
})