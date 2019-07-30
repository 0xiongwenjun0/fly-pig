import { fetchGet } from "../request/fetch"
import { RegisterUrl } from "../URL"
import md5 from "md5"

function Register({ username, password }) {
    return fetchGet(RegisterUrl, {
        username: username,
        password: md5(password)
    })
}

export default Register