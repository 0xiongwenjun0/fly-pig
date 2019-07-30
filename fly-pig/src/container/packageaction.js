import {
    LOGIN_IN,//,SHOW,HIDDEN,PUSHDATE,
    LOGIN_OUT, PUSH_TICKET
} from "../redux/typeofaction"

// 登录
export const login_in = (username) => {
    return {
        type: LOGIN_IN,
        username: username
    }
}

export const push_ticket = (ticket) => {
    return {
        type: PUSH_TICKET,
        ticket: ticket
    }
}

// // 显示日历
// export const show = ()=>{
//     return {
//         type:SHOW
//     }
// }

// // 隐藏日历
// export const hidden = ()=>{
//     return {
//         type:HIDDEN
//     }
// }

// // 置入日期
// export const push_date = (date)=>{
//     return {
//         type:PUSHDATE,
//         date:date
//     }
// }