import axios from "axios"

axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://localhost:8080"

axios.interceptors.response.use((res) => {
    if (res.data.code !== 200) {
        window.alert("网络异常，请再尝试")
        return Promise.reject(res)
    }
    return res
}, (error) => {
    window.alert("网络异常,请检查网络")
    return Promise.reject(error.response)
})



export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: param
        }).then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}

export function fetchPost(url, param) {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            params: param
        }).then(res => {
            resolve(res.data)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}