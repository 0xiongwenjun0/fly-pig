const fs = require("fs")

let img_arr = null;
let error_info = null;

fs.readFile("./static/img/home/travel_left_img.jpg", (error, data) => {
    if (error)
        error_info = error
    img_arr = data
})

const homeImg = async (ctx, next) => {
    ctx.response.body = img_arr
    await next()
}

module.exports = homeImg