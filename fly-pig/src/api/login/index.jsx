import md5 from "md5"
import { fetchGet } from "../request/fetch"
import { SignUrl } from "../URL"


export function Sign_In({ username, password }) {
    return fetchGet(SignUrl, {
        username: username,
        password: md5(password)
    })
}

export default Sign_In